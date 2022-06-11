import React from 'react'
import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import NavGame from '../components/NavGame';
import Content from '../components/Content';
import Footer from '../components/Footer';
import OneGame from '../components/OneGame';



const GameRoute = () => {
	let { id } = useParams();

	const [game, setGame] = useState();
	const [gameDownloaded, setGameDownloaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
		    const data = await fetch("https://jacekjanurbackend.azurewebsites.net/games/"+id)
		    const json = await data.json();
    		setGame(json);
	      	setGameDownloaded(true);
		  }

	  	fetchData()
     }, []);


	return (
		<div className="grid-container3">
			
	      <NavGame game={game}/>
	      {gameDownloaded ? (
	        <OneGame game = {game}/>
	      ) : (
	        <div></div>
	      )}
	      <Footer/>
	    </div>
	)
}

export default GameRoute