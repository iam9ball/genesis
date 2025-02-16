 'use client'
import {
  Dialog,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogDescription,
} from "@/components/ui/dialog";
import React from 'react'

type Props = {
    trigger: React.ReactNode
    children: React.ReactNode
    title: string
    description: string
    className?: string
}
const Modal = ({children, description, title, trigger, className }: Props) => {
  return <Dialog>
    <DialogTrigger
    className={className}
    asChild
    >
     {trigger}
    </DialogTrigger>
    <DialogContent className="bg-[#111]">
        <DialogHeader> 
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
    </DialogContent>
  </Dialog>;
}

export default Modal
