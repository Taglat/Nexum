import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TypeRootStackParamList } from "./navigation.types";
import { FC, useEffect, useState } from "react";
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { publicRoutes, routes } from "./routes";
import { useAuth } from "@/context/AuthContext";
import BottomMenu from "@/components/layout/bottom-menu/BottomMenu";

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

const Navigation: FC = () => {
  const { isAuthenticated } = useAuth();

  const [currentRoute, setCurrentRoute] = useState<string | undefined>(undefined);
  const navRef = useNavigationContainerRef();

  useEffect(() => {
    if (navRef.isReady()) {
      setCurrentRoute(navRef.getCurrentRoute()?.name);

      const listener = navRef.addListener('state', () => {
        setCurrentRoute(navRef.getCurrentRoute()?.name);
      });

      return () => {
        navRef.removeListener('state', listener);
      };
    }
  }, [navRef]);

  return (
    <>
      <NavigationContainer ref={navRef}>
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
      
      
      {isAuthenticated && navRef.isReady() && currentRoute && (
        <BottomMenu nav={navRef.navigate} currentRoute={currentRoute} />
      )}
    </>
  );
}

export default Navigation;
