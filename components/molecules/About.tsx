import React from "react";

const About = () => {
  return (
    <section id="acerca-de" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Acerca de
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Aquí puedes incluir información sobre tu empresa o proyecto.
        </p>
      </div>
    </section>
  );
};

export default About;
