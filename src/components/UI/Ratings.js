import React from 'react';
import StarIcon from './SVG';


const ratings = props => {
    let {ratings} = props;
    let stars = [];
    for(let i = 0; i < 5; i++){
        stars.push(<StarIcon key={i} color={ratings > 0 ? 'steelblue' : 'grey'}/>);
        ratings--;
        }
    return <p style={{margin: 0}}>{stars}</p>
}

export default ratings;
