import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TypeRootStackParamList } from "./navigation.types";
import { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { publicRoutes, routes } from "./routes";
import { useAuth } from "@/context/AuthContext";

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

const Navigation:FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#ffffff' },
        }}
      >
        {isAuthenticated
          ? routes.map((route) => (
              <Stack.Screen key={route.name} {...route} />
            ))
          : publicRoutes.map((route) => (
              <Stack.Screen key={route.name} {...route} />
            ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation
