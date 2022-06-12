import React from 'react'


const GameComments = ({data}) => {
	return (
			<div className="comment">
				<div className="comment-user">
					<a href={"/user/" + data.user}>
						<p className="comment-user-name"> {data.username} </p>
					</a>
					<p className="comment-user-date"> {data.date} </p>
				</div>
				<div className="comment-text">
					<p className="comment-textfield"> {data.text} </p>
					
				</div>
			</div>
	)
}

export default GameComments