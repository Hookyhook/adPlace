"use client";

import { useSession } from "next-auth/react";
import Drawer from "../components/atoms/Drawer";

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <div className="fixed">
        <Drawer />
        <div className="hero align-top mr-auto">
          <div className="flex-1 flex-col flex relative">
            <img
              src={session!.user?.image!}
              className=" rounded-full  w-1/4  "
            />
            <h1 className="text-5xl font-bold">{session!.user?.name}</h1>
            <h1 className="text-5xl font-bold">{session!.user?.email}</h1>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
        className="bg-cover bg-center bg-no-repeat  h-screen"
      />
    </>
  );
}
