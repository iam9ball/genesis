import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useMutationData } from "@/hooks/useMutationData";
import { useSearch } from "@/hooks/useSearch";
import { Loader, User, User2, User2Icon } from "lucide-react";
import React from "react";

type Props = {
  workspaceId: string;
};
const SearchUser = ({ workspaceId }: Props) => {
  const { query, onSearchQuery, isFetching, onUsers } = useSearch(
    "get-users",
    "USERS"
  );

  // const {mutate, isPending} = useMutationData(["invite-member"], (data: {receiverId: string, email:string}) => {

  // })
  return (
    <div className="flex flex-col gap-y-5">
      <Input
        onChange={onSearchQuery}
        value={query}
        className="bg-transparent border-2 outline-none"
        placeholder="Search for users..."
        type="text"
      />
     
      {isFetching ? (
        <div className="flex flex-col gap-y-2 ">
          <Skeleton className="w-full h-8 rounded-xl" />
        </div>
      ) : !onUsers ? (
        <p className="text-center text-sm text-rose-600">No Users Found</p>
      ) : (
        <div>
          {onUsers.map((user) => (
             <div
          key={user.id}
          className="flex gap-x-3 items-center border-2 w-full p-3 rounded-xl"
        >
          <Avatar>
            <AvatarImage src={user.image as string} />
            <AvatarFallback className="bg-neutral-700">
              <User />
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col items-start">
            <h3 className="font-bold text-lg capitalize">
              {user.firstname} {user.lastname}
            </h3>
            <p className="capitalize text-xs bg-white px-2 rounded-lg text-[#1e1e1e]">{user.subscription?.plan}</p>
          </div>
          <div className="flex-1 flex justify-end items-center">
            <Button onClick={() => {}} variant={"default"} className="w-5/12 font-bold">
               <Loader /> 
            </Button>
          </div>
        </div>
          ))}
        </div>
      
      )}
    </div>
  );
};

export default SearchUser;
