import * as React from "react";
import InputIcon from "../../atoms/InputIcon/InputIcon.tsx";
import { useForm } from "react-hook-form";
import {
  type SearchQuery,
  searchQuerySchema,
} from "../../../types/shared.types.ts";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useLazySearchRoomsByQueryQuery } from "../../../store/api/room.api.ts";
import type { Room } from "../../../types/room.types.ts";
import { useLazySearchUsersByQueryQuery } from "../../../store/api/user.api.ts";
import { Toast } from "../../atoms/Toast/Toast.ts";
import type { User } from "../../../types/user.types.ts";

interface SearchbarProps {
  exploreTabValue: number;
  setSearchedRooms: (rooms: Room[] | null) => void;
  setSearchedUsers: (users: User[] | null) => void;
  setIsLoadingSearch: (isLoading: boolean) => void;
}
// TODO: apply search logic for following and my rooms pages
const Searchbar: React.FC<SearchbarProps> = ({
  exploreTabValue,
  setSearchedRooms,
  setSearchedUsers,
  setIsLoadingSearch,
}) => {
  const [
    triggerRooms,
    { isFetching: isFetchingRooms, isLoading: isLoadingRooms },
  ] = useLazySearchRoomsByQueryQuery();
  const [
    triggerUsers,
    { isFetching: isFetchingUsers, isLoading: isLoadingUsers },
  ] = useLazySearchUsersByQueryQuery();
  const { register, handleSubmit, getValues } = useForm<SearchQuery>({
    resolver: zodResolver(searchQuerySchema),
  });
  useEffect(() => {
    onSubmit(getValues());
  }, [exploreTabValue]);
  const onSubmit = async (data: SearchQuery) => {
    if (!data.query || data.query === "") {
      setSearchedRooms(null);
      setSearchedUsers(null);
      return;
    }
    try {
      setIsLoadingSearch(true);
      if (exploreTabValue === 0) {
        const res = await triggerRooms(data).unwrap();
        setSearchedRooms(res);
      } else if (exploreTabValue === 1) {
        const res = await triggerUsers(data).unwrap();
        setSearchedUsers(res);
      }
    } catch (error: any) {
      await Toast.fire({
        icon: "error",
        title: error?.data?.message,
      });
    } finally {
      setIsLoadingSearch(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputIcon
        disabled={
          isFetchingRooms || isLoadingRooms || isFetchingUsers || isLoadingUsers
        }
        {...register("query")}
        placeholder={"Search"}
      />
    </form>
  );
};

export default Searchbar;
