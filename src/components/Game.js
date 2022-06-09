import React from 'react'

import ReactStars from 'react-stars'


class Game extends React.Component {
	

	constructor(props){
		super(props);
		this.state={
			items:[],
			
			DetaisLoaded:false,
			DetaisLoaded2:false
			
		}
	}
	
	componentDidMount() {
        fetch("https://jacekjanurbackend.azurewebsites.net/games")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
					
                    items: json,
                    DataisLoaded: true,
					
                });
            })
		fetch("https://jacekjanurbackend.azurewebsites.net/genres")
		.then((res) => res.json())
		.then((json) => {
			this.setState({
				genre: json,
				DataisLoaded2: true,
				
			});
		})
    }
	
	
    render() {
		
        const { DataisLoaded, items } = this.state;
		const { DataisLoaded2, genre } = this.state;
		
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
		 if (!DataisLoaded2) return <div>
		 <h1> Pleses wait some time.... </h1> </div> ;
		 
		
	
			
	
	
	return (
		
		<div className="game">
			
			<div className="flexbox-item flexbox-item-1">
				<h4>Most Recent Games:</h4>
			</div>
			<div className="flexbox-item flexbox-item-2"><div className="image2" style={{backgroundImage:'url("https://jacekjanurbackend.azurewebsites.net/games/4/image")' }}></div>
			<div className="tekst"><div className="t">
					<div>
						{ genre[1].fields.name}
                    </div>
					
				</div>
			<div className="t2"> {items[1].name} </div>
			<div className="star">
			
			<ReactStars count={5} value={parseInt(items[1].avg)} size={20}  /> <b id="ocena">{items[1].avg}</b></div>
			</div>
			</div>
			
			<div className="flexbox-item flexbox-item-3">
			<div className="image3" style={{backgroundImage:'url("https://jacekjanurbackend.azurewebsites.net/games/1/image")',backgroundSize:'cover'}}></div><div className="tekst"><div className="t">
                
			{ genre[0].fields.name}
					
                   
                    
					</div>
			<div className="t2">{ items[0].name}</div> 
			<div className="star"><ReactStars count={5} size={20} value={parseFloat(items[0].avg)} /> <b id="ocena">{items[0].avg}</b></div>
			</div>
			</div>
			
			
			
		</div>
	);
	}
}

export default Game