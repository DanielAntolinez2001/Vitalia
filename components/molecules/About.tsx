import React from "react";

const About = () => {
  return (
    <section id="acerca-de" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Acerca de
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Vitalia es tu guía personal en el camino hacia una vida más saludable.
          Con Vitalia, tendrás acceso a: Planes personalizados: Rutinas de
          ejercicio diseñadas para ti, planes de alimentación adaptados a tus
          gustos y seguimiento de tus avances. Comunidad de apoyo: Conéctate con
          personas que comparten tus metas y encuentra motivación en desafíos
          grupales y foros. Educación práctica: Aprende todo lo que necesitas
          saber sobre nutrición, ejercicio y salud mental a través de artículos,
          vídeos y consejos de expertos. Seguimiento sencillo: Lleva un registro
          de tu progreso y recibe recordatorios para mantenerte en el camino.
        </p>
      </div>
    </section>
  );
};

export default About;
