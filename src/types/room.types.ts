import { Database } from "./database.types";

export type GetRoom = Database["public"]["Tables"]["rooms"]["Row"];
export type InsertRoom = Database["public"]["Tables"]["rooms"]["Insert"];
export type UpdateRoom = Database["public"]["Tables"]["rooms"]["Update"];
