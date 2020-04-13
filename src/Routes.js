import HomePage from "./components/homePage/HomePage";
import SignIn from "./containers/auth/authFormContainer/signIn";
import SignUp from "./containers/auth/authFormContainer/signUp";
import { TasksList } from "./containers/TasksList";
import AddTask from "./containers/addTask/AddTask";

const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/sign-in",
    exact: true,
    component: SignIn,
  },
  {
    path: "/sign-up",
    exact: true,
    component: SignUp,
  },
  {
    path: "/tasks",
    exact: true,
    component: TasksList,
  },
  {
    path: "/create-task",
    exact: true,
    component: AddTask,
  },
];

export default routes;
