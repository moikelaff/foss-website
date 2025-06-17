import Image from "next/image";
import Link from "next/link";


export default function AdmissionsHero() {
  return (
    <section className="relative bg-white !important min-h-[100vh] flex items-center">

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#D9D9D9] to-transparent z-50"></div>

        <div className="font-halyard max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-[500] text-gray-900">
                Academic Programs
            </h1>
            <p className="mt-20 mr-20 text-[18px] text-gray-700 text-justify">
                The Faculty of Social Sciences at UIII offers cutting-edge academic
                programs designed to equip students with critical thinking,
                analytical skills, and a deep understanding of global and regional
                challenges. Our programs combine theoretical knowledge with practical
                applications to prepare graduates for leadership roles in various
                fields.
            </p>
            <Link href="https://uiii.ac.id/admissions" target="_blank" rel="noopener norefferer">
                <button className="w-[190px] h-[68px] border-[4px] border-[#01395E] bg-transparent mt-[30px] px-4 py-2 text-[#01395E] text-[24px] font-[500] rounded-lg transition-colors duration-300 hover:border-blue-600 hover:text-blue-600">
                Apply Now
                </button>
              </Link>
            </div>

            {/* Right Image */}
            <div className="relative w-[700px] h-[700px]">
            <Image
                src="/admissions-hero.png"
                alt="Graduation Ceremony"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                className="object-cover"
                priority
            />
            </div>
        </div>
    </section>
  );
}
