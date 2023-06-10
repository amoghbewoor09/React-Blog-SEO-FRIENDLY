import React, { useState, useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './Cards.css'; // Import CSS file for custom styles
import cardImage from '../images/card-a.png';
import DateTimeContext from '../DateTimeContext'; // Import the DateTimeContext
import { Button } from '@mui/material';

export default function Cards() {
  // Accessing the lastUpdated values from the DateTimeContext
  const { lastUpdated, lastUpdatedB, lastUpdatedC } = useContext(DateTimeContext);

  // Initializing card data using useState hook
  const [cardData, setCardData] = useState([
    {
      id: 1,
      image: cardImage,
      title: 'Card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
      lastUpdated: new Date(lastUpdated) // Convert to Date object
    },
    {
      id: 2,
      image: cardImage,
      title: 'Card 2',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      lastUpdated: new Date(lastUpdatedB) // Convert to Date object
    },
    {
      id: 3,
      image: cardImage,
      title: 'Card 3',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      lastUpdated: new Date(lastUpdatedC) // Convert to Date object
    },
  ]);

  // Sort the cardData array based on lastUpdated property
  const handleSort = () => {
    const sortedData = [...cardData].sort((a, b) => b.lastUpdated.getTime() - a.lastUpdated.getTime());
    setCardData(sortedData);
  };

  return (
    <div className="cards-container">
      <div className="sort-button">
        {/* Button component for sorting the cards */}
        <Button variant="contained" onClick={handleSort}>Sort</Button>
      </div>

      <div className="cards" style={{ gap: '2rem', }}>
        {/* Mapping over the cardData array to render each card */}
        {cardData.map((card) => (
          <Card key={card.id} className="card" style={{ width: '22rem' }} sx={{ maxWidth: 500, maxHeight: 500, boxShadow:'none'}}>
            {/* Displaying the card image */}
            <img src={card.image} alt={`Card ${card.id}`} className="card-image" />

            {/* Displaying the last updated date */}
            <div style={{ color: 'blue', fontSize: '0.8rem',marginLeft:'1rem',marginTop:'0.2rem' }}>
              Last Updated: {card.lastUpdated.toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}
            </div>

            <CardContent>
              {/* Displaying the card title */}
              <Typography variant="h5" component="div" className="card-title" style={{ textAlign: 'left', paddingBottom: '1rem' }}>
                {/* Generating links based on the card id */}
                {card.id === 1 && <Link to="/cardacontent">Card 1</Link>}
                {card.id === 2 && <Link to="/cardbcontent">Card 2</Link>}
                {card.id === 3 && <Link to="/cardccontent">Card 3</Link>}
              </Typography>

              {/* Displaying the card description */}
              <Typography variant="body2" colors="text.secondary" className="card-description" style={{ textAlign: 'justify' }}>
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
