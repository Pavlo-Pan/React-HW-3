import './Rating.module.css'
import React, { useState } from "react";
import ratingList from './ratingList';
function Rating() {
    const [ratingValue, setRatingValue] = useState(0);
    const labels = ["Плохо", "Приемлемо", "Хорошо", "Отлично"];

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