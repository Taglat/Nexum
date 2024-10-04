import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TypeRootStackParamList } from "./navigation.types";
import { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { routes } from "./routes";

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

const Navigation:FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: '#ffffff'}
      }}>
        {
          routes.map(route => <Stack.Screen key={route.name} {...route} />)
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
