"use client";

import Link from "next/link";

export default function SecretariatTeam() {
  const teamList = [
    {
      image: "/Img-People/secretariat1.png",
      name: "Syahrul Miladi F.",
      position: "Administrative staff for the Political Science program",
      href: "/people/andini-lestari",
    },
    {
      image: "/Img-People/secretariat2.png",
      name: "Maulida Alfiatun H.",
      position: "Finance staff for the Political Science program",
      href: "/people/rizky-firmansyah",
    },
    {
      image: "/Img-People/secretariat3.png",
      name: "Zikri Aufarrahman M.",
      position: "Administrative staff for the Master in Public Policy program",
      href: "/people/putri-maharani",
    },
    {
      image: "/Img-People/secretariat4.png",
      name: "Sarah Permatasari",
      position: "Social media staff for the Faculty of Social Sciences",
      href: "/people/yusuf-hakim",
    },
  ];

  return (
    <section className="py-16 px-8 bg-[#f9fafb]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-medium flex gap-2 text-brandNavy mb-8">
          Secretariat Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamList.map((person, index) => (
            <Link key={index} href={person.href}>
              <div className="bg-white rounded-xl shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full aspect-[4/4] object-cover rounded-t-xl"
                />
                <div className="h-[90px] text-left px-5 py-3">
                  <h3 className="text-base font-medium">{person.name}</h3>
                  <p className="text-sm text-[#00748D]">{person.position}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/people/secretariat-team">
            <button className="px-4 py-2 bg-brandNavy text-white font-light rounded-lg hover:bg-[#005c74] transition shadow-md">
              See More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// import PeopleCard from "./PeopleCard";
// import Link from "next/link";

// export default function SecretariatTeam() {
//   return (
//     <section className="py-16 px-8 bg-white bg-[#f9fafb]">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-5xl font-medium flex gap-2 text-brandNavy mb-8">
//           Secretariat Team
//         </h2>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           <PeopleCard />
//           <PeopleCard />
//           <PeopleCard />
//           <PeopleCard />
//         </div>
//         <div className="flex justify-center mt-8">
//           <Link href="/people/secretariat-team">
//             <button className="px-4 py-2 bg-brandNavy text-white font-light rounded-lg hover:bg-[#005c74] transition shadow-md">
//               See More
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
