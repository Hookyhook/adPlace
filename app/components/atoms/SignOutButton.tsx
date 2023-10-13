"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
    function signOutWithRedirect(){
        signOut({
          redirect: true,
          callbackUrl: "/"
        })
      }
    return(
        <div onClick={signOutWithRedirect}>Sign Out</div>
    )
}