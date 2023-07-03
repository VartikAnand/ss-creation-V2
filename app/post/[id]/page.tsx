
'use client'
import { useParams } from 'next/navigation';
import React from 'react';
import { Typography ,
  Tooltip,
  IconButton,} from "@material-tailwind/react";
import { AiFillEye, AiFillGithub, AiFillInstagram, AiFillYoutube} from 'react-icons/ai';

const Post = () => {
  const { id } = useParams();

  return (
    <div className='h-screen flex flex-col justify-center items-center rounded-b-3xl' style={{ background: 'linear-gradient(0deg, #e11d48 0%, #ffffff 100%)' }}>
      {/* Section 1 */}
      <figure className='relative  w-full lg:w-1/2 shadow-2xl rounded-2xl '>
        {/* Image */}
        <img
          className='h-auto lg:h-full w-full rounded-xl'
          src='https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80'
          alt='nature image'
        />
        {/* Image caption */}
        <figcaption className='absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm'>
          <div>
            <Typography variant='h5' color='blue-gray'>
             {id}
            </Typography>
          
          </div>
          <Typography color="blue-gray" className="flex items-center gap-1.5 font-normal">
              <AiFillEye className="-mt-0.5 h-5 w-5 text-hover" />
            500
            </Typography>
        </figcaption>
      </figure>

      {/* Section 2 */}
      <div className='mx-2 w-full lg:w-3/4 mt-8'>
        {/* Content for the second section */}
        <div className='h-full mx-2 bg-white rounded-xl p-4 shadow-lg shadow-black/5'>
          {/* Content */}
          <div className='flex flex-row justify-between align-middle'>
            <div>
              <Typography variant='h5' color='blue-gray'>
          {id}
              </Typography>
              <Typography variant='p' color='blue-gray'>
                Descripion
              </Typography>
              <Typography variant='p' color='blue-gray'>
                category
              </Typography>
              
            </div>
            <div>share</div>
          </div>
          <div className="group mt-2 inline-flex justify-center flex-wrap items-center gap-3">
            <Tooltip content='downloadTooltip'>
              <IconButton
                className="cursor-pointer flex items-center justify-center rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-primary transition-colors hover:border-pink-500/10 hover:bg-pink-600/10 hover:!opacity-100 group-hover:opacity-70"
                // onClick={() => window.open(downloadUrl, "_blank")}
              >
                <span className="cursor-pointer">
                  <AiFillGithub className="text-lg" />
                </span>
              </IconButton>
            </Tooltip>
            <Tooltip content='socialMediaTooltip'>
              <IconButton
                className="cursor-pointer flex items-center justify-center rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-primary transition-colors hover:border-pink-500/10 hover:bg-pink-600/10 hover:!opacity-100 group-hover:opacity-70"
                // onClick={() => window.open(socialMediaUrl, "_blank")}
              >
                <span className="cursor-pointer">
                  <AiFillInstagram className="text-lg" />
                </span>
              </IconButton>
            </Tooltip>
            <Tooltip content="Watch Out">
              <IconButton
                className="cursor-pointer flex items-center justify-center rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-primary transition-colors hover:border-pink-500/10 hover:bg-pink-600/10 hover:!opacity-100 group-hover:opacity-70"
                onClick={() => window.open("https://youtube.com", "_blank")}
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
  );
};

export default Post;
