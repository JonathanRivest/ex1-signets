import './Signets.scss';
import IconButton from '@material-ui/core/IconButton';


export default function Signets(props) {
    return (
        <li className="Signets">
          <img src={'images/' + props.id + '.png'} alt={props.titre}/>
          <div className="leSignet">
            <p className="titre">{props.titre}</p>
            <p className="datemodif"><b>{props.datemodif}</b></p>
            <p><IconButton></IconButton></p>
          </div>
          
          
        </li>
      );
    
}