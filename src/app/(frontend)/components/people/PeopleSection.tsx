"use client";

import { useState } from "react";
import PeopleCard from "./PeopleCard"; // Kalau sudah modular, panggil komponenmu

export default function PeopleSection() {
  return (
    <section className="py-16 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-start">
        {/* Cards */}
        <div className="col-span-2 bg-white rounded-xl shadow-md text-center">
          <img
            src="/Img-People/PeopleCard.png"
            alt="FOSS People UIII"
            className="w-full h-auto rounded-xl"
          />
        </div>

        {/* Detail */}
        <div className="col-span-3">
          <h2 className="text-3xl font-medium mb-2">Djayadi Hanan, Ph.D.</h2>
          <p className="text-xl text-[#00748D] mb-6">
            Head of the Ph.D. in Political Science Program
          </p>
          <p className="text-gray-700 whitespace-pre-line text-justify">
            is the head of the MPP Program in Climate Change at UIII. He also
            coordinates the Center for Climate and Sustainable Finance at the
            University of Indonesia (CCSF UI). He holds a Ph.D. in Economics,
            University of Leipzig, Germany. He was lead economist at the World
            Resources Institute (WRI) Indonesia and had served at Indonesia’s
            President Offices under both Joko Widodo and Susilo Bambang
            Yudhoyono (KSP and UKP4) as expert and policy advisor in green
            economy, sustainable development, and data governance. A former
            fellow at the Netherlands Institute for Advanced Study (NIAS) in the
            Humanities and Social Sciences, in Amsterdam, and the Helmholtz
            Center for Environmental Research (UFZ) in Germany, he has been
            published in several academic journals including Nature
            Sustainability and Sustainable Development.
          </p>
        </div>
      </div>
    </section>
  );
}
