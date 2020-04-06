import HomePage from "./components/homePage/HomePage";
import SignIn from "./containers/signIn";
import SignUp from "./containers/signUp";
import { TasksList } from "./containers/TasksList";

const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage
  },
  {
    path: "/sign-in",
    exact: true,
    component: SignIn
  },
  {
    path: "/sign-up",
    exact: true,
    component: SignUp
  },
  {
    path: "/tasks",
    exact: true,
    component: TasksList
  }
];

export default routes;
