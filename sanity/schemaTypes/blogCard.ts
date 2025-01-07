



import { defineField, defineType } from "sanity";



export const  BlogCard=defineType({
         name:"blog_card",
         title:"Blog_Card",
         type:"document",
         fields:[
            defineField({
                name:"image",
                title:"Image of Blog Post",
                type:"image"
            }),
            defineField({
                name:"heading",
                title:"Blog Heading",
                type:"string"
            }),
            defineField({
                name:"description",
                title:"Blog Description",
                type:"string"
            }),
           
         ]
})