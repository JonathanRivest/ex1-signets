import './Signets.scss';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SortIcon from '@material-ui/icons/Sort';


export default function Signets(props) {
    return (
        <li className="Signets">
          <div className = "sort"><SortIcon></SortIcon></div>
          <img src={'images/' + props.id + '.png'} alt={props.titre}/>
          <div className="leSignet">
            <p className="titre">{props.titre}</p>
            <p className="datemodif"><b>{props.datemodif}</b></p>
            <p><IconButton>
              <MoreVertIcon style= {{fill: "white"}}/>
              </IconButton></p>
          </div>
          
          
        </li>
      );
    
}