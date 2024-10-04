"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Home, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-14 flex items-center bg-background border-b">
      <Link className="flex items-center justify-center" href="#">
        <Home className="h-6 w-6" />
        <span className="sr-only">Inicio</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#acerca-de"
        >
          Acerca de
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#sobre-nosotros"
        >
          Sobre nosotros
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#funciones"
        >
          Funciones
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#equipo"
        >
          Equipo
        </Link>
      </nav>
      <div className="ml-auto flex gap-2">
        <Link href="/login">
          <Button variant="outline" size="sm" className="hidden sm:inline-flex">
            Iniciar sesión
          </Button>
        </Link>
        <Link href="/register">
          <Button size="sm" className="hidden sm:inline-flex">
            Registrarse
          </Button>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Cambiar tema"
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </div>
    </div>
  );
};

export default Header;
