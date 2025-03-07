export default function Page() {
  return (
    <main className="space-y-8">
      {/* TOP */}
      <section>
        <h1>People of FOSS UIII</h1>
        <p>
          Here are the people behind Faculty of Social Sciences of Universitas
          Internasional Islam Indonesia
        </p>
      </section>

      {/* People Team */}
      <section>
        <div>
          <h2>Faculty Member</h2>
          {/* Masukin component card orang2 di sini! */}
          <button>See More</button>
        </div>
        <div>
          <h2>Secretariat Team</h2>
          {/* Masukin component card orang2 di sini! */}
          <button>See More</button>
        </div>
      </section>

      {/* Students soalnya layout cardnya mau beda */}
      <section>
        <div>
          <h2>Students</h2>
          <h4>PhD in Political Science</h4>
          {/* Masukin component card orang2 di sini! */}
          <button>See More</button>
        </div>
      </section>
    </main>
  );
}
