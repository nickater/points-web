import { HomeTitleButton } from "../../atoms/HomeTitleButton/HomeTitleButton";
import { MenuButton } from "../../atoms/MenuButton/MenuButton";

export const Navbar = () => {
  return (
    <div className="bg-slate-700 h-14 flex justify-between text-white text-xl">
      <HomeTitleButton />
      <MenuButton />
    </div>
  );
};
