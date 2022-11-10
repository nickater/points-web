import { Menu } from "react-feather";
import { Pressable } from "../Pressable/Pressable";

export const MenuButton = () => {
  const onClick = () => {
    console.log("Menu Button Pressed");
  };

  return (
    <Pressable onClick={onClick}>
      <Menu size={30} />
    </Pressable>
  );
};
