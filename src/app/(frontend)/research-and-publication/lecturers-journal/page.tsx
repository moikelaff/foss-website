import NavBar from "@/(frontend)/components/Navbar";
import Footer from "@/(frontend)/components/Footer";
import About from "@/(frontend)/components/research-and-publication/lecturers-journal/About";
import Research from "@/(frontend)/components/research-and-publication/lecturers-journal/Research";

export default function Page() {
  return (
    <>
      <NavBar />
      <main className="font-halyard">
        <About />
        <Research />
      </main>
      <Footer />
    </>
  );
}
