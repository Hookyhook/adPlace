import Navbar from "./components/molecules/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <div className="text-center hero-content flex flex-col m-auto">
          <h1 className="mb-5 text-8xl font-bold">adPlace</h1>
          <p className="mb-5 text-xl">The best ad Website got even better!</p>
          <button className="btn btn-secondary w-1/3 h-10">Get Started</button>
        </div>
      </div>
    </>
  );
}
