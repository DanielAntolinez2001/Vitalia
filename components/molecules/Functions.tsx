import React from "react";
import { Users, Dumbbell, Apple, Bed, Brain, GraduationCap } from "lucide-react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";

const Functions = () => {
  return (
    <section id="funciones" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">
          Funciones
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
          <Card>
            <CardHeader>
              <Dumbbell className="w-8 h-8 mb-2" />
              <CardTitle>Modulo de Entrenamiento.</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Planes de ejercicio personalizados para diferentes niveles de
                condición física. Demostraciones de ejercicios con videos claros
                y concisos. Seguimiento de tu progreso a través de gráficos y
                estadísticas. Opción de elegir entre diferentes tipos de
                entrenamiento (cardio, fuerza, flexibilidad).
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Apple className="w-8 h-8 mb-2" />
              <CardTitle>Modulo nutricional.</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Base de datos de alimentos extensa y fácil de usar. Creador de
                menús personalizados para ayudarte a alcanzar tus objetivos
                nutricionales. Seguimiento de calorías y macronutrientes.
                Recetas saludables y deliciosas.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Bed className="w-8 h-8 mb-2" />
              <CardTitle>Modulo de sueño.</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Seguimiento de tus patrones de sueño y calidad del descanso.
                Consejos para mejorar la calidad del sueño. Herramientas de
                relajación y meditación guiada.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Brain className="w-8 h-8 mb-2" />
              <CardTitle>Modulo de Salud Mental.</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Herramientas para monitorear tu estado de ánimo y gestionar el
                estrés. Técnicas de relajación y meditación. Acceso a artículos
                y recursos sobre salud mental.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="w-8 h-8 mb-2" />
              <CardTitle>Comunidad.</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Foros donde puedes hacer preguntas y compartir experiencias.
                Grupos de apoyo para encontrar personas con intereses similares.
                Desafíos y concursos para mantenerte motivado.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <GraduationCap className="w-8 h-8 mb-2" />
              <CardTitle>Educación.</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Artículos y blogs sobre temas relacionados con la salud y el
                bienestar. Videos explicativos sobre nutrición, ejercicio y
                salud mental. Cuestionarios y evaluaciones para conocer mejor
                tus necesidades.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Functions;
