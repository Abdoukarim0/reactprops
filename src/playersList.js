import Player from './player.js'
import joueurs from './players.js'

function PlayerList(){

    return(
        <>
        
         <div>
      {joueurs.map((joueurs) => (
        <Player key={joueurs.Idjoueur} joueur={joueurs} />
      ))}
    </div>
        
        
        </>
    )
}
export default PlayerList;