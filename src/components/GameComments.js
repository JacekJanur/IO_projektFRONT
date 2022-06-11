import React from 'react'
import ReactStars from 'react-stars'

const GameComments = ({data}) => {
	return (
			<div className="comment">
				<div className="comment-user">
					<p className="comment-user-name"> {data.username} </p>
					<p className="comment-user-date"> {data.date} </p>
				</div>
				<div className="comment-text">
					<p className="comment-textfield"> {data.text} </p>
					
				</div>
			</div>
	)
}

export default GameComments