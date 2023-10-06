import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

export default function Navbar({ title, buttons, setCollectionName }) {
  return (
    <div className="navbar" style={{ backgroundColor: 'black', display: 'flex', justifyContent: 'space-between' }}>
      <h1 style={{ color: 'white', margin: 0 }}>{title}</h1>
      <div className="navbar-buttons" style={{ padding: '10px', margin: '.5rem' }}>
        {buttons.map((button) => (
          <Button style={{ margin: '.25rem' }}
            key={button.text}
            className='shadow__btn'
            onClick={() => setCollectionName(button.collectionName)}
          >
            {button.text}
          </Button>
        ))}
      </div>
    </div>
  );
}
