"use client";

export default function Research() {
  const researchList = [
    {
      image: "/landing-page/cover-research.png",
      title:
        "Achieving global biodiversity targets requires shifting food and land use system trajectories",
      author: "Sonny Mumbunan, Ph.D.",
      date: "October 21, 2024",
    },
    {
      image: "/landing-page/asia-climate-change.jpg",
      title:
        "Adapting East and Southern Africa’s livestock to climate change: a decision making under deep uncertainty-based approach for effective actions",
      author: "Prof. Michiel Schaeffer",
      date: "October 12, 2024",
    },
    {
      image: "/landing-page/tunisian-democracy.jpg",
      title:
        "Tunisian Democracy at a Crossroads: A Comparative Analysis of Beji Caid Essebsi and Kais Saied Regimes",
      author: "Nizar Lukman",
      date: "July 24, 2024",
    },
    {
      image: "/landing-page/cover-research.png",
      title:
        "Food Security and Sustainable Agriculture: A Multilateral Response for the Global South",
      author: "Dr. Amelia Putri",
      date: "June 10, 2024",
    },
    {
      image: "/landing-page/cover-research.png",
      title:
        "The Role of Faith in Sustainable Development: Intersections of Religion and Environmental Policy",
      author: "Imam Rahmat Hidayat",
      date: "May 5, 2024",
    },
  ];

  return (
    <section className="bg-[#f9fafb] px-8">
      <div className="max-w-6xl mx-auto mb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 justify-items-center">
          {researchList.map((item, index) => (
            <div
              key={index}
              className="w-full max-w-sm bg-white shadow-md hover:shadow-xl transition-shadow duration-300 group transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover"
              />

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
