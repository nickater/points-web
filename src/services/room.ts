import { failure, Result, success } from "safe-result";
import { GetRoom } from "../types/room.types";
import { supabase } from "./backend";

type CreateRoomProps = {
  name: string;
};
export const createRoom = async (
  props: CreateRoomProps
): Promise<Result<GetRoom, unknown>> => {
  try {
    const result = await supabase.from("rooms").insert(props).select().single();
    return success(result.data);
  } catch (error) {
    return failure(error);
  }
};
