import { client } from "@/sanity/lib/client";
import Image from "next/image";
import React from "react";





const getData = async () => {
  const fetchData = await client.fetch(`*[_type == "blog_card"]{
  heading,description,
    "imageUrl": image.asset->url
} `);
  return fetchData;
};


interface BlogsCardType{
  heading:string,
  description:string,
  imageUrl:string
}




const BlogsCard = async () => {
  const data = await getData();
  console.log(data);

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 p-4 ">
      {data.map((item:BlogsCardType,i:number) => {
        return (
          
            <div key={i} className="transition-all duration-300 ease-in-out hover:scale-110 bg-white gap-6 border shadow-lg  flex flex-col rounded-md ">
              <Image
                className="rounded-t-lg"
                src={item.imageUrl}
                alt="Blog Image"
                width={400}
                height={300}
              />
        
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                  {item.heading}
                </h5>

                <p className=" font-normal text-gray-700 dark:text-gray-400">
                  {item.description}
                </p>
                <button className="w-[100px] h-[50px] bg-slate-600 hover:bg-gray-500 rounded-md text-white">View</button>  </div>
            </div>
          
        );
      })}
    </div>
  );
};

export default BlogsCard;
