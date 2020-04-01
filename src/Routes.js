import HomePage from "./components/homePage/HomePage";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";

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
  }
];

export default routes;
