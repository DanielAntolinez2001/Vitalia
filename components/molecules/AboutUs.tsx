import React from "react";

const AboutUs = () => {
  return (
    <section
      id="sobre-nosotros"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted"
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Sobre nosotros
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Describe la misión, visión y valores de tu empresa o proyecto.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
