import ProjectCards from "./ProjectCards";
import eCommercePage from "@/assets/ecommercePage.png";
import audiophile from "@/assets/audiophile.png";
import notesflow from "@/assets/notesflow.png";
import ahsa from "@/assets/ahsa.png";
import cliLanding from "@/assets/cli-landing.png";
import mziyonke from "@/assets/mziyonke.png";

export default function Projects() {
  return (
    <div className="mt-20 sm:mt-28 w-[90%] mx-auto">
      <h2 className="text-3xl sm:text-4xl text-start sm:text-center text-white font-bold mb-12">
        Projects
      </h2>
      <div className="grid gap-y-12 sm:gap-y-8 md:gap-8 lg:gap-12 lg:grid-cols-2">
        <ProjectCards
          img={audiophile}
          title="Audiophile E-Commerce"
          description="Step into the ultimate shopping experience for audio enthusiasts! This cutting-edge e-commerce platform offers a curated selection of premium speakers, earphones, and headphones. Enjoy seamless navigation, dynamic cart updates, and a lightning-fast checkout process with real-time form validation. Whether you're a casual listener or an audiophile, this project is designed to elevate your shopping experience like never before!"
          link="https://audiophile-eta-ten.vercel.app/"
          tools={["Next.js 14", "TailwindCSS", "Shadcn UI", "Framer Motion"]}
        />
        <ProjectCards
          img={ahsa}
          title="Affordable Housing South Africa (AHSA)"
          description="AHSA is a platform that promotes accessible and affordable housing solutions for South Africans. Designed to empower individuals and families, AHSA provides a user-friendly interface for managing housing applications, accessing funding opportunities, and exploring homeownership programs. With a focus on innovation and accessibility, AHSA aims to simplify the process of securing affordable housing and make the dream of homeownership a reality for all South Africans."
          tools={["Next.js 14", "TailwindCSS", "Shadcn UI", "Framer Motion"]}
          inDev={true}
        />
        <ProjectCards
          img={eCommercePage}
          title="E-Commerce Product Page"
          description='Experience the perfect blend of style and functionality with this sleek product page for "Fall Limited Edition Sneakers." Featuring a bold, high-impact design, it showcases the product with stunning visuals and dynamic interactions. Effortlessly adjust quantities, explore details, and add to your cart with a vibrant, standout button that ensures a smooth and enjoyable shopping journey. This page is designed to turn casual visitors into loyal customers!'
          link="https://e-commerce-product-page-neon-theta.vercel.app/"
          tools={["React-Typescript", "Vite", "TailwindCSS", "Framer Motion"]}
        />
        <ProjectCards
          img={notesflow}
          title="NotesFlow"
          description="Simplify your life and stay organized with this elegant note-taking app! Effortlessly create, categorize, and manage your notes with a clean, intuitive interface. Tag your notes for easy searching, archive completed tasks, and never lose track of important details. Designed for productivity, this app is perfect for personal, professional, or creative use. Whether planning your next trip, optimizing code, or storing your favorite recipes, this tool keeps everything at your fingertips."
          tools={["Next.js 14", "TailwindCSS", "Shadcn UI", "Framer Motion"]}
          inDev={true}
        />
        <ProjectCards
          img={cliLanding}
          title="CodeForge CLI Landing Page"
          description="A landing page for a CLI I created that helps developers automate tasks and boost productivity."
          tools={["Next.js 14", "TailwindCSS"]}
          link="https://codeforge-landing-page.vercel.app/"
        />
        <ProjectCards
          img={mziyonke}
          title="Mziyonke Driving School Website"
          description="I was tasked to revamp the Mziyonke website to give it a modern feel."
          tools={["Next.js 14", "TailwindCSS", "Shadcn UI", "Framer Motion"]}
          link="https://mziyonke-driving-school.vercel.app/"
        />
      </div>
    </div>
  );
}
