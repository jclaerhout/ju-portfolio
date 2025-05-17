import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-secondary via-white to-secondary text-textDark min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center pt-10 pb-20 bg-gradient-to-r from-primary to-accent text-white">
        <Image
          src="/images/profile.jpg"
          alt="Profile photo of Julien Claerhout"
          width={128}
          height={128}
          className="mb-5 rounded-full mx-auto"
        />
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Julien</h1>
        <h2 className='text-2xl font-semibold'>Network Administrator at RTBF</h2>
        <div className="flex mt-6 space-x-4">
          <a
            href="docs/CV.pdf"
            target="_blank"
            className="px-6 py-3 bg-accent text-white rounded shadow hover:bg-accent/90 transition"
          >
            Download My CV
          </a>
          <a
            href="https://www.linkedin.com/in/julien-claerhout"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-primary rounded shadow hover:bg-gray-200 transition"
          >
            My LinkedIn
          </a>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-white to-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary">About Me</h2>
          <p className="mt-4 text-lg">
            I am a Junior Network Administrator at the RTBF, where I apply my skills in routing, switching, and infrastructure automation. Certified in CCNA and holding a Bachelor's in IT Technology, I specialize in IT infrastructure, network security, and system administration.
          </p>
        </div>
      </section>


      {/* Certifications Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-accent via-primary to-accent text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">Certifications</h2>
          <div className="mt-10 flex justify-center">
            <a
              href="https://www.credly.com/badges/a674301e-8cc2-4f89-aeff-407012af1ae3/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-md rounded-3xl p-6 transform transition-transform duration-300 hover:scale-105 text-center text-primary"
            >
              <Image
                src="/images/ccna-badge.jpg"
                alt="CCNA Certification Badge"
                width={200}
                height={200}
                className="mx-auto"
              />
              <h3 className="text-xl font-bold mt-4">Cisco Certified Network Associate (CCNA)</h3>
            </a>
          </div>
        </div>
      </section>

      {/* Career Timeline Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-100 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-10">Career Timeline</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <span className="w-6 h-6 bg-accent rounded-full flex-shrink-0"></span>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">May 2025 - Present</h3>
                <p className="text-textDark">Started working as a Junior Network Administrator at the RTBF.</p>
              </div>
            </div>

            <div className="flex items-start">
              <span className="w-6 h-6 bg-accent rounded-full flex-shrink-0"></span>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">January - April 2025</h3>
                <p className="text-textDark">Interning as a Network Administrator at the RTBF.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-6 h-6 bg-accent rounded-full flex-shrink-0"></span>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">January 2025</h3>
                <p className="text-textDark">Achieved Cisco Certified Network Associate (CCNA) certification.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-6 h-6 bg-accent rounded-full flex-shrink-0"></span>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">October - December 2024</h3>
                <p className="text-textDark">Cisco Network Engineer Bootcamp at BeCode.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-6 h-6 bg-accent rounded-full flex-shrink-0"></span>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">2021 - 2024</h3>
                <p className="text-textDark">
                  Bachelor&apos;s degree in IT Technology at EPHEC, with an internship at DiabHealth from February to May 2024. Graduated in June 2024.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-6 h-6 bg-accent rounded-full flex-shrink-0"></span>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">2018 - 2021</h3>
                <p className="text-textDark">Studied Computer Science at UCLouvain.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-6 h-6 bg-accent rounded-full flex-shrink-0"></span>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">June 2018</h3>
                <p className="text-textDark">Earned my CESS (Belgian high school diploma).</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-6 h-6 bg-accent rounded-full flex-shrink-0"></span>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">January 14, 2000</h3>
                <p className="text-textDark">Born in Belgium.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary">Personal Projects</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Artify */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold text-accent">Artify 🎨🎶</h3>
              <p className="mt-2">
                A web application that provides AI-powered music recommendations based on Spotify API.
              </p>
              <a
                href="https://www.artify-app.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-primary underline hover:text-accent"
              >
                View Project
              </a>
            </div>
            {/* Future Project Slot */}
            <div className="bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-600 italic">More projects coming soon...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-primary text-white text-center">
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/jclaerhout" target="_blank" rel="noopener noreferrer"
            className="text-lg text-white hover:text-accent transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/julien-claerhout" target="_blank" rel="noopener noreferrer"
            className="text-lg text-white hover:text-accent transition"
          >
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/juphoto_/" target="_blank" rel="noopener noreferrer"
            className="text-lg text-white hover:text-accent transition"
          >
            Instagram
          </a>
          <a
            href="mailto:julienclaerhout@gmail.com"
            className="text-lg text-white hover:text-accent transition"
          >
            E-mail
          </a>
        </div>
        <p className="mt-4 text-sm">&copy; 2025 Julien Claerhout. All rights reserved.</p>
      </footer>
    </main>
  );
}
