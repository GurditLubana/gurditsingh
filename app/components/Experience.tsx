import React from "react";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  return (
    <div id="experienceSection" className=" mx-8 px-8 flex flex-col gap-1">
      <h1 className="text-6xl font-bold mt-20 my-9 text-amber-300 text-center">Work Experience </h1>
      <div className=" relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        <ExperienceCard
          companyName="Wawanesa Insurance Group"
          role="Administrative Assistant"
          date="February 2023 - Present"
          logoUrl="/images/wawanesa.png"
          responsibilities="Details about the responsibilities for this role..."
        />
        <ExperienceCard
          companyName="Manitoba Government"
          role="Programmer Analyst Intern"
          date="April 2023 - September 2023"
          logoUrl="/images/manitoba-gov.png"
          responsibilities="Details about the responsibilities for this role..."
        />
        <ExperienceCard
          companyName="University of Winnipeg"
          role="Security Guard"
          date="September 2022 - January 2023"
          logoUrl="/images/uofwLogo.png"
          responsibilities="Details about the responsibilities for this role..."
        />
        <ExperienceCard
        companyName="University of Manitoba"
        role="Undergraduate Research Assistant in Computational Mathematics"
        date="January 2022 - September 2022"
        logoUrl="/images/uofm-logo.png"
        responsibilities="Details about the responsibilities for this role..."
      />
        <ExperienceCard
          companyName="Air Canada"
          role="Security Officer"
          date="January 2021 - January 2022"
          logoUrl="/images/aircanda.png"
          responsibilities="Details about the responsibilities for this role..."
        />
      </div>
    </div>
  );
}

export default Experience;
