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

interface BlogsCardType {
  heading: string;
  description: string;
  imageUrl: string;
}

const BlogsCard = async () => {
  const data = await getData();
  console.log(data);

  return (
    <div className="grid gap-6 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {data.map((item: BlogsCardType, i: number) => {
        return (
          <div
            key={i}
            className="transition-transform duration-300 ease-in-out hover:scale-105 bg-white border shadow-md flex flex-col rounded-lg"
          >
            <Image
              className="rounded-t-lg"
              src={item.imageUrl}
              alt="Blog Image"
              width={400}
              height={300}
            />

            <div className="p-4">
              <h5 className="mb-2 text-xl font-semibold text-gray-900">
                {item.heading}
              </h5>

              <p className="text-sm text-gray-600">{item.description}</p>

              <button className="w-full mt-4 py-2 bg-slate-600 hover:bg-gray-500 rounded-md text-white text-sm">
                View
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogsCard;
