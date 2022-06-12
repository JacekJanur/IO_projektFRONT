import React from 'react'


const User = ({data}) => {
	return (
		<>
		<div data-testid="user-profile" className="com-bg">
			<h2 className="h2-user"> {data.name} comments history: </h2>
			<div className="comments-list">
					{data.get_comments.map((item: any, index: any) => {
					    return (
					    		<div key={index} className="comment-2">
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
					    )
					})}
			</div>
		</div>
		</>
	)
}

export default User