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
    <div className="group relative max-w-4xl mx-auto">
      <div className="absolute -inset-0.5 bg-blue-600 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500" />

      <div className="relative flex flex-col lg:flex-row gap-6 p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-slate-700/50 group-hover:border-slate-600/50 transition-all duration-500 shadow-lg group-hover:shadow-2xl">
        <div className="lg:w-1/4 relative">
          <div className="inline-flex lg:flex-col gap-2 items-start">
            <div className="hidden lg:block w-12 h-0.5 bg-gradient-to-r from-blue-500 to-transparent rounded-full mb-2" />
            <span className="text-blue-400 font-semibold text-sm tracking-wider uppercase bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/20">
              {duration}
            </span>
          </div>
        </div>

        <div className="lg:w-3/4 space-y-5">
          <div className="space-y-2">
            <h3 className="text-white text-2xl font-bold tracking-tight group-hover:text-blue-400 transition-colors duration-300">
              {company}
            </h3>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 rounded-full group-hover:w-24 transition-all duration-500" />
          </div>

          <p className="text-slate-300 leading-relaxed text-[15px]">
            {description}
          </p>

          {tools && tools.length > 0 && (
            <div className="pt-2">
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-gradient-to-br from-slate-700/80 to-slate-800/80 text-slate-200 text-sm font-medium border border-slate-600/50 hover:border-blue-500/50 hover:from-slate-700 hover:to-slate-700 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="absolute top-6 right-6 w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75" />
        </div>
      </div>
    </div>
  );
}
