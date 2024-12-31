
export default function Roadmap() {
  return (
    <div className="min-h-screen p-6 sm:p-8 md:p-12 mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
            Planned Future Projects
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8] max-w-xl mx-auto leading-relaxed">
            These are some of the exciting projects I have planned for the future. I’m always exploring new challenges and opportunities, so stay tuned for updates! Each project will leverage the latest technologies, including Next.js 15, React 19, GraphQL, TRPC, and the latest libraries and frameworks.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <div className="group bg-white backdrop-blur-lg rounded-xl p-6 sm:p-8 transform hover:-translate-y-1 transition-all duration-300 border border-purple-100 shadow-lg hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-lg">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold ml-3 sm:ml-4 text-gray-800">FinTrack</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600 ml-14 sm:ml-16">
              Your Personal Finance Companion - designed to help you manage your money effortlessly and achieve your financial goals.
            </p>
          </div>

          <div className="group bg-white backdrop-blur-lg rounded-xl p-6 sm:p-8 transform hover:-translate-y-1 transition-all duration-300 border border-purple-100 shadow-lg hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-lg">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold ml-3 sm:ml-4 text-gray-800">StreamIt</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600 ml-14 sm:ml-16">
              Your Ultimate Entertainment Hub - Experience endless entertainment with StreamIt, the ultimate Netflix-inspired streaming platform. Dive into a vast library of movies, TV shows, and original content tailored to your preferences.
            </p>
          </div>

          <div className="group bg-white backdrop-blur-lg rounded-xl p-6 sm:p-8 transform hover:-translate-y-1 transition-all duration-300 border border-purple-100 shadow-lg hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-lg">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold ml-3 sm:ml-4 text-gray-800">Chirp</h3>
            </div>
            <p className="text-sm sm:text-base text-gray-600 ml-14 sm:ml-16">
              Connect, Share, Engage - Welcome to Chirp, the social media platform where your voice takes center stage! Inspired by Twitter, Chirp allows you to connect with the world, share your thoughts in real time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
