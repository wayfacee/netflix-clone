import React from "react";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";
import StartPage from "./pages/Start/StartPage";

interface RoutesType {
  path: string;
  element: React.ComponentType;
}

enum RoutesEnum {
  LOGIN = '/login',
  HOME = '/home',
  START_PAGE = '/start_page'
}

export const publicRoutes: RoutesType[] = [
  { path: RoutesEnum.START_PAGE, element: StartPage },
  { path: RoutesEnum.LOGIN, element: Login }
]

export const privateRoutes: RoutesType[] = [
  { path: RoutesEnum.HOME, element: Home },
  { path: '/player/:id', element: Player }
]