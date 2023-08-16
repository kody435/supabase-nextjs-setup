"use client";

import LogoutButton from "./LogoutButton";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const router = usePathname();
  return (
    <div className="flex flex-row justify-between items-center py-2 px-5 border">
      <h2 className="text-2xl flex justify-between items-center ">
        <span className="text-5xl font-extrabold">L</span>
        <span className="underline mt-3 font-normal">ucidian</span>
      </h2>

      {router === "/dashboard" && <LogoutButton />}
      {/* <LogoutButton /> */}
    </div>
  );
}
