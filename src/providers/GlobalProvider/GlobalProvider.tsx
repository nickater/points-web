import {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { useStorage } from "../../hooks/useStorage";

export type GlobalContextData = {
  userId: string;
  roomId: string | null;
  setRoomId(id: string): void;
  roomName: string;
  setRoomName(name: string): void;
};

export const GlobalContext = createContext<GlobalContextData | null>(null);

export const GlobalProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [roomId, _setRoomId] = useState<string | null>(null);
  const [roomName, _setRoomName] = useState("");
  const [userId, _setUserId] = useState("");
  const { getItem, setItem } = useStorage();

  const setRoomId = (id: string) => {
    setItem("room-id", id);
    _setRoomId(id);
  };

  const setRoomName = (name: string) => {
    setItem("room-name", name);
    _setRoomName(name);
  };

  const setUserId = (id: string) => {
    setItem("user-id", id);
    _setUserId(id);
  };

  useEffect(() => {
    const _roomName = getItem("room-name") || "";
    const _roomId = getItem("room-id") || "";
    const _userId = getItem("user-id");
    _roomName && setRoomName(_roomName);
    _roomId && setRoomId(_roomId);
    _userId && setUserId(_userId);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        userId,
        roomId,
        setRoomId,
        roomName,
        setRoomName,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
