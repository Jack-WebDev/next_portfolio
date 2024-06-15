
type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  tools: string[];
};

export default function ProjectCards({ title, description, link, tools }: ProjectCardProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full  rounded-lg shadow-lg p-4 mb-4">

      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="text-center">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-xl">{description}</p>

          {tools.map((tool, index) => (
            <div key={index} className="flex flex-row items-center justify-center w-full h-full">
              <div className="mr-2 text-sm">{tool}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-row items-center justify-center w-full h-full">                    
          <a href={link} className="text-white bg-blue-500 hover:bg-blue-700 text-lg font-bold py-2 px-4 rounded-lg">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
}

