import { NavBar } from "../components/navbar";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10w-full max-w-5xl items-center justify-between lg:flex">
        <NavBar />
      </div>
      <div className="z-10w-full max-w-5xl items-center justify-between lg:flex">

        This is the Home Page
      </div>
    </main>
  );
}
