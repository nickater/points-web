import { useNavigate } from "react-router-dom";
import { Button } from "../../components/atoms/Buttons/Button";
import { useGlobalData } from "../../hooks/useGlobalData";
import { createRoom } from "../../services/room";
import HomeTemplate from "../../templates/HomeTemplate";

export const HomeScreen = () => {
  const navigate = useNavigate();
  const { setRoomId, setRoomName } = useGlobalData();
  const onClick = async () => {
    const name = prompt("What would you like to name your room?") || "";
    const { failure, result } = await createRoom({ name });
    console.log(result);
    if (failure || !result.id || !result.name) {
      return;
    }

    setRoomId(result.id);
    setRoomName(result.name);
    navigate(`points/${result.id}`);
  };

  return (
    <HomeTemplate mainNode={<Button title="Start!" onClick={onClick} />} />
  );
};
