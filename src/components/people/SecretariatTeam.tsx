import PeopleCard from "./PeopleCard";

export default function SecretariatTeam() {
  return (
    <section className="py-16 px-8 bg-white bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-medium flex gap-2 text-brandNavy mb-8">
          Secretariat Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
          <PeopleCard />
        </div>
        <div className="flex justify-center mt-8">
          <button className="px-4 py-2 bg-brandNavy text-white font-light rounded-lg hover:bg-[#005c74] transition shadow-md">
            See More
          </button>
        </div>
      </div>
    </section>
  );
}
