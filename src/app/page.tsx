import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-secondary text-textDark min-h-screen">
      {/* Hero Section */}
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
            I am a recent graduate in Computer Science with a strong foundation in IT acquired during my Bachelor&apos;s studies at EPHEC. Currently pursuing a CCNA certification, I am specializing in networking, with hands-on experience in configuring routers, switches, VLANs, and network security protocols. Passionate about IT infrastructure, I am actively seeking an internship to apply my skills and gain practical experience in network engineering.
            Beyond networking, I have experience with Docker, Linux/Windows administration, Python scripting, and virtualization technologies, making me a versatile IT professional ready to take on new challenges.
          </p>
        </div>
      </section>

      {/* Career Timeline Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-10">Career Timeline</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <span className="w-6 h-6 bg-accent rounded-full flex-shrink-0"></span>
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Early 2025</h3>
                <p className="text-textDark">Start a professional internship in networking.</p>
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

      {/* Certifications Section */}
      <section className="py-20 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary">Certifications</h2>
          <p className="mt-4 text-lg text-textDark">Here are my Cisco Badges:</p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Badge 1 */}
            <a href="https://www.credly.com/badges/bca68411-10ae-4a8b-9759-f8b8eaea05ad/public_url" target="_blank" className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/ccna-enterprise-networking-security-and-automation.png"
                alt="CCNA: Enterprise Networking, Security, and Automation"
                width={150}
                height={150}
                className="mx-auto"
              />
              <h3 className="text-xl font-bold text-primary mt-4">CCNA: Enterprise Networking, Security, and Automation</h3>
            </a>
            {/* Badge 2 */}
            <a href="https://www.credly.com/badges/a8696993-f9dc-4bbf-974e-6ec4bad421b2/public_url" target="_blank" className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/ccna-switching-routing-and-wireless-essentials.png"
                alt="CCNA: Switching, Routing & Wireless Essentials"
                width={150}
                height={150}
                className="mx-auto"
              />
              <h3 className="text-xl font-bold text-primary mt-4">CCNA: Switching, Routing & Wireless Essentials</h3>
            </a>
            {/* Badge 3 */}
            <a href="https://www.credly.com/badges/0a86a040-0802-4b75-b326-ef44f04ed330/public_url" target="_blank" className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/ccna-introduction-to-networks.png"
                alt="CCNA: Introduction to Networks"
                width={150}
                height={150}
                className="mx-auto"
              />
              <h3 className="text-xl font-bold text-primary mt-4">CCNA: Introduction to Networks</h3>
            </a>
            {/* Badge 4 */}
            <a href="https://www.credly.com/badges/bca68411-10ae-4a8b-9759-f8b8eaea05ad/public_url" target="_blank" className="bg-white shadow-md rounded-lg p-6 transform transition-transform duration-300 hover:scale-105">
              <Image
                src="/images/networking-basics.png"
                alt="Networking Basics"
                width={150}
                height={150}
                className="mx-auto"
              />
              <h3 className="text-xl font-bold text-primary mt-4">Networking Basics</h3>
            </a>
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
        <p className="mt-4 text-sm">&copy; 2024 Julien Claerhout. All rights reserved.</p>
      </footer>
    </main>
  );
}
