import { Session, getServerSession } from "next-auth";
import Link from "next/link";
import SignOutButton from "../atoms/SignOutButton";

export default async function Navbar() {
  const session: Session | null = await getServerSession();



  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link className="btn btn-ghost normal-case text-xl" href={"/"}>
          adPlace
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="text-xl" href={"/company"}>
              Company Area
            </Link>
          </li>
        </ul>
        {session && (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={session.user!.image!} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href={"/profile"}>Profile</Link>
              </li>
              <li>
                <SignOutButton></SignOutButton >
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
