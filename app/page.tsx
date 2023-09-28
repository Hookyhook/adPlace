"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const rediredtTo3dView = () => {
    router.push("/3dview");
  };

  return (
    <div className="text-center hero-content flex flex-col m-auto mt-3">
      <h1 className="mb-5 text-8xl font-bold">adPlace</h1>
      <p className="mb-5 text-xl">The best ad Website got even better!</p>
      <button
        className="btn btn-secondary w-1/3 h-10"
        onClick={rediredtTo3dView}
      >
        Check it out!
      </button>
    </div>
  );
}
