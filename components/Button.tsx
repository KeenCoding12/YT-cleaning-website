import { RiArrowRightLine } from "@remixicon/react";
import React from "react";

export default function Button({ label }: { label: string }) {
  return (
    <button className="">
      {label}
      <span>
        <RiArrowRightLine />
      </span>
    </button>
  );
}
