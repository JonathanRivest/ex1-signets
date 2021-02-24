import './Global.scss';
import Entete from './Entete';
import ListeSignets from './ListeSignets';

export default function Global(props) {
    return (
<div className= "Global">
    <Entete />
    <section className= "ContenuPrincipal">
    <ListeSignets />
    </section>
    <button className= "bouton">+</button>
</div>
    );
}