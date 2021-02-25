import './Entete.scss';
import Avatar from '@material-ui/core/Avatar';

export default function Entete(props) {
return (
<header className="Entete">
    <ul>
        <li>Signets (beta)</li>
    </ul>
    
    <ul>
        <li>Utilisateur</li>
        <li><Avatar /></li>
    </ul>
</header>
);
}