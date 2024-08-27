"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

const MotionCard = motion(Card);

export default function Component() {
  const categoryData = {
    name: "Windows",
    presentations: [
      {
        title: "Presentations From Meetings",
        files: [
          {
            name: "test",
            link: "link",
          },
        ],
      },
    ],
    importantLinks: [{ name: "Windows Checklist", link: "" }],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen ">
      <main className="container mx-auto px-4 py-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold">{categoryData.name}</h1>
        </motion.div>

        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {categoryData.presentations.map((section, index) => (
            <MotionCard key={index} className="" variants={itemVariants}>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.files.map((file, fileIndex) => (
                    <Button
                      key={fileIndex}
                      variant="outline"
                      className="justify-start"
                      asChild
                    >
                      <a href={file.link}>
                        <FileDown className="mr-2 h-4 w-4" />
                        {file.name}
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </MotionCard>
          ))}

          <MotionCard className="" variants={itemVariants}>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">
                Important Files/Links
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryData.importantLinks.map((link, linkIndex) => (
                  <Button
                    key={linkIndex}
                    variant="outline"
                    className="justify-start"
                    asChild
                  >
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FileDown className="mr-2 h-4 w-4" />
                      {link.name}
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </MotionCard>
        </motion.section>
      </main>
    </div>
  );
}