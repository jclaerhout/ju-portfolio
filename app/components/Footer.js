import Image from "next/image";

function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-center h-16 w-full bg-lightgreen py-4 sm:py-0"> 
      <div className="flex flex-row items-center justify-center sm:justify-start space-x-4 mt-4 sm:mt-0 mb-4 sm:mb-0">
        <a href="https://github.com/jclaerhout" target="_blank" rel="noopener noreferrer">
          <Image width={32} height={32} src="/images/footer/github-icon.png" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/julien-claerhout/" target="_blank" rel="noopener noreferrer">
          <Image width={32} height={32} src="/images/footer/linkedin-icon.png" alt="LinkedIn" />
        </a>
        <a href="https://www.instagram.com/juphoto_/" target="_blank" rel="noopener noreferrer">
          <Image width={32} height={32} src="/images/instagram-icon.png" alt="Instagram" />
        </a>
        <a href="mailto:julienclaerhout@gmail.com" target="_blank" rel="noopener noreferrer">
          <Image width={32} height={32} src="/images/footer/mail-icon.png" alt="Mail" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;