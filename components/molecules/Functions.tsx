import React from "react";
import { Info, Users, Settings } from "lucide-react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";

const Functions = () => {
  return (
    <section id="funciones" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">
          Funciones
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <Info className="w-8 h-8 mb-2" />
              <CardTitle>Función 1</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Descripción de la función 1.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="w-8 h-8 mb-2" />
              <CardTitle>Función 2</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Descripción de la función 2.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Settings className="w-8 h-8 mb-2" />
              <CardTitle>Función 3</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Descripción de la función 3.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Functions;
