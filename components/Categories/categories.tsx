'use client'
import React, { useState, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { getCategory, urlFor } from 'ss/context/sanity';

interface Category {
  _id: string;
  title: string;
  mainImage: {
   _type:'string'
  };
}

interface Props {
  category: Category[];
}

const Categories = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const categoryFilter = searchParams.get('category');

  const handleTags = (item: string) => {
    router.push(`${pathName}?category=${item}`);
  };

  const [isLoading, setIsLoading] = useState(true);
  const [allCategory, setAllCategory] = useState<Category[]>([]);

  useEffect(() => {
    // Loading category list from backend
    getCategory()
      .then((data: Category[]) => {
        setAllCategory(data);
        setIsLoading(false);
      })
      .catch((err) => alert(err));
  }, []);


  return (
    <div className="flex px-3 flex-row gap-2 overflow-x-auto w-full scrollbar-hide py-4 my-4 sm:px-2  md:px-8 ">
      {isLoading ? (
        <div className="text-center">Loading...</div>
      ) : (
        allCategory.map((category) => (
          <button
            type="button"
            onClick={() => handleTags(category.title)}
            key={category._id}
          >
            <div
              className={`${
                category.title === categoryFilter
                  ? 'border-2 border-primary font-medium'
                  : 'font-normal capitalize  shadow-sm shadow-hover '
              }  flex-shrink-0 w-62 h-12 shadow-lg md:w-72 rounded-full cursor-pointer overflow-hidden`}
            >
              <div
                className="w-full h-full bg-cover overflow-hidden bg-center transform transition-transform duration-300 hover:scale-105"
                style={{
                  backgroundImage: `url(${urlFor(category.mainImage).url()})`,
                }}
              >
                <div className="flex flex-col capitalize justify-center items-center h-full bg-black bg-opacity-50 text-white text-center">
                  <div className="text-xl capitalize sm:text-base px-7">
                    {category.title}
                  </div>
                </div>
              </div>
            </div>
          </button>
        ))
      )}
    </div>
  );
};

export default Categories;
