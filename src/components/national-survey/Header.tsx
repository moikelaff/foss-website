export default function Header() {
  return (
    <section className="relative">
      {/* Ini Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-[#01395E]/100 to-[#01395E]/0">
        <div className="absolute inset-0 flex flex-col justify-center px-14 text-white mt-16">
          <h1 className="text-3xl font-semilight mb-4 mt-14 text-center ">
            National Survey
          </h1>
          <h1 className="text-6xl font-medium mb-4 text-center ">
            Varieties of Muslim Religious Practices <br /> and Views in
            Indonesia Society
          </h1>
        </div>
      </div>
      <img
        src="/national-survey/national-survey-muslim-building.jpg"
        alt="COMPOSE UIII"
        className="w-full h-[570px] object-cover"
      />
    </section>
  );
}
