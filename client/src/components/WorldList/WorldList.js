import React from "react";
import World from "./../Worlds/Worlds";

import "./styles.css";

class WorldList extends React.Component {

	render() {

		const { worlds } = this.props;

		return(
			  <div className="outline">	
				  <ul className="worldList">	        
		          {worlds.map(world => (
		            <World
		              key={world.name} 
		              world={world}
		            />
		          ))}		     
		          </ul>   
		      </div>
			);
	}
}

export default WorldList;