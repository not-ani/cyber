"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animation-variants";

export default function Footer() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mt-auto flex w-full items-center justify-center gap-1 border-t bg-background p-6 text-muted-foreground md:justify-start"
    >
      <motion.div variants={itemVariants}>
        Made by
        <Link
          href="https://www.anikethchenjeri.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className="text-zinc-300 underline underline-offset-2 transition-all duration-200 ease-linear hover:text-yellow-200">
            {" "}
            Ani
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
