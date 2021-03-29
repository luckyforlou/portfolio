import "./About.scss";
import AlesExe from "../media/art/Ales.png";
export default function About() {
  return (
    <div className="intro flex flex-col">
      <img src={AlesExe} alt="Portrait de Sabrina Ales" />
      <div className="fullAbout">
        <h2 className="text-4xl">Bienvenue!</h2>
        <h3 className="text-2xl">
          Je suis Sabrina Ales, une illustratrice et une artiste de concepts de
          Montréal, Canada.
        </h3>
      </div>
      <div className="moreAbout">
        <p>
          Finissante en techniques d'intégration multimédia et précédemment
          graduée en arts plastiques, je suis une passionnée de l'art digitale
          dans toutes ses formes! Bien que je me spécialise en illustration,
          j'adore tout autant le design, l'animation et la modélisation 3D.
        </p>{" "}
        <p>
          Je souhaite travailler dans le domaine du Jeu vidéo, car c'est une
          industrie stimulante et dynamique qui a le pouvoir de donner des
          expériences mémorables pour des millions de joueurs.
        </p>
      </div>
    </div>
  );
}
