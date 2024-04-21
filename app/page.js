import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="h-1/5 flex items-center justify-center bg-dark-blue">
        <button className="m-2">Projets</button>
        <button className="m-2">Portfolio</button>
        <button className="m-2">CV</button>
      </div>
      <div className="h-4/5 flex flex-row bg-dark-blue">
        <div className="w-1/2 flex items-center justify-center">
          <Image src="/images/me.jpg" alt="Julien Claerhout" width={400} height={400} />
        </div>
        <div className="w-1/2 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-8xl font-Montserrat-Regular text-yellow">Julien Claerhout</h1>
            <p className="text-4xl text-yellow">Fullstack developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}