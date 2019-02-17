import React from 'react';
import Card from './Card.js';
const CardList=({robot})=>{
	return(
		<div>{
		robot.map((item,i)=>{
			return (
				<Card
				 key={item.id}
				 id={item.id}
				 name={item.name}
				 email={item.email}
				 />
			);
		})
	}
		</div>
	);
}
export default CardList;

