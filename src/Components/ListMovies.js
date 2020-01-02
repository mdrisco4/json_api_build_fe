import React from 'react';
import '../Styles/ListMovies.css'

const ListMovies = (props) => {
let {movieData} = props
let list = movieData.map(movie => {
    // console.log(movie)
    return (
        <div key={movie._id}>
            <p className='title'>{movie.title}</p>
            <p className='released'>{movie.release_date}</p>
            <p className='tagline'>{movie.tagline}</p>
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