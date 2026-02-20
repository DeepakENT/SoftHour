import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-red-500 p-20">
        <h1 className="text-5xl text-white">
          <div className="bg-blue-500 h-20"></div>
          Tailwind Working?
        </h1>
      </main>
    </>
  );
}
