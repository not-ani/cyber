import { Partners } from "@/components/competitions";
import CTA from "./_components/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-x-clip pt-12 md:pt-24">
      <section className="flex flex-col items-center px-4 gap-20 sm:px-6 lg:px-8 pt-24">
        <CTA />

        <Partners />
      </section>
    </main>
  );
}
