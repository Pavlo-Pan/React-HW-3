import './Rating.module.css'
import { useState } from "react";
import ratingList from './ratingList';
import labels from './labels';
function Rating() {
    const [ratingValue, setRatingValue] = useState(0);

    return (
        <div>
            <img
                src={ratingList[ratingValue]}
                alt="Рейтинг"
            />
            <div>
                {labels.map((label, index) => (
                    <button
                        key={index}
                        onClick={() => setRatingValue(index)}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    );
}
export default Rating