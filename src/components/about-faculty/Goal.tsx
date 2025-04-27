export default function Goal() {
  return (
    <section className="py-16 px-8 bg-[#00748D] text-white ">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-medium mb-12">Our Goals</h2>
        <div className="grid md:grid-cols-4 gap-14 text-sm md:text-base mb-8">
          <div>
            <div className="mb-4 flex text-left">
              <img
                src="/Img-AboutFaculty/Book.svg"
                alt="Book Icon"
                className="w-20 h-20"
              />
            </div>
            <p className="text-left text-xl">
              To provide rigorous education and teaching in social sciences and
              research methodologies.
            </p>
          </div>
          <div>
            <div className="mb-4 flex text-left">
              <img
                src="/Img-AboutFaculty/World.svg"
                alt="World Icon"
                className="w-20 h-20"
              />
            </div>
            <p className="text-left text-xl">
              To conduct innovative research that combines theoretical mastery
              with a deep understanding of social and political transformations
              in the world and Muslim societies and Muslim-majority countries.
            </p>
          </div>
          <div>
            <div className="mb-4 flex text-left">
              <img
                src="/Img-AboutFaculty/Brain.svg"
                alt="Brain Icon"
                className="w-20 h-20"
              />
            </div>
            <p className="text-left text-xl">
              To produce and disseminate excellent research results that serve
              as references for the academic community and national and
              international policymakers.
            </p>
          </div>
          <div>
            <div className="mb-4 flex text-left">
              <img
                src="/Img-AboutFaculty/People.svg"
                alt="People Icon"
                className="w-20 h-20"
              />
            </div>
            <p className="text-left text-xl">
              To develop an academic community committed to addressing
              social-political issues and governance challenges in an
              increasingly complex global environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
