"use client";

import { useRouter } from "next/navigation";

import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const redirectToHome = (): void => {
    router.replace("/");
  };

  const redirectToCompany = (): void => {
    router.replace("/company");
  };

  const redirectToProfile = (): void => {
    router.replace("/profile");
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
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-xl" onClick={redirectToCompany}>
              Company Area
            </a>
          </li>
        </ul>
        {status === "authenticated" && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={session.user?.image!} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li onClick={() => redirectToProfile()}>
                <a>Profile</a>
              </li>
              <li onClick={() => signOut()}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
