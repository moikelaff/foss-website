import Link from "next/link";

export default function Program() {
  return (
    <section className="py-14 px-8 bg-[#f5f7fb]">
      <div className="max-w-6xl mx-auto mb-8">
        <h2 className="text-5xl text-brandNavy font-medium mb-12 flex items-center gap-4">
          <img
            src="/Img-AboutFaculty/College.svg"
            alt="college Icon"
            className="w-10 h-10"
          />
          Our Programs
        </h2>

        <div className="space-y-12">
          {/* PROGRAM 1 */}
          <div className="grid md:grid-cols-2 gap-10">
            <img
              src="/Img-AboutFaculty/MAPoliticalScience.png"
              alt="MA in Political Science"
              className="rounded-xl w-full h-[320px] object-cover"
            />
            <div className="text-brandNavy">
              <p className="text-m">Academic Program</p>
              <h3 className="text-4xl font-medium mt-1 mb-2">
                MA in Political Science
              </h3>
              <p className="text-lg text-[#00748D]">
                The Master of Arts program in Political Science at UIII is
                crafted to foster a deep understanding of the intricate dynamics
                of politics, both theoretically and in practice.
              </p>
              <Link href="/academic-program/ma-political-science">
                <button className="px-4 py-2 bg-brandNavy text-white font-light rounded-lg hover:bg-[#005c74] transition mt-4">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* PROGRAM 2 */}
          <div className="grid md:grid-cols-2 gap-10">
            <img
              src="/Img-AboutFaculty/PhDPoliticalScience.png"
              alt="PhD in Political Science"
              className="rounded-xl w-full h-[320px] object-cover"
            />
            <div className="text-brandNavy">
              <p className="text-m">Academic Program</p>
              <h3 className="text-4xl font-medium mt-1 mb-2">
                PhD in Political Science
              </h3>
              <p className="text-lg text-[#00748D]">
                The Ph.D. program in Political Science at UIII stands as a
                beacon of academic excellence and rigorous scholarship. Tailored
                to address the intricate political landscapes of Muslim
                societies and states, this program seeks to nurture scholars who
                will be proficient in original, independent research about
                political dynamics.
              </p>
              <Link href="/academic-program/phd-political-science">
                <button className="px-4 py-2 bg-brandNavy text-white font-light rounded-lg hover:bg-[#005c74] transition mt-4">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* PROGRAM 3 */}
          <div className="grid md:grid-cols-2 gap-10">
            <img
              src="/Img-AboutFaculty/MPPClimateChange.png"
              alt="MPP on Climate Change"
              className="rounded-xl w-full h-[320px] object-cover"
            />
            <div className="text-brandNavy">
              <p className="text-m">Academic Program</p>
              <h3 className="text-4xl font-medium mt-1 mb-2">
                MPP on Climate Change
              </h3>
              <p className="text-lg text-[#00748D]">
                The Master in Public Policy (MPP) program focusing on Climate
                Change aims to cultivate the next generation of sustainability
                leaders. Students enrolled in this program will acquire
                essential research skills for analyzing information and will
                develop critical thinking abilities necessary for proposing and
                evaluating public policies to tackle pressing challenges of
                climate change.
              </p>
              <Link href="/academic-program/master-public-policy">
                <button className="px-4 py-2 bg-brandNavy text-white font-light rounded-lg hover:bg-[#005c74] transition mt-4">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
