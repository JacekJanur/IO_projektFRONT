import React from 'react'
import Game from './Game.js'
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
		
			<div className="games-cont">
		      {gamesDownloaded && games.map((item: any, index: any) => {
			    return (
			    	<a href={"games/" + item.id}>
				    	<div >
							<Game games = {item}/>
				    	</div>
				    </a>
			    )
			})}
			</div>
			
		
	)
}

export default LeftColumn