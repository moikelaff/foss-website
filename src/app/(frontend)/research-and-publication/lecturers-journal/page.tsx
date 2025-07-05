import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import About from "@/components/research-and-publication/lecturers-journal/About";
import Research from "@/components/research-and-publication/lecturers-journal/Research";

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
