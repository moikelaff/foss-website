import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Header from "@/components/national-survey/Header";
import About from "@/components/national-survey/About";

export default function Page() {
  return (
    <>
      <NavBar />
      <main className="font-halyard">
        <Header />
        <About />
        <hr className="border-t border-white-300 mx-auto" />
      </main>
      <Footer />
    </>
  );
}
