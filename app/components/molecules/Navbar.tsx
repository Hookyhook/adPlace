"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const redirectToHome = (): void => {
    router.replace("/");
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a
          className="btn btn-ghost normal-case text-xl"
          onClick={redirectToHome}
        >
          adPlace
        </a>
      </div>
      <a className="btn text-xl btn-neutral normal-case">Company Area</a>
    </div>
  );
}
