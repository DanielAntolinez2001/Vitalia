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
          Objetivo General: Empoderar a los usuarios a alcanzar sus metas de
          salud y bienestar a través de una aplicación móvil que ofrece
          herramientas personalizadas, una comunidad de apoyo y contenido
          educativo de alta calidad. Objetivos Específicos: Personalizar la
          experiencia: Crear planes de entrenamiento, alimentación y rutinas de
          sueño adaptados a las necesidades y preferencias individuales de cada
          usuario. Fomentar la comunidad: Construir un espacio donde los
          usuarios puedan conectarse, compartir experiencias y motivarse
          mutuamente. Educar y empoderar: Proporcionar información confiable y
          actualizada sobre nutrición, ejercicio y salud mental, para que los
          usuarios tomen decisiones informadas sobre su bienestar. Integrar
          tecnologías: Combinar diferentes herramientas y dispositivos para
          ofrecer una visión completa de la salud y el bienestar del usuario.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
