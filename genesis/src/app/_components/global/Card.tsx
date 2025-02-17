"use client";
import React from "react";
import {
  Card as _Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  title: string;
  description: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
};
const Card = ({ title, children, footer, description }: Props) => {
  return (
    <_Card className="bg-transparent mt-4">
      <CardHeader className="p-4">
        <CardTitle className="text-[#9d9d9d]">{title}</CardTitle>
        <CardDescription className="text-[#707070]">
          {description}
        </CardDescription>
      </CardHeader>
      {children && <div className="p-2">{children}</div>}
      {footer && <CardFooter className="p-2">{footer}</CardFooter>}
    </_Card>
  );
};

export default Card;
