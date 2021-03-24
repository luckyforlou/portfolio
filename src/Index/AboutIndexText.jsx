import { Link } from 'react-router-dom';
import './AboutIndexText.scss';


export default function AboutIndexText(){
    return(
        <div className="aboutTxt">
            
            <h2>Sabrina Ales</h2>
            <p>Je suis une illustratrice et une artiste de concepts de Montréal, Canada.</p>
           <p>Je travaille en tant qu'artiste indépendante depuis plus de 5 ans maintenant.
            Mes sujets préférés sont les environnements et les arrière-plans, mais j'aime aussi créer des personnages et des accessoires.</p>
            <Link to="/about">En savoir plus</Link>
            
        </div>
    );
}