import Header from "../components/header";
import Footer from "../components/footer";


export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10w-full max-w-5xl items-center justify-between lg:flex">
        </div>
        <div className="z-10w-full max-w-5xl items-center justify-between lg:flex">
          This is the Home Page
      </div>
      </main>
      <Footer />

    </>
  );
}
