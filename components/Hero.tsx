"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Download,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/data";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-blue-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="relative">
              <motion.div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1"></motion.div>
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-32 h-32 rounded-full object-cover relative z-10"
              />
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-muted-foreground mt-4">
              {personalInfo.title}
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.open(personalInfo.resumeUrl, "_blank")}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 px-8 py-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={scrollToContact}
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300"
              onClick={() => window.open(personalInfo.social.github, "_blank")}
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300"
              onClick={() =>
                window.open(personalInfo.social.linkedin, "_blank")
              }
            >
              <Linkedin className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300"
              onClick={() =>
                window.open(personalInfo.social.facebook, "_blank")
              }
            >
              <Facebook className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="h-12 w-12 rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300"
              onClick={() =>
                window.open(personalInfo.social.instagram, "_blank")
              }
            >
              <Instagram className="h-6 w-6" />
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
