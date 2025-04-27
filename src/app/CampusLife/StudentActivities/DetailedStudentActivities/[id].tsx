
import { useRouter } from "next/router";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const EventDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="w-full">
      <header>
        <NavBar />
      </header>

      {/* Event Detail Section */}
      <section className="py-5 bg-white-50 mb-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-800">
            Event {id} Detail
          </h2>
          {/* Ganti dengan konten dinamis berdasarkan id */}
          <p className="text-lg text-gray-600 mt-4">
            Here will be the details of Event {id}. You can display content
            dynamically based on the id here.
          </p>
          {/* Tampilkan konten atau data lain yang sesuai dengan id */}
        </div>
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default EventDetail;
