"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'

export default function LoginPage() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Aquí iría la lógica de inicio de sesión
    console.log('Inicio de sesión')
  }

  return (
    <div className="flex min-h-screen bg-background">
      <div className="flex flex-col justify-center w-full max-w-md p-8">
        <Card>
          <CardHeader>
            <CardTitle>Iniciar sesión</CardTitle>
            <CardDescription>Ingresa tus credenciales para acceder</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input id="email" placeholder="tu@ejemplo.com" required type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Contraseña</Label>
                  <Input id="password" required type="password" />
                </div>
              </div>
              <Button className="w-full mt-4" type="submit">
                Iniciar sesión
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/">
              <Button variant="outline">Volver al inicio</Button>
            </Link>
            <Link href="/register">
              <Button variant="link">¿No tienes cuenta? Regístrate</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
      <div className="hidden lg:flex flex-col justify-center items-center w-full bg-muted">
        <h1 className="text-4xl font-bold">Vitalia</h1>
        <p className="mt-2 text-xl">Bienvenido de vuelta</p>
      </div>
    </div>
  )
}