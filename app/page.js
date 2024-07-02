"use client"
import React from 'react'
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
  return (

    <div>
      {isAdmin ? (
        <>
          <Header />
          <Admin />
        </>
      ) : (
        <>
          <Header />
          <Hero />
          <About />
          <Services />
          <Review />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Dashboard