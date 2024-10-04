import cn from "clsx";
import { FC, PropsWithChildren } from "react";
import { Pressable, Text } from "react-native";

import { IButton } from "./button.interface";

const Button: FC<PropsWithChildren<IButton>> = ({
  className,
  textClassName,
  children,
  ...rest
}) => {
  
  return (
    <Pressable
      className={cn(
        "self-center mt-3.5 w-full py-4 rounded-full bg-black",
        className
      )}
      {...rest}
    >
      <Text className={cn("text-center font-medium text-lg text-white", textClassName)}>
        {children}
      </Text>
    </Pressable>
  );
};

export default Button;
