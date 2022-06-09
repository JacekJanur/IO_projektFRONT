import React from 'react'
import PropTypes from 'prop-types';
import ReactStars from 'react-stars'
import axios from 'axios';

const Game = ({games}) => {

	let href = "https://jacekjanurbackend.azurewebsites.net/games/" + games.id + "/image";

	const ratingChanged = async (newRating) => {
	  const response = await axios.post('http://localhost:8000/reviews/add', {"game":games.id, "token":"pbkdf2_sha256$320000$nemYm6SDUkGQgjEOkTQNN3$fOSwc1rwhnl0brukxO+mTQ9a8z+wc490QAYOGxXLx/U=", "review":newRating},
      {
          headers: {
            'Content-Type': 'multipart/form-data'
          }

      });
	}

	return (
		<div className="one-game">
			<div className="game">
				
				<div className="flexbox-item flexbox-item-1">
					<h1>Most Recent Games: </h1>
				</div>
				<div className="flexbox-item flexbox-item-2"><div className="image2" style={{
				    backgroundImage: `url(${href})`
				  }}></div>
				<div className="tekst"><div className="t">
						<div>
							{games.genre_name}
	                    </div>
						
					</div>
				<div className="t2"> {games.name} </div>
				<div className="star">
				
				<ReactStars count={5} value={parseInt(games.avg)} size={20} onChange={ratingChanged} /> <b id="ocena">{games.avg}</b></div>
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