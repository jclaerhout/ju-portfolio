import Image from "next/image";

function Portfolio() {
  return (
    <div className="flex items-center justify-center">
      <Image src="/images/work-in-progress.png" alt="Portfolio" width={150} height={150} />
    </div>
  );
}

export default Portfolio;