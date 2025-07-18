import NavBar from "@/(frontend)/components/Navbar";
import Footer from "@/(frontend)/components/Footer";
import About from "@/(frontend)/components/working-paper-compose/About";
import Research from "@/(frontend)/components/working-paper-compose/Research";

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
