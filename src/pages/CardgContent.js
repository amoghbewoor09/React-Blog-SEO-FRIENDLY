// CardbContent.js
// CardaContent.js
import React, { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import card from '../images/card-a-content.png';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import moment from 'moment';
import { Button } from '@mui/material';
import DateTimeContext from '../DateTimeContext';

export default function CardbContent() {
  const { lastUpdatedG, setLastUpdatedG } = useContext(DateTimeContext);

  const updateTimeAndDateG = () => {
    const currentDateTime = moment().format('YYYY-MM-DD HH:mm:ss');
    setLastUpdatedG(currentDateTime);
  };

  return (
    <>
      <div>
        <Navbar />
        <Header />
      </div>

      <div className="blog-container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '3rem' }}>
        <div className="header" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Avatar alt="Publisher Avatar" src="/path/to/avatar.jpg" />
          <Typography variant="subtitle1">Publisher Name</Typography>
          {lastUpdatedG && (<Typography variant="body2" color="primary"> Last Updated: {lastUpdatedG}</Typography>)}

        </div>
        <Typography variant="h4" component="h1">Lorem ipsum dolor sit amet, consectetur</Typography>
        <div className="content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

          <Typography variant="body1" style={{textAlign:'justify'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer euismod sapien eu eleifend luctus.
            Fusce quis ex ipsum. Proin vitae felis eget odio ultrices scelerisque. Morbi vitae magna tristique,
            mollis ligula ut, sagittis odio. Integer pharetra massa eu mauris posuere bibendum. Donec malesuada
            risus vitae diam tristique sollicitudin. Mauris faucibus lacinia velit id faucibus. Mauris commodo
            tincidunt ligula in tempor. Mauris dapibus risus vitae venenatis semper. Aliquam erat volutpat.
            Nullam ultrices, quam ac sollicitudin aliquet, mauris mi tincidunt elit, eget cursus lorem metus id ligula.
          </Typography>


          <img src={card} alt="error" style={{ maxWidth: '50%', height: 'auto', marginTop: '2rem' }} />

          <Button variant="contained" style={{ marginTop: '2rem' }} onClick={updateTimeAndDateG}>Update Content</Button>

        </div>
      </div>
    </>
  );
}



