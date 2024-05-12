import { Button } from '../components/utils';

function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center">
      <table className="table-auto bg-softgrey rounded-3xl sm:w-3/4 w-11/12 mt-4 overflow-x-auto">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="px-4 py-2 text-darkgreen font-zen-bold">#</th>
            <th className="px-4 py-2 text-darkgreen font-zen-bold">Titre</th>
            <th className="px-4 py-2 text-darkgreen font-zen-bold">Thème</th>
            <th className="px-4 py-2 text-darkgreen font-zen-bold">Heures prestées</th>
            <th className="px-4 py-2 text-darkgreen font-zen-bold">Heures validées</th>
            <th className="px-4 py-2 text-darkgreen font-zen-bold">Détails</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center items-center justify-center border-b border-gray-300">
            <td className="px-4 py-2 text-darkgreen font-zen-medium">1</td>
            <td className="px-4 py-2 text-darkgreen font-zen-medium">Construire un site web Symfony 5</td>
            <td className="px-4 py-2 text-darkgreen font-zen-medium">Formation OpenClassroom</td>
            <td className="px-4 py-2 text-darkgreen font-zen-medium">22</td>
            <td className="px-4 py-2 text-darkgreen font-zen-medium">10</td>
            <td>
              <Button href="/portfolio/symfony">Détails</Button>
            </td>
          </tr>
          <tr className="text-center items-center justify-center border-b border-gray-300">
            <td className="px-4 py-2 text-darkgreen font-zen-medium">2</td>
            <td className="px-4 py-2 text-darkgreen font-zen-medium">Apprenez à programmer en C</td>
            <td className="px-4 py-2 text-darkgreen font-zen-medium">Formation OpenClassroom</td>
            <td className="px-4 py-2 text-darkgreen font-zen-medium">13</td>
            <td className="px-4 py-2 text-darkgreen font-zen-medium">10</td>
            <td>
              <Button href="/portfolio/C">Détails</Button>
            </td>
          </tr>
          <tr className="text-center items-center justify-center border-b border-gray-300">
            <td className="px-4 py-2 text-darkgreen font-zen-medium">3</td>
            <td className="px-4 py-2 text-darkgreen font-zen-medium">Shooting photo pour une bijouterie</td>
            <td className="px-4 py-2 text-darkgreen font-zen-medium">Student job</td>
            <td className="px-4 py-2 text-darkgreen font-zen-medium">15</td>
            <td className="px-4 py-2 text-darkgreen font-zen-medium">10</td>
            <td>
              <Button href="/portfolio/photo">Détails</Button>
            </td>
          </tr>
          <tr className="text-center items-center justify-center border-b border-gray-300">
            <td className="px-4 py-2 text-darkgreen font-zen-medium">4</td>
            <td className="px-4 py-2 text-darkgreen font-zen-medium">Serveur cloud perso sur raspberryPi</td>
            <td className="px-4 py-2 text-darkgreen font-zen-medium">Projet perso</td>
            <td className="px-4 py-2 text-darkgreen font-zen-medium">22</td>
            <td className="px-4 py-2 text-darkgreen font-zen-medium">10</td>
            <td>
              <Button href="/portfolio/pi">Détails</Button>
            </td>
          </tr>
          <tr className="text-center items-center justify-center border-b border-gray-300">
            <td className="px-4 py-2 text-darkgreen font-zen-medium">5</td>
            <td className="px-4 py-2 text-darkgreen font-zen-medium">[A compléter]</td>
            <td className="px-4 py-2 text-darkgreen font-zen-medium">[A compléter]</td>
            <td className="px-4 py-2 text-darkgreen font-zen-medium">[A compléter]</td>
            <td className="px-4 py-2 text-darkgreen font-zen-medium">[A compléter]</td>
            <td>
              <Button href="/portfolio/">Détails</Button>
            </td>
          </tr>
          <tr className="text-center items-center justify-center">
            <td className="px-4 py-2 text-darkgreen font-zen-medium">6</td>
            <td className="px-4 py-2 text-darkgreen font-zen-medium">[A compléter]</td>
            <td className="px-4 py-2 text-darkgreen font-zen-medium">[A compléter]</td>
            <td className="px-4 py-2 text-darkgreen font-zen-medium">[A compléter]</td>
            <td className="px-4 py-2 text-darkgreen font-zen-medium">[A compléter]</td>
            <td>
              <Button href="/portfolio/">Détails</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Portfolio;