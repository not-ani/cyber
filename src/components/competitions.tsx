import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
export function Partners() {
  return (
    <div className="grid gap-4 animate-fade-up">
      <h3 className="text-center text-2xl  text-background-foreground font-bold">
        Get Recognized By
      </h3>
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-16">
        <div className="flex items-center justify-center text-white">
          <a
            href="/cyberquest"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center"
          >
            <Image
              src="/Lockheed_Martin_logo.svg"
              alt="lm"
              width={120}
              height={40}
            />
            <ArrowUpRight className="ml-1 h-4 w-4 flex-shrink-0 text-muted-foreground group-hover:text-foreground" />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="/cyberpatriot"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center"
          >
            <p className="font-italic">The Air Force</p>
            <ArrowUpRight className="ml-1 h-4 w-4 flex-shrink-0 text-muted-foreground group-hover:text-foreground" />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="/pico"
            className="group inline-flex items-center justify-center"
          >
            <p className="font-italic">Carnegie Mellon University </p>
            <ArrowUpRight className="ml-1 h-4 w-4 flex-shrink-0 text-muted-foreground group-hover:text-foreground" />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <p>
            <a
              href="/hspc"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center"
            >
              <span className="">Colorado School of Mines</span>
              <ArrowUpRight className="/hscc" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
