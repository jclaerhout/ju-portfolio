import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-secondary text-textDark min-h-screen">
      <section className="flex flex-col items-center justify-center text-center pt-10 pb-20 bg-primary text-white">
        <Image
          src="/images/profile.jpg"
          alt="Profile photo of Julien Claerhout"
          width={128}
          height={128}
          className="mb-5 rounded-full mx-auto"
        />
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-lg">
          I am <span className="font-semibold">Julien Claerhout</span>, an aspiring network engineer passionate about IT infrastructure and cybersecurity.
        </p>
        <div className="flex mt-6 space-x-4">
          <a
            href="docs/CV-intern-networking.pdf"
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

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary">About Me</h2>
          <p className="mt-4 text-lg">
            I am a recent graduate in Computer Science with a strong foundation in IT acquired during my Bachelor's studies at EPHEC. Currently pursuing a CCNA certification, I am specializing in networking, with hands-on experience in configuring routers, switches, VLANs, and network security protocols. Passionate about IT infrastructure, I am actively seeking an internship to apply my skills and gain practical experience in network engineering.
            Beyond networking, I have experience with Docker, Linux/Windows administration, Python scripting, and virtualization technologies, making me a versatile IT professional ready to take on new challenges.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-6 bg-gray-100">
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
          <a href="https://github.com/jclaerhout" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/julien-claerhout" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:julienclaerhout@gmail.com">E-mail</a>
        </div>
        <p className="mt-4 text-sm">&copy; 2024 Julien Claerhout. All rights reserved.</p>
      </footer>
    </main>
  );
}
