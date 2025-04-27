import Link from "next/link";
export default function PeopleCard() {
  return (
    // Link ini harus disesuain dengan id dynamic routing! nanti edit ya
    <Link href="/people/id">
      <div className="bg-white rounded-xl shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <img
          src="/Img-People/PeopleCard.png"
          alt="FOSS People UIII"
          className="w-full h-auto rounded-t-xl"
        />
        <div className="h-[90px] text-left px-5 py-3">
          <h3 className="text-base font-medium">Djayadi Hanan, Ph.D.</h3>
          <p className="text-sm text-[#00748D]">
            Head of the Ph.D. in Political Science Program
          </p>
        </div>
      </div>
    </Link>
  );
}
