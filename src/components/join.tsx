import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

export default function Join() {
  return (
    <Link
      href={"https://www.remind.com/join/creekcyber"}
      className={buttonVariants({
        variant: "default",
      })}
    >
      Join Now!
    </Link>
  );
}
