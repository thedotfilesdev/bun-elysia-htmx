export type Todo = {
  name: string;
}

export function Todos({ todos }: { todos: Todo[] }) {
  return <ul>
    {todos.map(todo => <li>{todo.name}</li>)}
  </ul>
}
