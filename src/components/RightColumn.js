import React from 'react'
import { Link } from "react-router-dom";
const RightColumn = () => {
	return (
		<div className="content-right">
			<ul>
				<li ><Link to="">Top Rating</Link></li>
				<li><Link to="">Best FPS Game</Link></li>
				<li><Link to="">Best Strategy Game</Link></li>
				<li><Link to="">Best Action Game</Link></li>
				<li><Link to="">Best Survival Game</Link></li>
				<li><Link to="">Best Adventure Game</Link></li>
				<li><Link to="">Best RPG Game</Link></li>
			</ul>
		</div>
	)
}

export default RightColumn