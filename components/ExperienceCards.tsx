
type ExperienceProps = {
    duration: string;
    company: string;
    description: string;
    tools?: string[];
}


export default function Cards({duration, company, description, tools}: ExperienceProps) {
  return (
    <div className="flex flex-col gap-x-8 justify-center items-baseline mt-12 sm:flex-row xl:w-[45%] xl:mx-auto">
        <span className={` text-white font-medium w-full`}>{duration}</span>
        <div>
        <h3 className={` text-white font-bold`}>{company}</h3>
        <p className="mb-8 text-[#94A3B8]">{description}</p>

        <div className="grid grid-cols-2 gap-4">

        {tools?.map((tool, index) => (
            <span key={index} className={` bg-white/10 py-1 px-2 rounded-xl mr-4 border-white text-white text-center font-semibold w-[60%]`}>{tool}</span>
        ))}
        </div>
        </div>

    </div>
  )
}
