import './Signets.scss';


export default function Signets(props) {
    return (
        <li className="Signets">
          <img src={'images/' + props.id + '.png'} alt={props.titre}/>
          <div className="leSignet">
            <p className="titre">{props.titre}</p>
            <p className="datemodif"><b>{props.datemodif}</b></p>
          </div>
        </li>
      );
    
}