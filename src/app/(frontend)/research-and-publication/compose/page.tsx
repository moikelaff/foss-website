import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Header from "@/components/research-and-publication/Header";
import VisionMision from "@/components/research-and-publication/VisionMision";
import About from "@/components/research-and-publication/About";
import Principles from "@/components/research-and-publication/Principles";
import Program from "@/components/research-and-publication/Program";

export default function Page() {
  return (
    <>
      <NavBar />
      <main className="font-halyard">
        <Header />
        <About />
        <VisionMision />
        <Principles />
        <Program />
      </main>
      <Footer />
    </>
  );
}
