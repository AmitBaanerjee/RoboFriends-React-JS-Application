import React from 'react';
const SearchBar=({searchfield,input})=>{
	return(
		<div className="pa2">
		<input className="bg-lightest-blue b--green ba" 
		type="Search"
		placeholder="search robots!!"
		onChange={input}
		/>
		</div>
		);
}
export default SearchBar ;