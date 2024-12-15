import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const TodoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getAllTodos: builder.query<Todo[], void>({
      query: () => ({
        url: "/todos",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetAllTodosQuery } = TodoApi;
