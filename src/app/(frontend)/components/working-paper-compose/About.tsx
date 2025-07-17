export default function About() {
  return (
    <section className="py-16 px-8 bg-[#f9fafb] text-brandNavy">
      <div className="max-w-6xl mx-auto flex gap-14 items-center">
        <div className="justify-center md:justify-start">
          <img
            src="/working-paper-compose/logo-compose-blue.png"
            alt="COMPOSE Logo"
            className="h-16 w-auto"
          />
        </div>
        <div className="">
          <p className="text-5xl font-medium leading-relaxed mb-4">
            Working Paper Series
          </p>
        </div>
      </div>
    </section>
  );
}
