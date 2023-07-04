
'use client'
import { useParams } from 'next/navigation';
import React from 'react';
import {
  Typography,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { AiFillEye, AiFillGithub, AiFillInstagram, AiFillYoutube,AiOutlineShareAlt } from 'react-icons/ai';
import { useEffect } from 'react';
import { getPostBySlug, urlFor } from 'ss/context/sanity';
import { useState } from 'react';
import ImageLoader from 'ss/components/Loader/imageLoader/imageLoader';
import { RWebShare } from "react-web-share";
interface PostcardProps {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  viewCount: number;
  githubUrl: string;
  youtubeUrl: string;
  instagramUrl: string;
  description: string;
  current: {
    _type: any
  };
  mainImage: {
    _type: 'string'
  };
  _createdAt: string;

}


const Post = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [getPost, setGetPost] = useState<PostcardProps[]>([]);

  const [currentUrl, setCurrentUrl] = useState('');
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);


  useEffect(() => {
    if (id) {
      getPostBySlug(id)
        .then((data) => {
          setGetPost(data);
          setIsLoading(false);
        })
        .catch((err) => alert(err))
        .finally(() => {
          setIsLoading(false); // Set isLoading to false after the data is loaded (whether success or error)
        });
    }
  }, []);

  console.log(getPost)
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ImageLoader />
      </div>
    ); // Render loading state if data is still loading
  }
  return (
    <div className='flex flex-col justify-center items-center rounded-b-3xl mt-2 md:mt-6 lg:mt-10 pb-20' style={{ background: 'linear-gradient(0deg, #e11d48 0%, #ffffff 100%)' }}>
      {getPost.map((post) => (
        <>
          <figure className='relative  w-full lg:w-1/2 shadow-2xl rounded-2xl '>
            {/* Image */}
            <img
              className='h-auto lg:h-full w-full rounded-xl'
              src={urlFor(post.mainImage).url()}
              alt='nature image'
            />
            {/* Image caption */}
            <figcaption className='absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm'>
              <div>
                <Typography variant='h5' color='blue-gray'>
                  {post.title}
                </Typography>

              </div>
              <Typography color="blue-gray" className="flex items-center gap-1.5 font-normal">
                <AiFillEye className="-mt-0.5 h-5 w-5 text-hover" />
                {post.viewCount}
              </Typography>
            </figcaption>
          </figure>
          <div className='mx-2 w-full lg:w-3/4 mt-8'>
            {/* Content for the second section */}
            <div className='h-full mx-2 bg-white rounded-xl p-4 shadow-lg shadow-black/5'>
              {/* Content */}
              <div className='flex flex-row justify-between align-middle'>
                <div>
                  <Typography variant="h5" color="blue-gray" className="font-semibold capitalize text-lg">
                    {post.title}
                  </Typography>
                  <Typography variant="p" color="blue-gray" className="text-gray-600">
                    {post.description}
                  </Typography>

                  <Typography variant="p" color="blue-gray">
                    {new Date(post._createdAt).toLocaleDateString()}
                  </Typography>


                </div>
                <RWebShare

                  data={{
                    text: "SS-Creations",
                    url: currentUrl,
                    title: post.title,
                  }}
                >

                  <IconButton
                    className="cursor-pointer flex items-center justify-center rounded-full border border-green-500/5 bg-green-500/5 p-3 text-green-600 transition-colors hover:border-green-500/10 hover:bg-green-600/10 hover:!opacity-100 group-hover:opacity-70"
                  >
                    <span className="cursor-pointer">

                      <AiOutlineShareAlt className="text-lg" />
                    </span>
                  </IconButton>

                </RWebShare>

              </div>
              <div className="group mt-2 inline-flex justify-center flex-wrap items-center gap-3">
                <div className="group mt-2 inline-flex justify-center flex-wrap items-center gap-3">
                  <Tooltip content='Download'>
                    <IconButton
                      className="cursor-pointer flex items-center justify-center rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-primary transition-colors hover:border-pink-500/10 hover:bg-pink-600/10 hover:!opacity-100 group-hover:opacity-70"
                      onClick={() => window.open(post.githubUrl, "_blank")}
                    >
                      <span className="cursor-pointer">
                        <AiFillGithub className="text-lg" />
                      </span>
                    </IconButton>
                  </Tooltip>
                  <Tooltip content='Watch'>
                    <IconButton
                      className="cursor-pointer flex items-center justify-center rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-primary transition-colors hover:border-pink-500/10 hover:bg-pink-600/10 hover:!opacity-100 group-hover:opacity-70"
                      onClick={() => window.open(post.instagramUrl, "_blank")}
                    >
                      <span className="cursor-pointer">
                        <AiFillInstagram className="text-lg" />
                      </span>
                    </IconButton>
                  </Tooltip>
                  <Tooltip content="Demo">
                    <IconButton
                      className="cursor-pointer flex items-center justify-center rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-primary transition-colors hover:border-pink-500/10 hover:bg-pink-600/10 hover:!opacity-100 group-hover:opacity-70"
                      onClick={() => window.open(post.youtubeUrl, "_blank")}
                    >
                      <span className="cursor-pointer">
                        <AiFillYoutube className="text-lg" />
                      </span>
                    </IconButton>
                  </Tooltip>
                </div>

              </div>

            </div>
          </div>
        </>
      ))}


      {/* Section 2 */}


    </div>
  );
};

export default Post;
