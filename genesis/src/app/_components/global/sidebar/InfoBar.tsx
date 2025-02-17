import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserButton } from "@clerk/nextjs";
import { Search, UploadIcon, Video,  } from "lucide-react";
import React from "react";

type Props = {};
const InfoBar = ({}: Props) => {
  return (
    <header className="pl-20 md:pl-[250px] fixed p-4 w-full flex items-center justify-between gap-4">
        {/* <div className="w-full justify-end items-center"> */}
      <div className="flex gap-2 justify-center items-center border-2 border-neutral-600 rounded-full px-4 w-full max-w-lg ">
        <Search size={25} className="text-[#707070]" />
        <Input
          className="bg-transparent border-none !placeholder-neutral-500"
          placeholder="Search for people, projects & folders"
        />
        {/* implement search functionality?  */}
      </div>
      {/* </div> */}
      <div className="flex items-center gap-4">
        <Button className="bg-[#1d1d1d] hover:bg-[#171717] flex items-center gap-2">
          <UploadIcon size={20} />{" "}
          <span className="flex items-center gap-2">Upload</span>
        </Button>
        <Button className="bg-[#1d1d1d] hover:bg-[#171717] flex items-center gap-2">
          <Video />
          <span className="flex items-center gap-2">Record</span>
        </Button>
        <UserButton />
      </div>
    </header>
  );
};

export default InfoBar;
