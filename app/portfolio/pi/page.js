import React from 'react';

const Page = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full md:w-3/4 mx-auto bg-softgrey rounded-3xl p-4 md:p-10">
            <h1 className="text-2xl md:text-4xl text-darkgreen font-bold">Projet personnel</h1>
            <h2 className="text-xl md:text-3xl text-darkgreen font-zen-medium my-4 md:my-8 border-b border-gray-300">Mise en place d'un serveur de cloud personnel sur Raspberry Pi</h2>
            <p className="text-lg md:text-2xl text-justify text-darkgreen font-zen-medium">
                Au cours de ma 3ième année, j'ai entrepris la mise en place d'un serveur cloud personnel sur mon Raspberry Pi. 
                Pour cela, j'ai opté pour Nextcloud, une solution de stockage cloud offrant une interface utilisateur conviviale, similaire à OneDrive. 
                Mon choix s'est porté sur Nextcloud en raison de sa facilité de déploiement dans un conteneur Docker.
            </p>
            <p className="text-lg md:text-2xl text-justify text-darkgreen mt-4 font-zen-medium">
                Grâce à des tutoriels disponibles sur YouTube et un peu de débrouillardise, j'ai réussi à configurer mon Raspberry Pi avec Docker, 
                ainsi que les images Nextcloud et PostgreSQL nécessaires. Le résultat ? Mon propre cloud, hébergé localement sur mon Pi, 
                accessible depuis n'importe quel appareil connecté à mon réseau domestique via l'adresse IP de mon Pi et un navigateur web.
            </p>
            <p className="text-lg md:text-2xl text-justify text-darkgreen mt-4 font-zen-medium">
                Cette expérience m'a permis de développer mes compétences en administration système et en virtualisation, 
                tout en acquérant une compréhension pratique des technologies cloud et des conteneurs. 
                De plus, elle illustre ma capacité à résoudre des problèmes de manière autonome et à mettre en œuvre des solutions techniques efficaces.
            </p>
            <p className="text-lg md:text-2xl text-justify text-darkgreen mt-4 font-zen-medium">
                Cette réalisation s'inscrit parfaitement dans mon projet professionnel axé sur l'informatique. 
                En effet, en tant qu'aspirant professionnel du domaine informatique, 
                la mise en place et la gestion de solutions technologiques innovantes comme un serveur cloud personnel démontrent ma capacité 
                à relever des défis techniques et à tirer parti des dernières avancées technologiques.
            </p>
            <h1 className="text-2xl md:text-4xl text-darkgreen font-bold my-4 md:my-8">Preuves</h1>
            <div className="flex border-2 border-darkgreen px-8 py-8 rounded-3xl overflow-hidden">
                <iframe
                    width={600} height={350}
                    src="https://www.youtube.com/embed/00ypdGZ9X5M?si=snRzYQk8C7X4Vi1m"
                    title="Preuve de réalisation de mon cloud personnel Nextcloud sur RaspberryPi"
                    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    eferrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
            </div>
            <h2 className="text-xl md:text-3xl text-darkgreen font-zen-medium my-8 border-b border-gray-300">Amélioration future</h2>
            <p className="text-lg md:text-2xl text-justify text-darkgreen font-zen-medium">
                J'ai pensé à des améliorations pour mon activité, l'une des pistes que j'envisage est la mise en place d'un VPN. 
                Cette solution permettrait d'accéder à mon cloud depuis n'importe où, tant qu'une connexion Internet est disponible.
            </p>
            <p className="text-lg md:text-2xl text-justify text-darkgreen mt-4 font-zen-medium">
                L'intégration d'un VPN offrirait une couche supplémentaire de sécurité en chiffrant les communications entre mon appareil et mon serveur cloud.
                De plus, cela me permettrait de contourner les restrictions de réseau et de protéger ma vie privée en ligne lorsque j'accède à mes données à distance.
            </p>
            <p className="text-lg md:text-2xl text-justify text-darkgreen mt-4 font-zen-medium">
                La configuration d'un VPN sur mon Raspberry Pi nécessiterait la mise en place d'un logiciel serveur VPN tel que OpenVPN ou WireGuard, 
                ainsi que la configuration appropriée du routeur pour rediriger le trafic VPN vers mon serveur. 
                Une fois mis en place, cette amélioration me permettrait de profiter pleinement des fonctionnalités de mon cloud personnel, 
                quel que soit l'endroit où je me trouve, tout en garantissant la sécurité et la confidentialité de mes données.
            </p>
        </div>
    );
};

export default Page;