// Data layout for available movies here, either will link to separate movie
// pages later or create dropdown or some other interaction to see details
// with button prompts




import React from 'react';
import '../Styles/ListMovies.css'

const ListMovies = (props) => {
let {movieData} = props
let list = movieData.map(movie => {
    // console.log(movie)
    return (
        <div key={movie._id} className='movie-listing'>
            <h3 className='title'>{movie.title}</h3>
            <p className='released'>{movie.release_date}</p>
            <p className='tagline'>{movie.tagline}</p>
            <button>More Details</button>
        </div>
    )

});
    return (
<div>
    {/* <p>Hello</p> */}
    {list}
</div>
    )
};

export default ListMovies;