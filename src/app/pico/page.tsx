"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Flag,
  Trophy,
  Users,
  ExternalLink,
  Calendar,
  School,
  Medal,
} from "lucide-react";

export default function Page() {
  return (
    <motion.div
      className="p-10 md:pt-20 max-w-6xl mx-auto space-y-8 pt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.header
        className="text-center space-y-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-5xl font-bold tracking-tight text-white">
          PicoCTF 2024-2025
        </h1>
        <p className="text-xl text-gray-400">Capture the Flag Competition</p>
      </motion.header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="bg-background h-full">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Flag className="h-6 w-6 text-blue-400" />
                <span>What is this?</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Pico CTF is a Capture the Flag competition from March 12 to
                March 26, 2024. You create teams up to 5 and earn as many points
                as possible during this 2 week period.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="bg-background h-full">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="h-6 w-6 text-yellow-400" />
                <span>Awards</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    place: "1st Place",
                    amount: "$3,000",
                    color: "text-yellow-500",
                  },
                  {
                    place: "2nd Place",
                    amount: "$2,000",
                    color: "text-gray-400",
                  },
                  {
                    place: "3rd Place",
                    amount: "$1,000",
                    color: "text-amber-600",
                  },
                ].map((award, index) => (
                  <motion.div
                    key={index}
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <Medal className={award.color}>{award.place}</Medal>
                    <p className="text-gray-300">
                      {award.amount} and may have opportunity to visit Carnegie
                      Mellon University's Pittsburgh campus for an award
                      ceremony
                    </p>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="mt-4 p-4 bg-muted/80 rounded-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <p className="text-gray-300">
                  Top 40% of teams on the US High School Competition Scoreboard
                  will be eligible for a scholarship to take the GFACT from the
                  National Cyber Scholarship Foundation.
                </p>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="md:col-span-2 lg:col-span-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Card className="bg-background">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-green-400" />
                <span>How do I join?</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                {[
                  'Go to <a href="https://play.picoctf.org/login?redirect=/login" class="text-blue-400 hover:underline">PicoCTF login page</a> and click Sign Up.',
                  "Fill out the info to create your account.",
                  "Go to the Classrooms tab at the top of your page.",
                  'Click "Join a Classroom" and enter in the Invite Code: <span class="font-mono bg-gray-700 px-2 py-1 rounded">CXrCqWvKX</span>',
                  'The Classroom name should be "CCHS Bruins".',
                ].map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    dangerouslySetInnerHTML={{ __html: step }}
                  />
                ))}
              </ol>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                <Button className="w-full mt-4">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Join Now
                </Button>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <motion.footer
        className="text-center text-gray-400 space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.3 }}
      >
        <div className="flex items-center justify-center space-x-2">
          <Calendar className="h-4 w-4" />
          <span>March 12 - March 26, 2024</span>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <School className="h-4 w-4" />
          <span>Powered by Carnegie Mellon University</span>
        </div>
      </motion.footer>
    </motion.div>
  );
}
