import React from 'react'
import Game from './Game';
import CommentsForm from './Comments';

const OneGame = ({game}) => {
	return (
		<div className="cont">
			<Game games={game}/>
			<CommentsForm/>
		</div>
	)
}

export default OneGame