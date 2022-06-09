import React from 'react'
import PropTypes from 'prop-types';
import ReactStars from 'react-stars'


const GameBlock = ({games}) => {

	let href = "https://jacekjanurbackend.azurewebsites.net/games/" + games.id + "/image";


	return (
		
		<div className="game-block">
			
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
			
			<ReactStars count={5} value={parseInt(games.avg)} size={20}/> <b id="ocena">{games.avg}</b></div>
			</div>
			</div>
			
			
			
			
		</div>
	);
}

GameBlock.propTypes = {
	games: PropTypes.any.isRequired,

}

export default GameBlock