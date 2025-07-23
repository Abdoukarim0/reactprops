import Player from './player.js'
import joueurs from './players.js'

function PlayerList(){
 console.log(joueurs )
    return(

     
      
      <div>
      {joueurs.map((joueur, index) => (
        <Player key={index} {...joueur} />
      ))}
    </div>
        
        
         
    )
}
export default PlayerList;