import Navbar from "./components/molecules/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="text-center hero-content">
          <h1 className="mb-5 text-5xl font-bold">AdPlace</h1>
          <p className="mb-5">The best ad Website got even better!</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </>
  );
}
