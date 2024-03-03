import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Home() {
  return (
    <div>
      <main>
        <section className="bg-cyan-700 h-screen">
          <div className="flex items-center justify-center h-full">
            <div className="text-center mt-10">
              <h1 className="text-4xl font-bold text-white">Julien Claerhout</h1>
              <p className="text-white">Fullstack developer</p>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
