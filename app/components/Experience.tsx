import React from "react";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    companyName: "Wawanesa Insurance Group",
    role: "Administrative Assistant",
    date: "February 2023 - Present",
    logoUrl: "/images/wawanesa.png",
    responsibilities: [
      "Managed 15 daily policy records, ensuring accuracy and resolving discrepancies with strong problem-solving skills.",
      "Coordinated mail for 25 employees, achieving a 98% delivery rate and excelling in stakeholder communication.",
      "Supported 400+ policyholders monthly, processing payments and inquiries with a 95% satisfaction rate.",
      "Prioritized and multitasked across tasks using JIRA, successfully managing work priorities and team performance."
    ],
  },
  {
    companyName: "Manitoba Government",
    role: "Programmer Analyst Intern",
    date: "April 2023 - September 2023",
    logoUrl: "/images/manitoba-gov.png",
    responsibilities: [
      "Enhanced Winnipeg’s school dataset accuracy by 95% through cleansing and conversion to a new XSD schema, maintaining compliance with educational data standards.",
      "Improved data processing efficiency and reliability by 30% using Python, Visual Studio Code, and MS SQL Server for dataset integration.",
      "Increased data analysis proficiency by 40%, focusing on accurate and actionable public sector data analysis through continuous learning."
    ],
  },
  {
    companyName: "University of Winnipeg",
    role: "Security Guard",
    date: "September 2022 - January 2023",
    logoUrl: "/images/uofwLogo.png",
    responsibilities: [
      "Ensured the safety and security of campus facilities.",
      "Monitored surveillance systems.",
      "Responded to emergency situations.",
      "Conducted regular security checks and patrolled premises."
    ],
  },
  {
    companyName: "University of Manitoba",
    role: "Undergraduate Research Assistant in Computational Mathematics",
    date: "January 2022 - September 2022",
    logoUrl: "/images/uofm-logo.png",
    responsibilities: [
      "Developed a new theorem in computational mathematics to approximate orthogonal polynomial values.",
      "Used Python and Cocalc to generate and analyze data, staying current with industry trends.",
      "Delivered a professional presentation at an academic conference, highlighting theorem applications.",
      "Documented research findings and algorithms, enhancing reproducibility and supporting further research."
    ],
  },
  {
    companyName: "Air Canada",
    role: "Security Officer",
    date: "January 2021 - January 2022",
    logoUrl: "/images/aircanda.png",
    responsibilities: [
      "Ensured the safety of the staff working in the building.",
      "Conducted security checks and screenings.",
      "Handled emergency situations and incidents.",
      "Monitored surveillance systems and performed regular security patrols."
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
