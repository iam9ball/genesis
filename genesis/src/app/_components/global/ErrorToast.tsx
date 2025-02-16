"use client";

import { useToast } from "@/hooks/use-toast";
import { useEffect } from "react";


export function ErrorToast({ error }: { error: string }) {
  const { toast } = useToast();

  useEffect(() => {
    toast({
      title: "Error",
      description: error,
      className:"bg-black text-neutral-200 text-xl font-bold"
      
    });
  }, []);

  return null;
}
