'use client'
import React, { useState, useEffect } from 'react';
import CarouselImage from 'ss/components/Carousel/CarouselImage';
import Categories from 'ss/components/Categories/categories';
import Postcard from 'ss/components/card/postcard';
import { getAllPost } from 'ss/context/sanity';

interface Category {
  viewCount: number;
  githubUrl: string;
  instagramUrl: string;
  _id: string;
  title: string;
  imageUrl: string;
  mainImage:string;
}

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allPost, setAllPost] = useState<Category[]>([]);

  useEffect(() => {
    setIsLoading(true); // Set isLoading to true before loading the data
    // Loading category list from backend
    getAllPost()
      .then((data: Category[]) => {
        setAllPost(data);
      })
      .catch((err) => alert(err))
      .finally(() => {
        setIsLoading(false); // Set isLoading to false after the data is loaded (whether success or error)
      });
  }, []);

  return (
    <section
      className="flex-start flex-col paddings mb-16 min-h-screen rounded-b-3xl"
      style={{ background: 'linear-gradient(0deg, #f76a89 60%, #ffffff 100%)' }}
    >
      <Categories />
      <div className="px-8 justify-center align-middle items-center flex flex-col">
        <div className="hidden lg:block">
          <CarouselImage />
        </div>
        {isLoading ? (
          <p>Loading...</p> // Show the loading text while isLoading is true
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {allPost.map((item) => (
              <Postcard
                key={item._id}
                imageUrl={item.mainImage}
                title={item.title}
                views={item.viewCount}
                downloadUrl={item.githubUrl}
                downloadTooltip="Download"
                socialMediaUrl={item.instagramUrl}
                socialMediaTooltip="Check Out" mainImage={''}              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
