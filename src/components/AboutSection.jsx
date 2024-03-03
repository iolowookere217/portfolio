"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import image from "next/image";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="border border-purple-500 p-4 flex flex-wrap gap-4 ">
        <li>node.js</li>
        <li>express</li>
        <li>html</li>
        <li>css</li>
        <li>javascript</li>
        <li>react</li>
        <li>python</li>
        <li>C</li>
        <li>docker</li>
        <li>kubernetes</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="border border-purple-500 p-4 flex flex-col gap-4 list-disc pl-8">
        <li>ALX Africa</li>
        <li>AWS Cloud Developer</li>
        <li>Applied Data Science at WorldQuant University</li>
        <li>Python Programming for Data Science Udacity</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="border border-purple-500 p-4 flex flex-col gap-4 list-disc pl-8">
        <li>Full Stack Software Engineer</li>
        <li>AWS Cloud Developer</li>
        <li>Applied Data Science</li>
        <li>Python Programming for Data Science</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:pl-16"
        c
      >
        <img
          src="image.avif"
          alt="about me image"
          className="w-[auto] md:h-[25rem]"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl text-white font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web application. I have experience
            working with Javascript, react, redux, Node.js, Express, PostgreSQL,
            Sequelize, html, css and git. I am a quick learner and I am always
            excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row  justify-start mt-4 gap-4">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-4 w-full">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
