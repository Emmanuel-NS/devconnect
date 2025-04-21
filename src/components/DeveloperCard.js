import React from 'react';
import './DeveloperCard.css';

export default function DeveloperCard({ dev }) {
  return (
    <div className="dev-card">
      <h3>{dev.name}</h3>
      <p><strong>Stack:</strong> {dev.stack}</p>
      <p>
        <a href={dev.github} target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </p>
    </div>
  );
}
