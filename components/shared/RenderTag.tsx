import React from "react";
import Link from "next/link";

interface Props {
  _id: string;
  name: string;
}

const RenderTag = ({ _id, name }: Props) => {
  return (
    <Link href={`/tags/${_id}`}>
      <span className="background-light800_dark300 h-[50px] rounded-lg px-4 py-3 capitalize text-light-400 dark:text-light-500">
        {name}
      </span>
    </Link>
  );
};

export default RenderTag;
