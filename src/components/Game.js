import React from 'react'
import PropTypes from 'prop-types';
import ReactStars from 'react-stars'
import axios from 'axios';

const Game = ({games}) => {

	let href = "https://jacekjanurbackend.azurewebsites.net/games/" + games.id + "/image";

  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') { 
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) { 
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


	const ratingChanged = async (newRating) => {
	  const response = await axios.post("https://jacekjanurbackend.azurewebsites.net/reviews/add", {"game":games.id, "token":getCookie("token"), "review":newRating}, 
      {
          headers: {
            'Content-Type': 'multipart/form-data'
          }

      });
	}

	return (
		<div className="one-game">
			
			<div className="game-block">
				
				
			
				<div className="flexbox-item flexbox-item-2"><div className="image" style={{
				    backgroundImage: `url(${href})`
				  }}></div>
				<div className="tekst"><div className="t">
						<div>
							{games.genre_name}
	                    </div>
						
					</div>
				<div className="t2"> {games.name} </div>
				<div className="stars">
				
				<ReactStars count={5} className={"star3"} size={20}  value={parseFloat(games.avg)}  onChange={ratingChanged} /> <b id="ocena2">{games.avg.toFixed(1)}</b></div>
				</div>
				</div>
			</div>
			

		</div>
	);
}

Game.propTypes = {
	games: PropTypes.any.isRequired,

}

export default Game