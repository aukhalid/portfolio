"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { personalInfo, skills, experience } from "@/lib/data";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
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
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my background, skills, and experience
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Bio & Experience */}
            <motion.div variants={itemVariants} className="space-y-8">
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-6">
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
                    />
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">
                        {personalInfo.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {personalInfo.bio}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        📍 {personalInfo.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Experience */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Experience</h3>
                <div className="space-y-4">
                  {experience.map((exp, index) => (
                    <motion.div
                      key={exp.company}
                      variants={itemVariants}
                      custom={index}
                    >
                      <Card className="p-6 hover:shadow-md transition-shadow">
                        <CardContent className="p-0">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-lg">
                              {exp.title}
                            </h4>
                            <Badge variant="secondary">{exp.period}</Badge>
                          </div>
                          <p className="text-primary font-medium mb-2">
                            {exp.company}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {exp.description}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-6">
                Skills & Technologies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      custom={index}
                      whileHover={{ scale: 1.02 }}
                      className="group"
                    >
                      <Card className="p-4 hover:shadow-md transition-all duration-300 group-hover:border-primary/50">
                        <CardContent className="p-0">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <IconComponent className="h-5 w-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-center">
                                <span className="font-medium">
                                  {skill.name}
                                </span>
                                <span className="text-sm text-muted-foreground">
                                  {skill.level}%
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="w-full bg-secondary rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
