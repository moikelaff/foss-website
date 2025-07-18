import NavBar from "@/(frontend)/components/Navbar";
import Footer from "@/(frontend)/components/Footer";
import Header from "@/(frontend)/components/people/Header";
import FacultyMember from "@/(frontend)/components/people/FacultyMember";
import SecretariatTeam from "@/(frontend)/components/people/SecretariatTeam";
import Students from "@/(frontend)/components/people/Students";
import PeopleSection from "@/(frontend)/components/people/PeopleSection";

export default function Page() {
  return (
    <>
      <NavBar />
      <main className="font-halyard">
        <PeopleSection />
      </main>
      <Footer />
    </>
  );
}
