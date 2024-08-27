"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Monitor, Server, Network, ChevronRight } from "lucide-react";
import Link from "next/link";
import Join from "@/components/join";

const MotionCard = motion(Card);

export default function Page() {
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
    <div className="min-h-screen text-white p-20 md:pt-20">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.header
          className="text-center space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold tracking-tight">CyberPatriot</h1>
          <p className="text-xl text-blue-200">
            Empowering the Next Generation of Cyber Defenders
          </p>
        </motion.header>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MotionCard className="" variants={itemVariants}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-yellow-400" />
                <span>About CyberPatriot</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-100">
                CyberPatriot is the National Youth Cyber Education Program
                created by the Air & Space Forces Association. Our mission is to
                inspire K-12 students to pursue careers in cybersecurity and
                other STEM fields vital to our nation's future. Through hands-on
                learning and exciting competitions, we're building the next
                generation of cyber defenders.
              </p>
            </CardContent>
          </MotionCard>

          <MotionCard className="" variants={itemVariants}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Monitor className="h-6 w-6 text-green-400" />
                <span>National Youth Cyber Defense Competition</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-100">
                At the heart of CyberPatriot is our flagship event: the National
                Youth Cyber Defense Competition. This thrilling challenge puts
                high school and middle school students in charge of securing
                virtual networks, simulating real-world cybersecurity scenarios.
                It's not just a competition; it's a gateway to the exciting
                world of cyber defense.
              </p>
            </CardContent>
          </MotionCard>
        </motion.div>

        <motion.section
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-3xl font-semibold text-center">
            Competition Sections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MotionCard className="" variants={itemVariants}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Server className="h-6 w-6 text-red-400" />
                  <span>Linux</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-indigo-100 mb-4">
                  Master the art of securing Linux systems. Learn about user
                  management, file permissions, and system hardening techniques.
                </p>
                <Link href="/cyberpatriot/linux" passHref>
                  <Button variant="secondary" className="w-full">
                    Explore Linux <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </MotionCard>

            <MotionCard className="" variants={itemVariants}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Monitor className="h-6 w-6 text-blue-400" />
                  <span>Windows</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-indigo-100 mb-4">
                  Dive into Windows security. From Group Policy to Windows
                  Defender, learn to protect the world's most popular operating
                  system.
                </p>
                <Link href="/cyberpatriot/windows" passHref>
                  <Button variant="secondary" className="w-full">
                    Explore Windows <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </MotionCard>

            <MotionCard className="" variants={itemVariants}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Network className="h-6 w-6 text-green-400" />
                  <span>Cisco</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-indigo-100 mb-4">
                  Get hands-on with network security. Configure routers, set up
                  firewalls, and learn the ins and outs of secure network
                  architecture.
                </p>
                <Link href="/cyberpatriot/cisco" passHref>
                  <Button variant="secondary" className="w-full">
                    Explore Cisco <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </MotionCard>
          </div>
        </motion.section>

        <motion.section
          className="text-center space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold">Join the Cyber Today</h2>
          <p className="text-blue-200 max-w-2xl mx-auto">
            CyberPatriot is more than just a program—it's a community of future
            cyber leaders. Join us Cybersecurity Club to be part of that future
          </p>
          <Join />
        </motion.section>

        <motion.footer
          className="text-center text-blue-300 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <p>A program of the Air & Space Forces Association</p>
        </motion.footer>
      </div>
    </div>
  );
}
