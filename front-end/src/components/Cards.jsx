import React from 'react';
import { GoPlus, GoDash } from 'react-icons/go';
import '../styles/Card.css';

function Cards() {
  return (
    <div className="div-cards">
      <div className="div-image">
        <image alt="Cerveja" />
      </div>
      <div className="div-p-buttons">
        <div className="div-p">
          <p>Cerveja</p>
        </div>
        <div className="div-buttons">
          <button type="button">
            <GoDash aria-label="sub" style={ { color: 'white' } } />
          </button>
          <div className="quantity">0</div>
          <button type="button">
            <GoPlus aria-label="somar" style={ { color: 'white' } } />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
