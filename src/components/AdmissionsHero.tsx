import Image from "next/image";

export default function AdmissionsHero() {
  return (
    <section className="relative bg-white !important min-h-[70vh] flex items-center">

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#D9D9D9] to-transparent z-50"></div>

        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
                Admissions
            </h1>
            <p className="mt-20 mr-20 text-[18px] text-gray-700 text-justify">
                The Faculty of Social Sciences at UIII offers cutting-edge academic
                programs designed to equip students with critical thinking,
                analytical skills, and a deep understanding of global and regional
                challenges. Our programs combine theoretical knowledge with practical
                applications to prepare graduates for leadership roles in various
                fields.
            </p>
            </div>

            {/* Right Image */}
            <div className="relative w-[700px] h-[700px]">
            <Image
                src="/admissions-hero.png"
                alt="Graduation Ceremony"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                className="rounded-lg shadow-lg object-cover"
                priority
            />
            </div>
        </div>
    </section>
  );
}
