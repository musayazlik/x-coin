import React from "react";
import Team from "components/homeSections/Team";

const Teams = () => {
  return (
    <section className=" bg-black py-24 ">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-4xl font-semibold text-primary">
                Our Team
              </span>
              <h2
                className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Awesome Team
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <Team
            name="George Stowe"
            profession="Frontend Developer"
            imageSrc="/teams/team1.avif"
          />
          <Team
            name="Donald Curtin"
            profession="Backend Developer"
            imageSrc="/teams/team2.avif"
          />
          <Team
            name="Whitney Currie"
            profession="UI Designer"
            imageSrc="/teams/team3.avif"
          />
          <Team
            name="Heather Solomon"
            profession="UX Designer"
            imageSrc="/teams/team4.avif"
          />
        </div>
      </div>
    </section>
  );
};

export default Teams;


