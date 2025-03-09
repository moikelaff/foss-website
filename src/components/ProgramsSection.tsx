import Link from "next/link";

// IMPORTANT!!! INSERT ACADEMIC PROGRAMS PAGE LINKS!!!!!

const programs = [
  {
    title: "PhD Political Sciences",
    description:
      "The Ph.D. program in Political Science at UIII stands as a beacon of academic excellence and rigorous scholarship. Tailored to address the intricate political landscapes of Muslim societies and states, this program seeks to nurture scholars who will be proficient in original, independent research about political dynamics. UIII expects its graduates not only to have an in-depth understanding of political institutions and processes in the Muslim world but also to demonstrate a strong grasp of research methodologies that underpin their work.",
    image: "/phd-political-science.png",
    bgColor: "#D9D9D9",
    page: "", 
  },
  {
    title: "MA in Political Sciences",
    description:
      "The Master of Arts program in Political Science at UIII is crafted to foster a deep understanding of the intricate dynamics of politics, both theoretically and in practice. The Program is designed not just as an academic pursuit, but an immersive journey that prepares students to become key players in today’s complex world, whether as researchers, policymakers, community leaders, or advocates for social change. This program is underpinned by UIII’s commitment to blending traditional wisdom with modern knowledge, thus equipping its students to address pressing socio-political challenges, especially in Muslim states and societies.",
    image: "/ma-political-science.png",
    page: "",
  },
  {
    title: "Master in Public Policy focusing on Climate Change",
    description:
      "The Master in Public Policy (MPP) program focusing on Climate Change aims to cultivate the next generation of sustainability leaders. Students enrolled in this program will acquire essential research skills for analyzing information and will develop critical thinking abilities necessary for proposing and evaluating public policies to tackle pressing challenges of climate change. Its graduates will be familiar with the broad interdisciplinary debate on climate change and sustainable development, as well as the fundamental knowledge and skills needed for environmental research or practice at the international level. Furthermore, they will demonstrate proficiency in formulating policies and evidence-informed strategies to address climate change mitigation and adaptation in and for the Global South. Effective communication with relevant stakeholders and the public will be among their key competencies.",
    image: "/mpp-climate-change.png",
    page: "",
  },
];

export default function ProgramsSection() {
  return (
    <section className="w-full">
      <div className="w-full mx-auto">
        <div className="bg-[#D9D9D9] w-full py-12 flex justify-center">
            <h2 className="max-w-[1480px] text-3xl md:text-[40px] font-[500] leading-snug text-center text-gray-900 mb-8">
            Discover academic excellence at the Faculty of Social Sciences, UIII.<br />
            We offer diverse and comprehensive programs to equip you with the skills and knowledge to excel in today’s dynamic world.
            Explore the available programs and find the one that aligns with your aspirations:
            </h2>
        </div>
        <div className="grid grid-cols-1 gap-8">
            {programs.map((program, index) => (
                <div
                key={index}
                className={`flex flex-col md:flex-row ${
                    index % 2 !== 0 ? "md:flex-row-reverse" : ""
                } overflow-hidden`}
                style={{ backgroundColor: program.bgColor || "white" }} // Default to white if no color is given
                >
                {/* Program Image */}
                <img
                    src={program.image}
                    alt={program.title}
                    className="w-full md:w-1/2 h-[720px] object-cover"
                />

                {/* Program Details */}
                <div className="flex flex-col justify-center md:w-1/2 p-[100px]">
                    <h3 className="text-[40px]">{program.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{program.description}</p>
                    <Link href={program.page} target="_blank" rel="noopener norefferer">
                        <button className="w-[190px] h-[68px] border-[4px] border-[#01395E] bg-transparent mt-4 px-4 py-2 text-[#01395E] text-[24px] font-semibold rounded-lg transition-colors duration-300 hover:border-blue-600 hover:text-blue-600">
                        Learn More
                        </button>
                    </Link>
                </div>
                </div>
            ))}
        </div>



      </div>
    </section>
  );
}
