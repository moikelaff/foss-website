import NavBar from "@/(frontend)/components/Navbar";
import Footer from "@/(frontend)/components/Footer";
import Header from "@/(frontend)/components/research-and-publication/Header";
import VisionMision from "@/(frontend)/components/research-and-publication/VisionMision";
import About from "@/(frontend)/components/research-and-publication/About";
import Principles from "@/(frontend)/components/research-and-publication/Principles";
import Program from "@/(frontend)/components/research-and-publication/Program";

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
