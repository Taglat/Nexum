import Auth from "@/components/screens/auth/Auth";
import Login from "@/components/screens/auth/Login";
import Register from "@/components/screens/auth/Register";
import Home from "@/components/screens/home/Home";
import Techniques from "@/components/screens/techniques/Techniques";
import Materials from "@/components/screens/materials/Materials";
import Profile from "@/components/screens/profile/Profile";

import { IRoute } from "./navigation.types";

export const routes: IRoute[] = [
  {
    name: 'Auth',
    component: Auth,
  },
  {
    name: 'Login',
    component: Login,
  },
  {
    name: 'Register',
    component: Register,
  },
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Techniques',
    component: Techniques,
  },
  {
    name: 'Materials',
    component: Materials,
  },
  {
    name: 'Profile',
    component: Profile,
  },
]