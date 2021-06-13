import React from 'react';
import "./HeroesCard.css";
import { Link } from 'react-router-dom';

function HeroesCard({ hero }) {
  const { id, name, publisher } = hero;

    return (
        <div className="hero">
        <h2>
          <Link to={`/heroes/${id}`}>{name}</Link>
        </h2>
        <div className="hero-desc">
          <p>Publisher: {publisher}</p>
        </div>
        <button className="hero-btn" >Adopt Pet</button>
        <button className="hero-btn" >Change Pet</button>
      </div>
    );
}

export  default HeroesCard;