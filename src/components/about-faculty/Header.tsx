export default function Header() {
  return (
    <section className="relative">
      {/* Ini Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-[#01395E]/100 to-[#01395E]/25 z-50">
        <div className="absolute inset-0 flex flex-col justify-center px-14 text-white mt-16">
          <h1 className="text-5xl font-medium mb-4 ">
            The Faculty of Social Sciences
          </h1>
          <p className="max-w-5xl text-xl">
            is dedicated to advancing knowledge through a diverse range of
            educational, teaching, research, and non-academic activities. Our
            focus includes studying, discussing, and introducing the dynamics of
            social and political developments in Indonesian Islam, with the goal
            of enhancing understanding both within Indonesian society and the
            international community.
          </p>
        </div>
      </div>
      <img
        src="/Img-AboutFaculty/HeaderAboutFaculty.png"
        alt="About FOSS UIII"
        className="w-full h-[570px] object-cover"
      />
    </section>
  );
}
