import Program from "@/components/landing/Program";
import Footer from "@/components/Footer";
import Header from "@/components/landing/Header";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Headline from "@/components/landing/Headline";
import Research from "@/components/landing/Research";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="font-halyard">
        <Header />
        <Program />
        <Headline />
        <Research />
      </main>
      <Footer />
    </>
  );
}
