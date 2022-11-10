import { FunctionComponent, PropsWithChildren, useState } from "react";

export type PressableProps = {
  onClick: () => void;
};
export const Pressable: FunctionComponent<
  PropsWithChildren<PressableProps>
> = ({ children, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const localOnClick = () => {
    setIsClicked(true);
    onClick();
    setTimeout(() => {
      setIsClicked(false);
    }, 100);
  };

  return (
    <button style={{ opacity: isClicked ? 0.6 : 1 }} onClick={localOnClick}>
      {children}
    </button>
  );
};
