"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail } from "lucide-react";

const MotionCard = motion(Card);

export default function Component() {
  const roles = [
    {
      title: "Co-President",
      members: [
        { name: "Sireesha Athelli", email: "sathelli@cherrycreekschools.org" },
        { name: "Elynor Sykes", email: "esykes@cherrycreekschools.org" },
      ],
    },
    {
      title: "Vice President",
      members: [
        {
          name: "Aniketh Chenjeri",
          email: "anarendrachenjeri2@cherrycreekschools.org",
        },
      ],
    },
    {
      title: "Sponsor",
      members: [{ name: "Paul Lein", email: "plein@cherrycreekschools.org" }],
    },
    {
      title: "Windows Chair",
      members: [],
    },
    {
      title: "Linux Chair",
      members: [],
    },
    {
      title: "Cisco Chair",
      members: [],
    },
    {
      title: "CTF Co-Chair",
      members: [],
    },
  ];

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
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-xl text-gray-400">
            Get in touch with our CyberSecurity Club leadership
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {roles.map((role, index) => (
            <MotionCard key={index} className="" variants={itemVariants}>
              <CardHeader>
                <CardTitle className="text-xl font-semibold">
                  {role.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {role.members.map((member, memberIndex) => (
                  <div
                    key={memberIndex}
                    className="flex items-center space-x-4 mt-2"
                  >
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-sm text-blue-400 hover:underline flex items-center"
                      >
                        <Mail className="h-4 w-4 mr-1" />
                        {member.email}
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </MotionCard>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
