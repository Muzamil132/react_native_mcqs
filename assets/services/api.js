import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const url='https://mcqs-app-backend.vercel.app'

export const api =createApi({
    reducerPath: "UserApi",
    tagTypes: ['Question', 'Category','SubCategory','User'],
    baseQuery:fetchBaseQuery({baseUrl:url}),
    endpoints:(builder)=>({
        register:builder.mutation({
           query:user=>({
            url: '/user/register',
            method: 'POST',
            body: user
           }),
          
        }),
        login:builder.mutation({
            query:user=>({
             url: '/user/login',
             method: 'POST',
             body: user
            })
         })
         ,addQuestion:builder.mutation({
            query:question=>({
             url: '/questions/add',
             method: 'POST',
             body: question
            }),
            invalidatesTags: ['Question'],
         }),
         editQuestion:builder.mutation({
            query:({question,id})=>({
             url: `/questions/edit/${id}`,
             method: 'POST',
             body: question
            }),
            invalidatesTags: ['Question'],
         }),
         addCategory:builder.mutation({
            query:(title)=>({
             url: `/category/add`,
             method: 'POST',
             body: title
            }),
            invalidatesTags: ['Category'],
         }),
      deleteCategory:builder.mutation({
            query:(id)=>({
             url: `/category/${id}`,
             method: 'DELETE',
             
            }),
            invalidatesTags: ['Category']
         }),
         deleteSubCategory:builder.mutation({
            query:(id)=>({
             url: `/category/subcategory/${id}`,
             method: 'DELETE',
             
            }),
            invalidatesTags: ['SubCategory'],
         }),
         getQuestions:builder.query({
            query:({id,page})=> `/questions/all/${id}?page=${page}`,
            providesTags:['Question']

         }),
         myQuestions:builder.query({
            query:({id,page})=> `/questions/me/${id}?$page=${page}`,
            providesTags:['Question']
         }),
         getCategory:builder.query({
            query:()=> `/category/all`,
            providesTags:['Category']
         }),
         addSubCategory:builder.mutation({
            query:({title,id})=>({
             url: `/category/add/${id}`,
             method: 'POST',
             body: {title}
            }),
            invalidatesTags:['SubCategory']
         }),
         getSubCategory:builder.query({
            query:(id) => `/category/all/${id}`,
            providesTags:['SubCategory']
         }),
        

    })
})

export const {
   useDeleteCategoryMutation,
   useDeleteSubCategoryMutation,
    useAddSubCategoryMutation,
    useGetSubCategoryQuery,
    useGetCategoryQuery,
    useAddCategoryMutation,
    useRegisterMutation,
    useGetQuestionsQuery,
    useLoginMutation,
    useEditQuestionMutation,
    useMyQuestionsQuery
    ,useAddQuestionMutation
}=api


