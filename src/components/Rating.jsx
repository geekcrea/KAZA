/* eslint-disable react/prop-types */
import emptyStar from '../assets/images/emptyStar.svg';
import fullStar from '../assets/images/fullStar.svg';
import { useState, useEffect } from 'react';
import '../../style/Rating.scss';
const Rating = ({ rating }) => {
	const [stars, setStars] = useState([emptyStar]);
	

	useEffect(() => {
		let newStar = [];
		for (let i = 1; i <= 5; i++) {
			if (i <= rating) {
				newStar.push(fullStar);
			} else {
				newStar.push(emptyStar);
			}
		}
		setStars(newStar);
	}, [rating]);
	return (
		<div className="rating-container">
			{stars.map((star, index) => {
				return (
					<div key={index} className="stars">
						<img src={star} alt="star" className="star-color" />
					</div>
				);
			})}
		</div>
	);
};

export default Rating;
