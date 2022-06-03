import React from 'react'

const Game = () => {
	return (
		<div className="game">
			
			<div className="flexbox-item flexbox-item-1">
				<h4>Most Recent Games:</h4>
			</div>
			<div className="flexbox-item flexbox-item-2"><div className="image2"></div>
			<div className="tekst"><div className="t">RPG</div>
			<div className="t2">Assassin Creed Odyssey</div>
			<div className="star">★ ★ ★ ★ ★  <b id="ocena">5.0</b></div>
			</div>
			</div>
			
			<div className="flexbox-item flexbox-item-3">
			<div className="image3"></div><div className="tekst"><div className="t">FPS</div>
			<div className="t2">DOOM</div> 
			<div className="star">★ ★ ★ ★ ☆  <b id="ocena">4.0</b></div>
			</div>
			</div>
			
			<div className="axis main-axis"></div>
			<div className="axis cross-axis"></div>
			
		</div>
	)
}

export default Game