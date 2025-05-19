import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center pt-10 pb-20 bg-gradient-to-r from-primary to-accent text-white">
      <div className="mb-5 rounded-full mx-auto overflow-hidden w-32 h-32">
        <Image
          src="/images/profile.jpg"
          alt="Profile photo of Julien Claerhout"
          width={128}
          height={128}
          className="object-cover w-full h-full"
        />
      </div>
      <h1 className="text-4xl font-bold mb-2">Hi, I&apos;m Julien</h1>
      <h2 className="text-2xl font-semibold">Network Administrator at RTBF</h2>
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
  );
}
