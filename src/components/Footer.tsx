export default function Footer() {
  return (
    <footer className="py-6 bg-primary text-white text-center">
      <div className="flex justify-center space-x-4">
        <a
          href="https://github.com/jclaerhout"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-white hover:text-accent transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/julien-claerhout"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-white hover:text-accent transition"
        >
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/juphoto_/"
          target="_blank"
          rel="noopener noreferrer"
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
  );
}
