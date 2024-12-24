import React from "react";
import ProjectCards from "./ProjectCards";
import eCommercePage from "@/assets/ecommercePage.png";
import audiophile from "@/assets/audiophile.png";

export default function Projects() {
  return (
    <div className="mt-[5rem] w-[90%] mx-auto">
      <h2 className="text-3xl text-start text-white font-bold mb-12 sm:text-center">
        Projects
      </h2>
      <ProjectCards
        img={eCommercePage}
        title="E-Commerce Product Page"
        description='This e-commerce product page highlights a "Fall Limited Edition Sneakers" offering. It features a clean layout with a prominent product image on the left and detailed product information on the right. There are interactive quantity buttons, a clear call-to-action "Add to Cart" button in orange, and a navigation bar at the top for seamless browsing.'
        link="https://e-commerce-product-page-neon-theta.vercel.app/"
        tools={["React-Typescript", "Vite", "TailwindCSS", "Framer Motion"]}
      />
      <ProjectCards
        img={audiophile}
        title="Audiophile E-Commerce"
        description="This project is an e-commerce platform specializing in the sale of speakers, earphones, and headphones, designed to provide a seamless shopping experience. Users can easily add or remove items from their cart, adjust product quantities, and proceed through a checkout process with real-time form validation for accuracy."
        link="https://audiophile-eta-ten.vercel.app/"
        tools={["Next.js 14", "TailwindCSS", "Shadcn UI", "Framer Motion"]}
      />
    </div>
  );
}
