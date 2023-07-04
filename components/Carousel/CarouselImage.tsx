'use client'
import { useState, useEffect } from 'react';
import { Carousel } from '@material-tailwind/react';
import ImageLoader from '../Loader/imageLoader/imageLoader';
import { getCarousel, urlFor } from 'ss/context/sanity';
import { Url } from 'url';



interface Image {

  _id:string;
  alt:string;
  image:{
    _type:'string'
   };
}



export default function CarouselImage() {
  const [loading, setLoading] = useState(true);

  const [allCategory, setAllCategory] = useState<Image[]>([]);

  useEffect(() => {
    // Loading category list from backend
    getCarousel()
      .then((data) => {
        setAllCategory(data);
        setLoading(false);
      })
      .catch((err) => alert(err));
  }, []);



  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      
      <div className="relative flex justify-center  align-middle items-center w-full">
<ImageLoader/>    </div>
     
    );
  }

  return (
    <Carousel transition={{ duration: 1 }} className="rounded-xl h-96 w-full object-cover overflow-hidden shadow-lg">
  {allCategory.map((category) => (
  <img key={category._id} src={urlFor(category.image).url()} alt={category.alt} className='flex items-center h-full w-full ' />
))}

  </Carousel>
  );
}
