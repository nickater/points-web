import { FunctionComponent, PropsWithChildren, useState } from "react";

export type PressableProps = {
  onClick: () => void;
};
export const Pressable: FunctionComponent<
  PropsWithChildren<PressableProps>
> = ({ children, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      onMouseDown={() => setIsClicked(true)}
      onMouseUp={() => setIsClicked(false)}
      className={`${isClicked && "opacity-5"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
