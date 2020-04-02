import HomePage from "./components/homePage/HomePage";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import ReduxTesTask from './components/ReduxTestTask/ReduxTestTask';

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
    path: '/redux-test-task',
    exact: true,
    component: ReduxTesTask
  }
];

export default routes;
