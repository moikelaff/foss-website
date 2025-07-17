import Link from "next/link";

export default function About() {
  return (
    <section className="py-16 px-8 bg-[#01395E] text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-center">
        <div className="flex justify-center md:justify-start col-span-2">
          <Link
            target="_blank"
            href="https://www.cognitoforms.com/FacultyOfSocialSciencesUIII/DataAccessRequestFormNationalSurveyOnVarietiesOfMuslimReligiousPracticesAndViewsInIndonesia"
          >
            <button className="p-5 bg-white text-brandNavy font-medium text-2xl rounded-xl hover:bg-[#BCF3FF] transition mt-4">
              Download Survey Report and Dataset
            </button>
          </Link>
        </div>
        <div className="col-span-3">
          <h2 className="text-3xl font-medium mb-6">About The Survey</h2>
          <p className="text-lg leading-relaxed mb-4">
            The Public Opinion and Survey Lab of the Faculty of Social Sciences
            of Universitas Islam Internasional Indonesia (UIII) conducted a
            national survey on the varieties of Muslim religious practices and
            views in Indonesia. The survey aims to portray the dynamics and
            current condition of Muslims’ religious and social lives in
            Indonesia. The survey will be conducted annually. In addition to the
            questions about the varieties of religious practices and views, that
            will be asked in each survey, it will include several other
            questions depending on the survey module used. In its first year,
            the survey focused entirely on the varieties of Muslims’ religious
            practices and views. The survey dataset is free to download and use.
            To download the dataset, you must complete the following
            registration form.
          </p>
        </div>
      </div>
    </section>
  );
}
