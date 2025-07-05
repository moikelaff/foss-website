"use client";

export default function Research() {
  const researchList = [
    {
      image: "/working-paper-compose/paper-compose-1.png",
      title:
        "Transnational Islamic Networks in Indonesia: Imagining Political Trajectory in 2024",
      author: "Amanah Nurish",
      date: "December 13, 2024",
    },
    {
      image: "/working-paper-compose/paper-compose-1.png",
      title:
        "Rural Social Movements and Solidarity Economy Practices in Contemporary Indonesia",
      author: "Iqra Anugrah",
      date: "December 13, 2024",
    },
    {
      image: "/working-paper-compose/paper-compose-1.png",
      title:
        "Did the Taliban Control Indonesia’s Antigraft Body? Computational Propaganda as a Hegemonic Instrument",
      author: "Ary Hermawan",
      date: "October 10, 2024",
    },
    {
      image: "/working-paper-compose/paper-compose-1.png",
      title:
        "The Boundaries of Belonging: Hajj and the Transnational Experience from the Turkish Perspective",
      author: "Ahmed Koroglu",
      date: "October 10, 2024",
    },
    {
      image: "/working-paper-compose/paper-compose-1.png",
      title: "“A World Without Great Powers”: Working Paper",
      author: "Kevin Henry Villanueva",
      date: "March 19, 2024",
    },
    {
      image: "/working-paper-compose/paper-compose-1.png",
      title:
        "Globalization, Liberal Cosmopolitanism and Support for Global Governance: An Individual Level of Analysis",
      author: "Afrimadona",
      date: "March 19, 2024",
    },
  ];

  return (
    <section className="bg-[#f9fafb] py-4 px-8">
      <div className="max-w-6xl mx-auto mb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 justify-items-center">
          {researchList.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-sm bg-white shadow-md hover:shadow-xl transition-shadow duration-300 group transform transition-transform duration-300 hover:scale-105"
            >
              <div className="w-full aspect-[1/1.414]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="w-full h-[3px] bg-[#4C839E]" />

              <div className="p-5">
                <h3 className="text-base font-medium leading-snug mb-2 text-black relative inline-block">
                  <span className="relative z-10">{item.title}</span>
                  <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-[#4C839E] transition-all duration-300 group-hover:w-full"></span>
                </h3>
                <div className="justify-between mt-2 text-sm">
                  <p className="text-gray-700">{item.author}</p>
                  <p className="text-gray-600 mt-2">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
