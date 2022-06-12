import React from 'react'
import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import Navbar from '../components/Navbar';
import GameBlock from '../components/GameBlock.js'


const SearchRoute = () => {
	let { str } = useParams();

	const [game, setGame] = useState();
	const [gameDownloaded, setGameDownloaded] = useState(false);
	const [noGames, setNoGames] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
		    const data = await fetch("https://jacekjanurbackend.azurewebsites.net/games/"+str)
		    const json = await data.json();
    		setGame(json);
	      	 (json[0] != undefined) ? setGameDownloaded(true) : setNoGames(true) // eslint-disable-line 
		  }
	  	fetchData()
     }, );


	return (
		<>
		<Navbar/>
		<div>
			<h1>Games with {str}:</h1>
		      {gameDownloaded && game.map((item: any, index: any) => {
			    return (
			    	<div >
							<GameBlock games = {item}/>
			    	</div>
			    )
			})}
		      {noGames && <div className="no-games">No games found</div>}
		</div>
		</>
	)
}

export default SearchRoute