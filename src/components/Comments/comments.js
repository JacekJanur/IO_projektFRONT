import React from 'react'

const Game = () => {
	return (
		<div className="game">
			
			<div class="flexbox-item flexbox-item-1">
				<h4>Most Recent Games:</h4>
			</div>
			<div class="flexbox-item flexbox-item-2"><image2></image2>
			<div class="tekst"><div class="t">RPG</div>
			<div class="t2">Assassin Creed Odyssey</div>
			<div class="star">★ ★ ★ ★ ★  <b id="ocena">5.0</b></div>
			</div>
			</div>
			
			<div class="flexbox-item flexbox-item-3">
			<image3></image3><div class="tekst"><div class="t">FPS</div>
			<div class="t2">DOOM</div> 
			<div class="star">★ ★ ★ ★ ☆  <b id="ocena">4.0</b></div>
			</div>
			</div>
			
			<div class="axis main-axis"></div>
			<div class="axis cross-axis"></div>
			
		</div>
	)
}

export default Game