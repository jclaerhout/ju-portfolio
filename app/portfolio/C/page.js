import Image from "next/image";

const Page = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full md:w-3/4 mx-auto bg-softgrey rounded-3xl p-4 md:p-10">
            <h1 className="text-2xl md:text-4xl text-darkgreen font-bold">Formation OpenClassroom</h1>
            <h2 className="text-xl md:text-3xl text-darkgreen font-zen-medium my-4 md:my-8 border-b border-gray-300">Apprenez à programmer en C</h2>
            <p className="text-lg md:text-2xl text-justify text-darkgreen font-zen-medium">
                En vue de mes projets de développement de systèmes d'exploitation, où la maîtrise du langage C est essentielle, 
                j'ai réalisé qu'il était primordial de me préparer sérieusement. 
                La mise en œuvre de ces projets requiert une compréhension approfondie du langage C, 
                une compétence que je n'avais pas encore explorée dans mon parcours académique. 
                C'est pourquoi j'ai immédiatement pensé à suivre une formation sur OpenClassrooms. 
                Cette plateforme est pour moi une référence incontournable en matière d'apprentissage de nouveaux langages. 
                Cette démarche s'aligne parfaitement avec mes aspirations professionnelles, 
                car je suis conscient que la maîtrise d'un langage de bas niveau comme le C est un atout majeur pour tout développeur, 
                et cela jouera un rôle crucial dans mon parcours professionnel à venir.
            </p>
            <h1 className="text-2xl md:text-4xl text-darkgreen font-bold my-4 md:my-8">Preuves</h1>
            <div className="border-2 border-darkgreen rounded-3xl overflow-hidden">
                <Image className="w-full h-auto" layout="responsive" width={1494} height={75} src="/images/portfolio/c100.png" alt="c100" />
                <Image className="w-full h-auto" layout="responsive" width={1682} height={413} src="/images/portfolio/c-proof.png" alt="c-proof" />
            </div>
        </div>
    );
};

export default Page;