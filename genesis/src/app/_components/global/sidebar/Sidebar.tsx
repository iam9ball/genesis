"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useQueryData } from "@/hooks/useQueryData";
import { NotificationProps, WorkspaceProps } from "@/types/index.types";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useMemo } from "react";
import Modal from "../Modal";
import { PlusCircle } from "lucide-react";
import SearchUser from "../SearchUser";
import { MENU_ITEMS } from "@/constant";
import { Item } from "@radix-ui/react-select";
import SidebarItem from "./SidebarItem";

type Props = {
  activeWorkspaceId: string;
};
const Sidebar = ({ activeWorkspaceId }: Props) => {
  const router = useRouter();
  const pathName = usePathname()

  const { data, isFetched } = useQueryData(["user-workspaces"]);
  const { data: notifications } = useQueryData(["user-notifications"]);

  const { data: workspace } = data as WorkspaceProps;
  const { data: count } = notifications as NotificationProps;

  const onChangeActiveWorkspace = (value: string) => {
    router.push(`/dashboard/${value}`);
  };

  const currentWorkspace = workspace.workspace.find(
    (workspace) => workspace.id === activeWorkspaceId
  );

  const _workspace = currentWorkspace?.name || "Select a Workspace";

  const menuItems = MENU_ITEMS(activeWorkspaceId);

  return (
    <div className="bg-[#171717] flex-none relative p-4 h-full w-[250px] flex flex-col gap-4 items-center overflow-hidden">
      <div className="flex p-4 gap-2 justify-start items-center mb-4  absolute top-0  left-0 right-0">
        <Image src="/logo/GenesisAI.svg" height={40} width={40} alt="logo" />
        <p className="text-lg">GenesisAI</p>
      </div>
      <Select value={activeWorkspaceId} onValueChange={onChangeActiveWorkspace}>
        <SelectTrigger className="mt-16 text-neutral-400 bg-transparent">
          <SelectValue className="text-neutral-500 font-bold">
            <span className="text-neutral-500 font-bold">{_workspace}</span>
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-[#171717] text-neutral-500 backdrop-blur-xl text-center text-xl">
          <SelectGroup>
            <SelectLabel>Workspaces</SelectLabel>
            <Separator />
            {workspace.workspace.map((workspace) => (
              <SelectItem key={workspace.id} value={workspace.id}>
                {workspace.name}
              </SelectItem>
            ))}
            {workspace.members.length > 0 &&
              workspace.members.map(
                (workspace) =>
                  workspace.workspace && (
                    <SelectItem
                      value={workspace.workspace.id}
                      key={workspace.workspace.id}
                    >
                      {workspace.workspace.name}
                    </SelectItem>
                  )
              )}
          </SelectGroup>
        </SelectContent>
      </Select>

      {currentWorkspace?.type === "PUBLIC" &&
        workspace.subscription?.plan === "PRO" && (
          <Modal
            title="Invite To Workspace"
            description="Invite other users to your workspace"
            trigger={
              <span className="text-sm flex cursor-pointer items-center justify-center bg-neutral-800/90 hover:bg-neutral-800/60 w-full rounded-sm p-[5px] gap-2 ">
                <PlusCircle
                  size={15}
                  className="text-neutral-800/90 fill-neutral-500"
                />
                <span className="text-neutral-400 font-semibold text-xs">
                  Invite To Workspace
                </span>
              </span>
            }
          >
            <SearchUser workspaceId={activeWorkspaceId} />
          </Modal>
        )}
      <p className="w-full text-[#909090] font-bold mt-4">Menu</p>
      <nav className="w-full">
        <ul>
          {menuItems.map((item) => (
            <SidebarItem key={item.title} href={item.href} icon={<item.icon/>} selected={pathName === item.href} title={item.title} notifications={
              item.title === "Notifications" && count?._count?.notification || 0
            }/>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
