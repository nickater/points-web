import { HomeTitleButton } from "../../atoms/HomeTitleButton/HomeTitleButton";
import { MenuButton } from "../../atoms/MenuButton/MenuButton";

export const Navbar = () => {
  return (
    <div className="bg-slate-700 flex justify-between text-white text-xl py-3 px-6">
      <HomeTitleButton />
      <MenuButton />
    </div>
  );
};
