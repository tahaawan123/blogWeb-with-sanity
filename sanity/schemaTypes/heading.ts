import { defineField, defineType } from "sanity";



export const  Heading=defineType({
         name:"blog_heading",
         title:"Blog_Heading",
         type:"document",
         fields:[
            defineField({
                name:"heading",
                title:"Heading of Blog",
                type:"string"
            }),
           
         ]
})