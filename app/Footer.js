import Image from "next/image";

function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-center h-16 w-full bg-lightgreen py-4 sm:py-0"> 
      <div className="flex flex-row items-center justify-center sm:justify-start space-x-4 mb-4 ml-10 sm:mb-0">
        <a href="https://github.com/jclaerhout" target="_blank" rel="noopener noreferrer">
          <Image width={32} height={32} src="/images/github-icon.png" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/julien-claerhout/" target="_blank" rel="noopener noreferrer">
          <Image width={32} height={32} src="/images/linkedin-icon.png" alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/juphoto_/" target="_blank" rel="noopener noreferrer">
          <Image width={32} height={32} src="/images/instagram-icon.png" alt="Instagram" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;