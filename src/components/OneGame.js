import React from 'react'
import Game from './Game';
import GameComments from './GameComments'
import GameCommentsForm from './GameCommentsForm'
import ReactStars from 'react-stars';
import axios from 'axios';

const OneGame = ({game}) => {
	const ratingChanged = async (newRating) => {
		const response = await axios.post("https://jacekjanurbackend.azurewebsites.net/reviews/add", {"game":game.id, "token":"pbkdf2_sha256$320000$nemYm6SDUkGQgjEOkTQNN3$fOSwc1rwhnl0brukxO+mTQ9a8z+wc490QAYOGxXLx/U=", "review":newRating},
		{
			headers: {
			  'Content-Type': 'multipart/form-data'
			}
  
		});
		window.location.reload(false);
	  }
	 
		
	  


	

	let href = "https://jacekjanurbackend.azurewebsites.net/games/" + game.id + "/image";

	return (
		<>
		< div className="one-game-cont">
			
			<img className="one-game-img" src={`${href}`}/>
			
			<div className="one-game-game">

				<h2> {game.name} </h2>
				
				<p> {game.description} </p>
				<p className="stars"><ReactStars count={5} className={"star2"} value={parseFloat(game.avg)} onChange={ratingChanged} half={true} size={20} /> </p>
				<b className="ocena">{game.avg.toFixed(1)}</b>
				
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