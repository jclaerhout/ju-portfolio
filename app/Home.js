import Image from "next/image";

function Home() {
  return (
    <div className="flex flex-col bg-white overflow-auto">
      <div className="h-4/5 flex flex-col sm:flex-row items-center justify-center">
        <div className="w-full sm:w-1/3 flex items-center justify-center mb-5 sm:mb-0 sm:mr-5">
          <Image className="rounded-full" src="/images/me.jpg" alt="Julien Claerhout" width={300} height={300} />
        </div>
        <div className="w-full sm:w-1/3 flex items-center">
          <div className="text-center">
            <h1 className="text-6xl font-zen-bold text-darkgreen">Julien Claerhout</h1>
            <p className="text-4xl font-zen-black text-darkgreen">IT student</p>
          </div>
        </div>
      </div>
      <div className="mt-10 px-8 py-4">
        <h2 className="text-4xl font-zen-bold text-darkgreen mb-4 text-center">About Me</h2>
        <div className="bg-softgrey w-full sm:w-9/12 mx-auto rounded-3xl">
          <p className="text-lg font-zen-medium text-darkgreen p-8">
            Je suis Julien Claerhout, étudiant en informatique, qui crée son premier portfolio.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;