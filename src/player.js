import { CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
function Player({joueur}) {
  return  (<CardGroup style={{ width: '18rem', color:'red' }}>
      <Card.Body>
        <Card.Title> Presentation du joueurs </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Données du joueurs</Card.Subtitle>
        <Card.Text> Id :  {joueur.Idjoueurs} </Card.Text>
        <Card.Text> Nom :{joueur.nom}</Card.Text>
        <Card.Text> Equipe : {joueur.equipe} </Card.Text>
        <Card.Text> Nationalité : {joueur.nationalité}  </Card.Text>
        <Card.Text> Numéro : {joueur.numero} </Card.Text>

      </Card.Body>
    </CardGroup>)
  ;
}

export default Player;