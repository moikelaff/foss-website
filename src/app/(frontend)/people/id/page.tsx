import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Header from "@/components/people/Header";
import FacultyMember from "@/components/people/FacultyMember";
import SecretariatTeam from "@/components/people/SecretariatTeam";
import Students from "@/components/people/Students";
import PeopleSection from "@/components/people/PeopleSection";

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
