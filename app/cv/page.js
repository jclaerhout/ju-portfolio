import Image from "next/image";

function CV() {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full sm:w-1/2 border-4 border-cv-blue p-2 rounded-lg">
        <Image layout="responsive" width={2482} height={3510} src="/images/CV.jpg" alt="CV" />
      </div>
    </div>
  );
}

export default CV;