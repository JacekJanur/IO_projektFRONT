import React from 'react'
import PropTypes from 'prop-types';
import ReactStars from 'react-stars'


const GameBlock = ({games}) => {

	let href = "https://jacekjanurbackend.azurewebsites.net/games/" + games.id + "/image";


	return (
		
		<div className="game-block">
			<a href={"games/" + games.id}>
				<img src={`${href}`}/>
				<div className="tekst">
					<div className="t">
						<p className="game-name"> {games.name} </p>
						<p className="game-genre">
							{games.genre_name}
	                    </p>
						
					</div>
					<div className="star">
					
						<ReactStars count={5} className={"star2"} value={parseInt(games.avg)} size={20} /> 

						<b id="ocena">{games.avg}</b>
					</div>
				</div>
			</a>
		</div>
	);
}

GameBlock.propTypes = {
	games: PropTypes.any.isRequired,

}

export default GameBlock