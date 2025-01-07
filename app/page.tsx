import React from 'react'
import Header from '@/components/Header'
import BlogsCard from '@/components/BlogCard/Blogs'
import Footer from '@/components/Footer'
const Home = () => {
  return (
    <div className='bg-[#49146B]'>
      <Header/>
      <BlogsCard/>
      <Footer/>
    </div>
  )
}

export default Home
