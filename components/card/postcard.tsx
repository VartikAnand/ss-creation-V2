'use client'
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";

import { AiFillEye, AiFillGithub, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import Link from "next/link";
import { urlFor } from 'ss/context/sanity';

interface PostcardProps {
  imageUrl: string;
  title: string;
  views: number;
  downloadUrl: string;
  downloadTooltip: string;
  socialMediaUrl: string;
  socialMediaTooltip: string;
    imageUrl: {
   _type:MainImage
  };
  mainImage:string;
}




const Postcard: React.FC<PostcardProps> = ({
  imageUrl,
  title,
  views,
  downloadUrl,
  downloadTooltip,
  socialMediaUrl,
  socialMediaTooltip,
}) => {
  return (
    <Link href={`/post/${title}`} className="transform transition-transform duration-300 hover:scale-105 active:translate-y-1" >
      <Card className="w-full max-w-[24rem] shadow-lg lg:m-8 md:m-2 mb-4"  >
        <CardHeader floated={true} className="mt-4">
          <img src={urlFor(imageUrl).url()} alt="ui/ux review check" />
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
        </CardHeader>
        <CardBody>
          <div className="mb-3 flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="font-medium">
              {title}
            </Typography>
            <Typography color="blue-gray" className="flex items-center gap-1.5 font-normal">
              <AiFillEye className="-mt-0.5 h-5 w-5 text-hover" />
              {views}
            </Typography>
          </div>
          <div className="group mt-2 inline-flex justify-center flex-wrap items-center gap-3">
            <Tooltip content={downloadTooltip}>
              <IconButton
                className="cursor-pointer flex items-center justify-center rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-primary transition-colors hover:border-pink-500/10 hover:bg-pink-600/10 hover:!opacity-100 group-hover:opacity-70"
                onClick={() => window.open(downloadUrl, "_blank")}
              >
                <span className="cursor-pointer">
                  <AiFillGithub className="text-lg" />
                </span>
              </IconButton>
            </Tooltip>
            <Tooltip content={socialMediaTooltip}>
              <IconButton
                className="cursor-pointer flex items-center justify-center rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-primary transition-colors hover:border-pink-500/10 hover:bg-pink-600/10 hover:!opacity-100 group-hover:opacity-70"
                onClick={() => window.open(socialMediaUrl, "_blank")}
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
        </CardBody>
      </Card>
    </Link>
  );
};

export default Postcard;
