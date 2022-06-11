import React from 'react'
import Game from './Game';
import GameComments from './GameComments'
import GameCommentsForm from './GameCommentsForm'

const OneGame = ({game}) => {

	let href = "https://jacekjanurbackend.azurewebsites.net/games/" + game.id + "/image";

	return (
		<>
		< div className="one-game-cont">
			
			<img className="one-game-img" src={`${href}`}/>
			
			<div className="one-game-game">

				<h2> {game.name} </h2>
				<p> {game.description} </p>

				
			</div>

		</div>
		<div className="one-game-comment-cont">

		<GameCommentsForm game_id = {game.id} />
				<div className="comments-list">
					{game.comments.map((item: any, index: any) => {
					    return (
					    	<GameComments data={item}/>
					    )
					})}
			</div>
		</div>
		</>
	)
}

export default OneGame