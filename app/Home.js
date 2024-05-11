import Image from "next/image";

function Home() {
  return (
    <div className="flex flex-col bg-white overflow-auto">
      <div className="flex flex-col">
        <div className="h-4/5 flex flex-col sm:flex-row items-start sm:items-center">
          <div className="w-full sm:w-2/3 flex items-center justify-center">
            <Image className="rounded-full" src="/images/me.jpg" alt="Julien Claerhout" width={400} height={400} />
          </div>
          <div className="w-full sm:w-2/3 flex items-center">
            <div className="text-center mt-5">
              <h1 className="text-8xl font-zen-bold text-darkgreen">Julien Claerhout</h1>
              <p className="text-4xl font-zen-black text-darkgreen">IT student</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 px-8 py-4">
        <h2 className="text-4xl font-zen-bold text-darkgreen mb-4">About Me</h2>
        <p className="text-lg text-darkgreen">
          // Ajoutez ici le texte de votre choix
        </p>
      </div>
    </div>
  );
}

export default Home;