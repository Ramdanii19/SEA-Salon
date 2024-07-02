"use client"
import React, { useRef } from 'react'
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Services from "./_components/Services";
import Review from "./_components/Review";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Admin from './admin/page';

const Dashboard = () => {
  const { user, permissions } = useKindeBrowserClient();
  const isAdmin = permissions?.permissions?.includes('admin');

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const reviewRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {isAdmin ? (
        <>
          <Header scrollToSection={scrollToSection} heroRef={heroRef} aboutRef={aboutRef} servicesRef={servicesRef} reviewRef={reviewRef} contactRef={contactRef} />
          <Admin />
        </>
      ) : (
        <>
          <Header scrollToSection={scrollToSection} heroRef={heroRef} aboutRef={aboutRef} servicesRef={servicesRef} reviewRef={reviewRef} contactRef={contactRef} />
          <div ref={heroRef}>
            <Hero />
          </div>
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={servicesRef}>
            <Services />
          </div>
          <div ref={reviewRef}>
            <Review />
          </div>
          <div ref={contactRef}>
            <Footer scrollToSection={scrollToSection} heroRef={heroRef} aboutRef={aboutRef} servicesRef={servicesRef} reviewRef={reviewRef} contactRef={contactRef} />
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
