import NavBar from "@/(frontend)/components/Navbar";
import Footer from "@/(frontend)/components/Footer";
import Header from "@/(frontend)/components/national-survey/Header";
import About from "@/(frontend)/components/national-survey/About";

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
