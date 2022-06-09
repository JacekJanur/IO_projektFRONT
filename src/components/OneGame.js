import React from 'react'
import Game from './Game';
import GameComments from './GameComments'
import GameCommentsForm from './GameCommentsForm'

const OneGame = ({game}) => {
	return (
		<div className="cont">
			<Game games={game}/>
			
			<div>

				<GameCommentsForm game_id = {game.id} />

				{game.comments.map((item: any, index: any) => {
				    return (
				    	<GameComments data={item}/>
				    )
				})}
			</div>

		</div>
	)
}

export default OneGame