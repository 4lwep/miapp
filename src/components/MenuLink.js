import Link from "next/link";
import React from "react";

function MenuLink(props) {
  return (
    <>
      <Link href={props.href}>{props.children}</Link>
    </>
  );
}

export default MenuLink;
