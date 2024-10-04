'use client'

import React from 'react'
import Header from '@/components/molecules/Header'
import About from '@/components/molecules/About'
import AboutUs from '@/components/molecules/AboutUs'
import Functions from '@/components/molecules/Functions'
import Team from '@/components/molecules/Team'
import Footer from '@/components/molecules/Footer'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-14">
        <About />
        <AboutUs />
        <Functions />
        <Team />
      </main>
      <Footer />
    </div>
  );
}
