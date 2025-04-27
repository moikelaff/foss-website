export default function PeopleCard() {
  return (
    <div className="bg-white rounded-xl shadow-md text-center">
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
  );
}
