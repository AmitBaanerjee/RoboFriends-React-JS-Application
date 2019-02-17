import React from 'react';
const Card=({id,name,email})=>{
	return(
		<div className="tc bg-light-green br3 pa3 ma2 shadow-5 bw2 grow dib">
		<img src={`https://robohash.org/${id}?size=200x200`} alt="robo"/>
		<h1>{name}</h1>
		<p>{email}</p>
		</div>
		);
}
export default Card;