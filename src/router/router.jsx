import { useRoutes } from "react-router-dom";
import TodoList from "../pages/todoList";
import TodoAdd from "../pages/todoAdd";


const Router = () => {
  const routes = useRoutes([
    { path: "/", element: <TodoList/> },
    {
      path: "/add",
      element: <TodoAdd/>,
      children: [
        { index: true, element: <TodoAdd/> }
      ],
    },
  ]);

  return <div>{routes}</div>;
};

export default Router;