export type StorableEntity = "user-id" | "room-id" | "room-name";

export const useStorage = () => {
  const setItem = <T>(key: StorableEntity, item: T) => {
    const stringifiedItem = JSON.stringify(item);
    localStorage.setItem(key, stringifiedItem);
  };

  const getItem = (key: StorableEntity): string | null => {
    const stringifiedItem = localStorage.getItem(key);
    if (!stringifiedItem) return null;
    const parsedItem = JSON.parse(stringifiedItem);
    return parsedItem;
  };

  return { setItem, getItem };
};
