import { ComponentType } from "react";


export type TypeRootStackParamList = {
  Auth: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Techniques: undefined;
  Materials: undefined;
  Profile: undefined;
};

export interface IRoute {
  name: keyof TypeRootStackParamList;
  component: ComponentType;
}