export default function ProjectsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary">Personal Projects</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <div className="bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-600 italic">More projects coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
