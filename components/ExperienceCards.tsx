type ExperienceProps = {
  duration: string;
  company: string;
  description: string;
  tools?: string[];
};

export default function Cards({
  duration,
  company,
  description,
  tools,
}: ExperienceProps) {
  return (
<div className="max-w-4xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-6 p-6 rounded-xl bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/60 transition-all duration-300">
        {/* Duration section */}
        <div className="lg:w-1/4">
          <span className="text-white/90 font-medium text-sm tracking-wider uppercase">
            {duration}
          </span>
        </div>

        {/* Content section */}
        <div className="lg:w-3/4 space-y-4">
          <h3 className="text-white text-xl font-bold tracking-tight">
            {company}
          </h3>
          
          <p className="text-slate-300 leading-relaxed">
            {description}
          </p>

          {/* Tools grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {tools?.map((tool, index) => (
              <span
                key={index}
                className="inline-flex items-center justify-center px-3 py-1.5 rounded-xl bg-white/10 text-white text-sm font-medium hover:bg-white/15 transition-colors duration-200"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
