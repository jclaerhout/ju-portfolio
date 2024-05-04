import Link from 'next/link';
import Image from "next/image";

function Home() {
  return (
    <div className="h-screen flex flex-col bg-white">
      <div className="h-1/5 flex items-center justify-center">
        <Button href="/">Acceuil</Button>
        <Button href="/portfolio">Portfolio</Button>
        <Button href="/cv">CV</Button>
      </div>
      <div className="h-4/5 flex flex-row">
        <div className="w-2/3 flex items-center justify-center">
          <Image className="rounded-full" src="/images/me.jpg" alt="Julien Claerhout" width={400} height={400} />
        </div>
        <div className="w-2/3 flex items-center">
          <div className="text-center">
            <h1 className="text-8xl font-zen-bold text-darkgreen">Julien Claerhout</h1>
            <p className="text-4xl font-zen-black text-darkgreen">IT student</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Button({ href, children }) {
  return (
    <Link href={href}>
      <button className="m-2 w-24 h-12 rounded-3xl text-lg font-zen-bold bg-lightgreen transform transition-transform duration-500 hover:scale-110">
        {children}
      </button>
    </Link>
  );
}

export default Home;