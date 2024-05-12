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
            <p className="text-4xl mt-5 font-zen-black text-darkgreen">IT student</p>
          </div>
        </div>
      </div>
      <div className="mt-10 px-8 py-4">
        <h2 className="text-4xl font-zen-bold text-darkgreen mb-4 text-center">Projet professionnel</h2>
        <div className="bg-softgrey w-full sm:w-9/12 mx-auto rounded-3xl">
          <p className="text-lg font-zen-medium text-darkgreen py-4 px-8">
            Bienvenue sur mon portfolio, conçu avec NextJS et stylisé avec TailwindCSS.<br />
            Ces choix technologiques m'ont attiré car ils représentaient un terrain inexploré pour moi. 
            Ce projet s'est avéré être une opportunité idéale pour élargir mes horizons.
          </p>
          <p className="text-lg font-zen-medium text-darkgreen py-4 px-8">
            Alors que ma vie professionnelle se profile, je suis encore en plein questionnement sur la direction que je souhaite prendre 
            après l'obtention de mon diplôme à l'Ephec. Deux voies se dessinent : chercher un emploi, probablement dans le domaine du développement informatique, 
            ou opter pour une formation complémentaire, idéalement d'une durée d'un an, pour me spécialiser, par exemple, dans la sécurité des réseaux. 
            Je ressens le besoin constant d'approfondir mes connaissances pour gagner en crédibilité professionnelle.
          </p>
          <p className="text-lg font-zen-medium text-darkgreen py-4 px-8">
            D'après un test de compétences "onStage" axé sur les soft skills, mes points forts incluent la capacité à valoriser mes idées, 
            à planifier et gérer efficacement, à repérer des opportunités, ainsi qu'à faire preuve de motivation et de persévérance. 
            Cependant, un point faible majeur se dégage, qui nécessite une amélioration générale de ma communication avec autrui.
          </p>
          <p className="text-lg font-zen-medium text-darkgreen py-4 px-8">
            Les domaines à renforcer, selon le même test, sont la capacité à mobiliser les autres, à travailler en équipe et à mobiliser des ressources. 
            Ce constat me pousse à considérer le développement de compétences interpersonnelles comme une priorité dans mon parcours professionnel à venir.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;