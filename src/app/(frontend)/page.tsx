import type { Metadata } from 'next';
import Program from "@/components/landing/Program";
import Footer from "@/components/Footer";
import Header from "@/components/landing/Header";
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Headline from "@/components/landing/Headline";
import Research from "@/components/landing/Research";

export const metadata: Metadata = {
  title: 'Faculty of Social Sciences - UIII',
  description: 'Faculty of Social Sciences at Universitas Islam International Indonesia. Explore our academic programs, research, and more.',
};

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="font-halyard">
        <Header />
        <Program />
        <Headline />
        <Research />
      </main>
      <Footer />
    </>
  );
}