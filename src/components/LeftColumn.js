import React from 'react'
import GameBlock from './GameBlock.js'
import { useState, useEffect } from 'react';

const LeftColumn = () => {
	const [games, setGames] = useState({});
	const [gamesDownloaded, setGamesDownloaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
		    const data = await fetch("https://jacekjanurbackend.azurewebsites.net/games")
		    const json = await data.json();
    		setGames(json);
	      	setGamesDownloaded(true);
		  }

	  	fetchData()
     }, []);




	return (
		
			<div>
			<h1>Most recent games:</h1>
		      {gamesDownloaded && games.map((item: any, index: any) => {
			    return (
			    	<div >
							<GameBlock games = {item}/>
			    	</div>
			    )
			})}
			</div>
			
		
	)
}

export default LeftColumn