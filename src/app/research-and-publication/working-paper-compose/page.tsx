import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import About from "@/components/working-paper-compose/About";
import Research from "@/components/working-paper-compose/Research";

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
