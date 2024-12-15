"use client";
import { useGetAllTodosQuery } from "@/provider/redux/query/Todo";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function Home() {
  const { data: todos, isLoading, isError } = useGetAllTodosQuery();
  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Something Happened</div>;
  return (
    <div className="text-black mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 w-[90%] my-10">
      {todos?.map((todo: Todo) => (
        <div key={todo?.id} className="shadow-md rounded-md p-5">
          <p className="">{todo?.iwd}</p>
          <h2>{todo?.title}</h2>
        </div>
      ))}
    </div>
  );
}
