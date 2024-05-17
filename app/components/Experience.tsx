// components/Experience.js
import React from "react";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <div className="h-screen mx-8 px-8">
      <h1 className="text-4xl">Where have I worked: </h1>
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        <ExperienceCard
          companyName="Wawanesa Insurance Group"
          role="Administrative Assistant"
          date="February 2023 - Present"
          logoUrl="/images/wawanesa.png"
        />
        <ExperienceCard
          companyName="Manitoba Government"
          role="Data Analyst Intern"
          date="April 2023 - September 2023"
          logoUrl="/images/manitoba-gov.png"
        />
        <ExperienceCard
          companyName="University of Manitoba"
          role="Undergraduate Research Assistant in Computational Mathematics"
          date="January 2022 - September 2022"
          logoUrl="/images/uofm-logo.png"
        />
        <ExperienceCard
          companyName="Air Canada"
          role="Security Officer"
          date="January 2021 - January 2022"
          logoUrl="/images/aircanda.png"
        />
      </div>
    </div>
  );
}

export default Experience;
