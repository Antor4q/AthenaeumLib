import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IBook, IBookCreate, IGetBooksResponse, IGetSingleBook } from "../types/booksInterface";
import type { IBBSResponse,IBorrowRequest, IBorrowResponse } from "../types/borrowInterface";


export const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "https://assignment3-moon-exp.vercel.app/api"}),
    tagTypes: ["Book","Borrow"],
    endpoints: (builder) => ({
        getBooks: builder.query<IGetBooksResponse, {page:number,limit:number}>({
            query: ({page,limit})=>`books?page=${page}&limit=${limit}`,
            providesTags: ["Book"]
        }),
        getSingleBook: builder.query<IGetSingleBook, string>({
        query: (id) => `books/${id}`,
        providesTags: ["Book"],
        }),
        updateBook: builder.mutation<IBook, Partial<IBook> & { _id: string }>({
        query: ({ _id, ...patch }) => ({
            url: `books/${_id}`,
            method: "PUT",
            body: patch,
        }),
        invalidatesTags: ["Book"],
        }),
        deleteBook: builder.mutation<{ success: boolean; message: string }, string>({
            query: (id) => ({
                url: `books/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Book"]
        }),
        addBook: builder.mutation<IBook, IBookCreate>({
        query: (newBook) => ({
            url: "books",
            method: "POST",
            body: newBook,
        }),
        invalidatesTags: ["Book"]
        }),
        getBorrowBooks: builder.query<IBBSResponse,{page:number,limit: number}>({
            query: ({page=1,limit=10})=> `borrow?page=${page}&limit=${limit}`,
            providesTags: ["Borrow"]
        }),
        borrowBook: builder.mutation<IBorrowResponse,IBorrowRequest>({
            query: (borrowBook) => ({
                url:`borrow/${borrowBook.book}`,
                method: "POST",
                body: borrowBook,
            }),
            invalidatesTags: ["Borrow","Book"]
        })

    })
})

export const {
    useGetBooksQuery,
    useGetSingleBookQuery,
    useUpdateBookMutation,
    useDeleteBookMutation,
    useAddBookMutation, 
    useGetBorrowBooksQuery,
    useBorrowBookMutation
} = baseApi;
