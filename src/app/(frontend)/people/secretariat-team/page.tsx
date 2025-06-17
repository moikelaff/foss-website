import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PeopleCard from "@/components/people/PeopleCard";

export default function Page() {
  return (
    <>
      <NavBar />
      <section className="py-14 px-8 font-halyard bg-[#f9fafb]">
        <div className="max-w-6xl mx-auto mb-12">
          <h3 className="text-1xl text-[#00748D] flex gap-2 mb-2">
            Faculty of Social Sciences, UIII
          </h3>
          <h2 className="text-5xl font-medium flex gap-2 text-brandNavy mb-14">
            Secretariat Team
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
            <PeopleCard />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
