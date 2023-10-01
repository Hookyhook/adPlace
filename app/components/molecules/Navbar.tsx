"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const redirectToHome = (): void => {
    router.replace("/");
  };

  const redirectToCompany = (): void => {
    router.replace("/company");
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
      <a
        className="btn text-xl btn-neutral normal-case"
        onClick={redirectToCompany}
      >
        Company Area
      </a>
    </div>
  );
}
