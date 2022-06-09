import React from 'react'
import { Link } from "react-router-dom"
const RightColumn = () => {
	return (
		<div className="content-right">
			<ul>
				<li ><Link to="">Top Rating</Link></li>
				<li><Link to="">Best FPS </Link></li>
				<li><Link to="">Best Strategy </Link></li>
				<li><Link to="">Best Action </Link></li>
				<li><Link to="">Best Survival </Link></li>
				<li><Link to="">Best Adventure </Link></li>
				<li><Link to="">Best RPG </Link></li>
			</ul>
		</div>
	)
}

export default RightColumn