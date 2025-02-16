import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function layout({children}: Props) {
  return (
    <div className="flex flex-col py-10 xl:px-0 container  "> {children}</div>
  );
}
