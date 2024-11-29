import React from 'react';
import Image from "next/image";

const Page = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full md:w-3/4 mx-auto bg-softgrey rounded-3xl p-4 md:p-10">
            <h1 className="text-2xl md:text-4xl text-darkgreen font-bold">Job étudiant</h1>
            <h2 className="text-xl md:text-3xl text-darkgreen font-zen-medium my-4 md:my-8 border-b border-gray-300">Shooting photo pour une bijouterie</h2>
            <p className="text-lg md:text-2xl text-justify text-darkgreen font-zen-medium">
                Durant mon expérience de travail étudiant en tant que photographe pour la bijouterie Claerhout,
                j'ai eu l'opportunité de fusionner ma passion naissante pour la photographie avec le monde fascinant de la haute joaillerie.
                Claerhout, établie depuis 1902 au cœur de la grand-place de Mouscron, en Belgique,
                est reconnue pour sa sélection exquise de montres et bijoux parmi les marques les plus prestigieuses telles que Messika, Dinh Van, Roberto Coin et bien d'autres encore.
            </p>
            <p className="text-lg md:text-2xl text-justify text-darkgreen mt-4 font-zen-medium">
                En tant que photographe au sein de cette enseigne, j'ai été amené à participer à plusieurs journées de shooting dans divers lieux,
                chacun présentant ses propres défis en termes de lumière, de composition et d'esthétique. J'ai dû prendre en charge les opérations comme un véritable professionnel,
                guidant les mannequins dans la recherche des poses idéales, surveillant attentivement l'exposition et la qualité de la lumière,
                et veillant à ce que chaque cliché reflète l'essence même des bijoux mis en valeur.
            </p>
            <p className="text-lg md:text-2xl text-justify text-darkgreen mt-4 font-zen-medium">
                Cette expérience m'a permis de développer non seulement mes compétences techniques en matière de photographie,
                mais aussi ma capacité à travailler sous pression et à m'adapter à des environnements changeants.
                Au fil du temps, j'ai gagné en confiance et en assurance, me familiarisant avec les subtilités de la photographie de haute qualité,
                tout en développant mon propre style créatif.
            </p>
            <p className="text-lg md:text-2xl text-justify text-darkgreen mt-4 font-zen-medium">
                Ce travail étudiant m'a également offert une opportunité précieuse de mettre en pratique mes aspirations professionnelles.
                En visant à faire de la photographie un second métier, cette expérience chez Claerhout m'a permis d'explorer le monde de la haute joaillerie,
                d'affiner mes compétences en photographie commerciale et de construire des relations professionnelles dans le domaine de la bijouterie de luxe.
                À travers cette expérience, j'ai pu constater comment ma passion pour la photographie peut se conjuguer harmonieusement avec mes objectifs professionnels,
                ouvrant ainsi de nouvelles perspectives pour mon avenir.
            </p>
            <p className="text-lg md:text-2xl text-justify text-darkgreen mt-4 font-zen-medium">
                Pour en savoir plus sur la bijouterie Claerhout, visitez leur site web&nbsp;
                <a href="https://www.bijouterie-mouscron.com/" target="_blank" rel="noopener noreferrer" className="text-lightgreen hover:text-green-800">
                    www.bijouterie-mouscron.com
                </a>&nbsp;et découvrez leur travail sur Instagram&nbsp;
                <a href="https://www.instagram.com/claerhout_joaillier/" target="_blank" rel="noopener noreferrer" className="text-lightgreen hover:text-green-800">
                    claerhout_joaillier
                </a>.
            </p>
            <h1 className="text-2xl md:text-4xl text-darkgreen font-bold my-4 md:my-8">Preuves</h1>
            <div className="border-2 border-darkgreen px-8 py-8 rounded-3xl overflow-hidden">
                <div className="flex flex-col-reverse md:flex-row justify-between items-center space-y-4 md:space-x-8 my-4 md:my-8">
                    <p className="text-darkgreen text-xl text-center font-zen-bold">
                        Publication Instagram de la bijouterie<br />
                        qui mentionne mon nom dans l'encadré rouge.<br />
                        <a href="https://www.instagram.com/p/C6yZAFMCR0e/?img_index=1" target="_blank" rel="noopener noreferrer" className="text-lightgreen hover:text-green-800">
                            Lien de la publication
                        </a>
                    </p>
                    <Image src="/images/portfolio/photo-proof.png" alt="Instagram Post" width={500} height={300} />
                </div>
                <hr className="border-darkgreen border-t-2 my-4 md:my-8" />
                <h3 className="text-darkgreen text-2xl md:text-3xl font-bold my-4 md:my-8 text-center">Sélection de photo de mon dernier shooting pour la bijouterie</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div><Image src="/images/portfolio/photos-carousel/bij-2.jpg" alt="Image 1" width={350} height={225} /></div>
                    <div><Image src="/images/portfolio/photos-carousel/bij-3.jpg" alt="Image 2" width={350} height={225} /></div>
                    <div><Image src="/images/portfolio/photos-carousel/bij-6.jpg" alt="Image 3" width={350} height={225} /></div>
                    <div><Image src="/images/portfolio/photos-carousel/bij-10.jpg" alt="Image 4" width={350} height={225} /></div>
                    <div><Image src="/images/portfolio/photos-carousel/bij-16.jpg" alt="Image 5" width={350} height={225} /></div>
                    <div><Image src="/images/portfolio/photos-carousel/bij-23.jpg" alt="Image 6" width={350} height={225} /></div>
                    <div><Image src="/images/portfolio/photos-carousel/bij-34.jpg" alt="Image 7" width={350} height={225} /></div>
                    <div><Image src="/images/portfolio/photos-carousel/bij-12.jpg" alt="Image 8" width={350} height={225} /></div>
                    <div><Image src="/images/portfolio/photos-carousel/bij-26.jpg" alt="Image 9" width={350} height={225} /></div>
                </div>
            </div>
        </div>
    );
};

export default Page;