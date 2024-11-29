import Image from "next/image";

const Page = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full md:w-3/4 mx-auto bg-softgrey rounded-3xl p-4 md:p-10">
            <h1 className="text-2xl md:text-4xl text-darkgreen font-bold">Formation OpenClassroom</h1>
            <h2 className="text-xl md:text-3xl text-darkgreen font-zen-medium my-4 md:my-8 border-b border-gray-300">Construisez un site web à l’aide du framework Symfony 5</h2>
            <p className="text-lg md:text-2xl text-justify text-darkgreen font-zen-medium">
                En prévision de mon stage de fin d'études en informatique, j'ai réalisé que je devais me préparer sérieusement. 
                Ce stage allait nécessiter que je maîtrise un nouveau langage de programmation, le PHP, plus spécifiquement le framework Symfony. 
                La première chose qui m'est venue à l'esprit pour acquérir ces compétences était une formation sur OpenClassrooms. 
                C'est un peu ma référence quand il s'agit d'apprendre de nouveaux langages. 
                Cette décision est totalement en phase avec mes aspirations professionnelles, car je sais que le PHP, et surtout Symfony, 
                seront des incontournables dans mon futur métier.
            </p>
            <h1 className="text-2xl md:text-4xl text-darkgreen font-bold my-4 md:my-8">Preuves</h1>
            <div className="border-2 border-darkgreen rounded-3xl overflow-hidden">
                <Image className="w-full h-auto" layout="responsive" width={1494} height={75} src="/images/portfolio/symfony100.png" alt="symfony100" />
                <Image className="w-full h-auto" layout="responsive" width={1682} height={413} src="/images/portfolio/symfony-proof.png" alt="symfony-proof" />
            </div>
        </div>
    );
};

export default Page;