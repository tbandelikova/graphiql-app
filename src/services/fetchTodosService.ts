import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TodosType } from '../models/todos.model';

export const fetchTodosApi = createApi({
  reducerPath: 'fetchTodosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/todos',
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<TodosType[], number>({
      query: (limit: number) => `?_limit=${limit}`,
    }),
  }),
});

export const { useGetTodosQuery } = fetchTodosApi;
