import NavBar from "@/(frontend)/components/Navbar"; 
import Footer from "@/(frontend)/components/Footer";
import Header from "@/(frontend)/components/about-faculty/Header";
import VisionMision from "@/(frontend)/components/about-faculty/VisionMision";
import Program from "@/(frontend)/components/about-faculty/Program";
import Goal from "@/(frontend)/components/about-faculty/Goal";

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
      <Footer />
    </>
  );
}