import { getUserTodoListAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/todos/AddTodoForm";
import TodosTable from "@/components/todos/TodoTable";
import getCurrentUser from "@/actions/getCurrentUser";

export default async function Home() {
  const currentUser = await getCurrentUser();
  console.log("currentUser ", currentUser);
  if (!currentUser) return null;
  const userId = currentUser?.id;
  const todos = await getUserTodoListAction({ userId });

  return (
    <main className="container">
      <div className="mx-auto flex w-full lg:w-3/4 flex-col justify-center space-y-4 mt-10">
        <AddTodoForm userId={userId} />
        <TodosTable todos={todos} />
      </div>
    </main>
  );
}

