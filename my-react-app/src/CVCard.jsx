import React from 'react';
import './CVCard.css'; // Импортирую файл стилей

const CVCard = () => {
    return (
        <div className="cv-card-container">
            <div className="cv-text">
                <h1>Novikova Anna</h1>
                <p>Product marketing manager</p>
            </div>
            <div className="cv-image">
                <img src="" alt="Anna's photo" />
            </div>
        </div>
    );
};

export default CVCard;

