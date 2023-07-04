import { client } from "ss/sanity/lib/client";
import { urlForImage } from "ss/sanity/lib/image";


export const urlFor = urlForImage;


export const getCategory = async () => {
    const items = await client.fetch('*[_type == "category"]').then((data) => {
      return data;
    });
    return items;
  }

  export const getCarousel = async () => {
    const items = await client.fetch('*[_type == "carousel"]').then((data) => {
      return data;
    });
    return items;
  }



  export const getAllPost = async () => {
    const items = await client.fetch('*[_type == "post"]').then((data) => {
      return data;
    });
    return items;
  }
