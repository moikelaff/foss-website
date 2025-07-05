"use client";

import Link from "next/link";

export default function FacultyMember() {
  const facultyList = [
    {
      image: "/Img-People/PeopleCard.png",
      name: "Djayadi Hanan, Ph.D.",
      position: "Head of the Ph.D. in Political Science Program",
      href: "/people/id",
    },
    {
      image: "/Img-People/faculty-member2.png",
      name: "Philips J. Vermonte Ph.D., Ph.D.",
      position: "Dean of the Faculty of Social Sciences",
      href: "/people/fitria-wahyuni",
    },
    {
      image: "/Img-People/faculty-member3.png",
      name: "Sirojuddin Arif, Ph.D.",
      position: "Head of the M.A. in Political Science Program",
      href: "/people/taufik-rahman",
    },
    {
      image: "/Img-People/faculty-member4.png",
      name: "Sonny Mumbunan, Ph.D.",
      position: "Head of the MPP specializing on Climate Change Program",
      href: "/people/rina-suryani",
    },
  ];

  return (
    <section className="py-16 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-medium flex gap-2 text-brandNavy mb-8">
          Faculty Member
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {facultyList.map((person, index) => (
            <Link key={index} href={person.href}>
              <div className="bg-white rounded-xl shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-auto rounded-t-xl"
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
          <Link href="/people/faculty-member">
            <button className="px-4 py-2 bg-brandNavy text-white font-light rounded-lg hover:bg-[#005c74] transition shadow-md">
              See More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

// import Link from "next/link";
// import PeopleCard from "./PeopleCard";

// export default function FacultyMember() {
//   return (
//     <section className="py-16 px-8 bg-white">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-5xl font-medium flex gap-2 text-brandNavy mb-8">
//           Faculty Member
//         </h2>
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           <PeopleCard />
//           <PeopleCard />
//           <PeopleCard />
//           <PeopleCard />
//         </div>
//         <div className="flex justify-center mt-8">
//           <Link href="/people/faculty-member">
//             <button className="px-4 py-2 bg-brandNavy text-white font-light rounded-lg hover:bg-[#005c74] transition shadow-md">
//               See More
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }
