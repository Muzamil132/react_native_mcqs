import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const url='https://mcqs-app-backend.vercel.app'

export const api =createApi({
    reducerPath: "UserApi",
    baseQuery:fetchBaseQuery({baseUrl:url}),
    endpoints:(builder)=>({
        register:builder.mutation({
           query:user=>({
            url: '/user/register',
            method: 'POST',
            body: user
           })
        })
    })
})

export const {useRegisterMutation}=api