import Cards from "./ExperienceCards";

export default function Experience() {
  return (
<div className="mt-20 sm:mt-28 w-[90%] sm:w-[90%] lg:w-[70%] mx-auto">
  <h2 className="text-3xl sm:text-4xl text-start sm:text-center text-white font-bold mb-12">
    Experience
  </h2>
  <Cards
    duration="2024-Present"
    company="Software Developer - New Dawn Technologies"
    description="I am responsible for designing, developing, and testing software applications using React.js with Next.js for the front-end and Node.js with Express for the back-end. I ensure the implementation of clean, maintainable, and efficient code, adhering to industry best practices. My work involves close collaboration with cross-functional teams, including designers and product managers, to understand and implement project requirements effectively."
    tools={["Next.js", "Tailwind CSS", "ShadCN", "TypeScript", "Node.js", "Figma"]}
  />
  <Cards
    duration="2022-2024"
    company="Software Developer/UI Designer - Freelancer"
    description="As a software developer freelancer, I'm involved in collaborating with clients to understand their requirements, designing and implementing software solutions, conducting thorough testing, and delivering high-quality, customized projects. I enjoy managing project timelines and communication while leveraging my expertise to provide efficient and tailored software solutions."
    tools={["React", "Express.js", "Bootstrap V5", "Node.js"]}
  />
  <Cards
    duration="2019-2020"
    company="WhiteFox Ltd. - Supervisor"
    description="As a supervisor of an online delivery service, my duties included overseeing daily operations, managing delivery staff, and ensuring timely and accurate order fulfilment. I coordinated logistics, tracked deliveries, and addressed customer inquiries. I had to maintain efficiency, ensuring customer satisfaction, and optimizing the delivery process."
  />
</div>


  );
}
