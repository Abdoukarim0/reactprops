




function Player({
  nom = 'inconnu',
  equipe = 'inconnu',
  nationalité = 'inconnu',
  numero = 'inconnu',
  
}) {



  return  (

  
      <div className="player">
        {/* <Card.Title> Presentation du joueurs </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Données du joueurs</Card.Subtitle> */}
       
        <h4> Nom :{nom}</h4>
        <h4> Equipe : {equipe} </h4>
        <h4> Nationalité : {nationalité}  </h4>
        <h4> Numéro : {numero} </h4>

      </div>
    )
  ;
}

export default Player;