import cn from "clsx";
import { FC, JSXElementConstructor, PropsWithChildren, ReactNode } from "react";
import { ScrollView, View } from "react-native";

interface ILayout {
  className?: string;
  noScrollChildren?: ReactNode;
}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, noScrollChildren, className }) => {
  return (
    <View className={cn("h-full w-full bg-white mt-12 px-4", className)}>
      {noScrollChildren}
      <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
    </View>
  );
};

export default Layout;
