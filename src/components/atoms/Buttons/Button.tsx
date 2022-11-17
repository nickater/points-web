import { FunctionComponent } from "react";
import { Pressable } from "../Pressable/Pressable";

type ButtonProps = {
  title: string;
  onClick: () => void;
};
export const Button: FunctionComponent<ButtonProps> = ({ title, onClick }) => {
  return (
    <Pressable onClick={onClick}>
      <div className="rounded bg-slate-500 p-4">
        <p>{title}</p>
      </div>
    </Pressable>
  );
};
