import { ComponentType } from "react";


export type TypeRootStackParamList = {
  Auth: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Techniques: undefined;
  Materials: undefined;
  Profile: undefined;

  Pomodoro: undefined;
  EisenhowerMatrix: undefined;
  Blurting: undefined;
};

export interface IRoute {
  name: keyof TypeRootStackParamList;
  component: ComponentType;
}