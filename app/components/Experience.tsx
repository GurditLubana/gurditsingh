import React from "react";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    companyName: "Wawanesa Insurance Group",
    role: "Administrative Assistant",
    date: "February 2023 - Present",
    logoUrl: "/images/wawanesa.png",
    responsibilities: [
      "Managed office supplies and inventory",
      "Coordinated and scheduled meetings",
      "Prepared reports and maintained records",
    ],
  },
  {
    companyName: "Manitoba Government",
    role: "Programmer Analyst Intern",
    date: "April 2023 - September 2023",
    logoUrl: "/images/manitoba-gov.png",
    responsibilities: [
      "Developed and maintained web applications",
      "Collaborated with senior developers on various projects",
      "Provided technical support and troubleshooting",
    ],
  },
  {
    companyName: "University of Winnipeg",
    role: "Security Guard",
    date: "September 2022 - January 2023",
    logoUrl: "/images/uofwLogo.png",
    responsibilities: [
      "Ensured the safety and security of campus facilities",
      "Monitored surveillance systems",
      "Responded to emergency situations",
    ],
  },
  {
    companyName: "University of Manitoba",
    role: "Undergraduate Research Assistant in Computational Mathematics",
    date: "January 2022 - September 2022",
    logoUrl: "/images/uofm-logo.png",
    responsibilities: [
      "Assisted in research projects in computational mathematics",
      "Collected and analyzed data",
      "Prepared research reports and presentations",
    ],
  },
  {
    companyName: "Air Canada",
    role: "Security Officer",
    date: "January 2021 - January 2022",
    logoUrl: "/images/aircanda.png",
    responsibilities: [
      "Ensured the safety of passengers and staff",
      "Conducted security checks and screenings",
      "Handled emergency situations and incidents",
    ],
  },
];

function Experience() {
  return (
    <div id="experienceSection" className="mx-1 md:mx-8 md:px-8 flex flex-col gap-1">
      <h1 className="text-5xl md:text-6xl font-bold mt-20 my-9 text-amber-300 text-center">
        Work Experience
      </h1>
      <div className="relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            companyName={experience.companyName}
            role={experience.role}
            date={experience.date}
            logoUrl={experience.logoUrl}
            responsibilities={experience.responsibilities}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
