import './ListeSignets.scss';
import Signets from './Signets';
import tabSignets from './data/signets.json';

export default function ListeSignets(props) {  
    return (
      <div className="ListeSignets">
        <ul className="ul-signets">
          {
            tabSignets.map(unSignet => <Signets key={unSignet.id} id={unSignet.id} titre={unSignet.titre} couleur={unSignet.couleur} datemodif={unSignet.datemodif} />)
          }
        </ul>
      </div>
    );
    }