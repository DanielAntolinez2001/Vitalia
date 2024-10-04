import React from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";

const Team = () => {
  return (
    <section id="equipo" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-8">
          Equipo de desarrollo
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <Avatar>
                <AvatarImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="Avatar"
                />
                <AvatarFallback>DA</AvatarFallback>
              </Avatar>
              <CardTitle>Daniel Antolinez</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Desarrollador Frontend</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Avatar>
                <AvatarImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="Avatar"
                />
                <AvatarFallback>FL</AvatarFallback>
              </Avatar>
              <CardTitle>Felipe Lopez</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Desarrolladora Frontend</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Avatar>
                <AvatarImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="Avatar"
                />
                <AvatarFallback>SS</AvatarFallback>
              </Avatar>
              <CardTitle>Sofia Sanchez</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Desarrollador Frontend</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Avatar>
                <AvatarImage
                  src="/placeholder.svg?height=40&width=40"
                  alt="Avatar"
                />
                <AvatarFallback>JG</AvatarFallback>
              </Avatar>
              <CardTitle>Juan Gomez</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Desarrollador Frontend</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;
