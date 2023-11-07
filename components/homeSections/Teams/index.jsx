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
            name="Coriss Ambady"
            profession="Web Developer"
            imageSrc="https://i.ibb.co/T1J9LD4/image-03-2.jpg"
          />
          <Team
            name="Coriss Ambady"
            profession="Web Developer"
            imageSrc="https://i.ibb.co/8P6cvVy/image-01-1.jpg"
          />
          <Team
            name="Coriss Ambady"
            profession="Web Developer"
            imageSrc="https://i.ibb.co/30tGtjP/image-04.jpg"
          />
          <Team
            name="Coriss Ambady"
            profession="Web Developer"
            imageSrc="https://i.ibb.co/yVVT0Dp/image-02-2.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default Teams;


