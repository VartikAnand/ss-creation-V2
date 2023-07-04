'use client'
import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tooltip,
  IconButton,
  CardFooter,
} from "@material-tailwind/react";

import { AiFillEye, AiFillGithub, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import Link from "next/link";
import { getAllPost, urlFor } from 'ss/context/sanity';
import ImageLoader from "../Loader/imageLoader/imageLoader";

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
    _type:any
  };
  mainImage: {
    _type:'string'
  };
  _createdAt: string;
}

const Postcard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [allPost, setAllPost] = useState<PostcardProps[]>([]);

  useEffect(() => {
    setIsLoading(true); // Set isLoading to true before loading the data

    // Loading post data from Sanity
    getAllPost()
      .then((data: PostcardProps[]) => {
        setAllPost(data);
      })
      .catch((err) => alert(err))
      .finally(() => {
        setIsLoading(false); // Set isLoading to false after the data is loaded (whether success or error)
      });
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <ImageLoader />
      </div>
    ); // Render loading state if data is still loading
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mr-2 lg:mr-10 md:mr-5 ">
      {allPost.map((post) => (
        <Link key={post._id} href={`/post/${post.slug.current}`} className="transform transition-transform duration-300 hover:scale-105 active:translate-y-1" >
          <Card className="w-full max-w-[24rem] shadow-lg lg:m-8 md:m-2 mb-4"  >
            <CardHeader floated={true} className="mt-4">
              <img src={urlFor(post.mainImage).url()}  alt="ui/ux review check" />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
            </CardHeader>
            <CardBody>
              <div className="mb-3 flex items-center justify-between">
                <Typography variant="h5" color="blue-gray" className="font-semibold capitalize">
                  {post.title}
                </Typography>
                <Typography color="blue-gray" className="flex items-center gap-1.5 font-normal">
                  <AiFillEye className="-mt-0.5 h-5 w-5 text-hover" />
                  {post.viewCount}
                </Typography>
              </div>
            </CardBody>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Postcard;
