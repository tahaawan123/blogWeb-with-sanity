



import { client } from '@/sanity/lib/client'
import React from 'react'

interface HeadingType{
    heading:string
}


const getData =async ()=>{
    const fetchData= await client.fetch(`*[_type =="blog_heading"]{
  heading
}`)
    return fetchData
}





const Header =async () => {
  const data=await getData()
    console.log(data)


  return (
    <div>
          {data.map((item:HeadingType, i:number)=>{
             return(

                 <div key={i} className='bg-gray-900 shadow-md  text-white h-20 flex justify-center items-center mb-20'>
                   <p className='font-mono text-xl sm:text-5xl font-bold'>{item.heading}</p>

                 </div>


             )


          })}
    </div>
  )
}

export default Header
