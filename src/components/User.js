import React from 'react'
import GameComments from './GameComments'

const User = ({data}) => {
	return (
		<>
			<h2> {data.name} comments history: </h2>
			<div className="comments-list">
					{data.get_comments.map((item: any, index: any) => {
					    return (
					    	<>
					    		<div className="comment">
									<div className="comment-user">
										<a href={"/games/" + item.game}>
											<p className="comment-user-name"> {item.gamename} </p>
										</a>
										<p className="comment-user-date"> {item.date} </p>
									</div>
									<div className="comment-text">
										<p className="comment-textfield"> {item.text} </p>
										
									</div>
								</div>
					    	</>
					    )
					})}
			</div>
		</>
	)
}

export default User