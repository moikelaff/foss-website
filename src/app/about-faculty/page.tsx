import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Header from "@/components/about-faculty/Header";
import VisionMision from "@/components/about-faculty/VisionMision";
import Program from "@/components/about-faculty/Program";
import Goal from "@/components/about-faculty/Goal";

export default function Page() {
  return (
    <>
      <NavBar />
      <main className="font-halyard">
        <Header />
        <VisionMision />
        <Program />
        <Goal />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
