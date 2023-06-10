import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import main from '../images/main.png';
import './MainCard.css';
import { Link } from 'react-router-dom';
import DateTimeContext from '../DateTimeContext';
import { useContext } from 'react';

export default function MainCard() {
  // Access the lastUpdated values from the DateTimeContext
  const { lastUpdatedD, lastUpdatedE, lastUpdatedF, lastUpdatedG } = useContext(DateTimeContext);

  return (
    <div
      className="main"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2rem',
        marginTop: '3rem',
      }}
    >
      <div
        className="left-a"
        style={{
          width: '40rem',
          height: '100%',
          maxWidth: '100%',
        }}
      >
        <Card sx={{ maxWidth: 600, maxHeight: 800, boxShadow: 'none' }}>
          <CardActionArea>
            <img
              src={main}
              alt="error"
              className='cover-img'
              style={{ height: '26rem', width: '100%', borderRadius: '0.3rem' }}
            />
            <CardContent>
              <div style={{ color: 'blue', fontSize: '0.8rem' }}>Last Updated: {lastUpdatedD}</div>
              <Typography gutterBottom variant="h5" component="div">
                <Link to="/carddcontent">Lorem ipsum dolor sit amet, consectetur</Link>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
          
      <div
        className="right-b"
        style={{
          width: '30rem',
          maxWidth: '100%',
          paddingBottom: '1.5rem',
        }}
      >
        <Card sx={{ maxWidth: 550, gap: '2rem', boxShadow: 'none' }}>
          <CardActionArea style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={main}
                alt="error"
                style={{ height: '8rem', width: '14rem', borderRadius: '0.3rem' }}
              />
              <div style={{ marginLeft: '1rem' }}>
                <Typography gutterBottom variant="h5" component="div">
                  <div style={{ color: 'blue', fontSize: '0.8rem' }} className='last'>
                    Last Updated: {lastUpdatedE}
                  </div>
                  <Link to="/cardecontent">
                    <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </Link>
                </Typography>
              </div>
            </div>
          </CardActionArea>

          <CardActionArea style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={main}
                alt="error"
                style={{ height: '8rem', width: '14rem', borderRadius: '0.3rem' }}
              />
              <div style={{ marginLeft: '1rem' }}>
                <Typography gutterBottom variant="h5" component="div">
                  <div style={{ color: 'blue', fontSize: '0.8rem' }} className='last'>
                    Last Updated: {lastUpdatedF}
                  </div>
                  <Link to="/cardfcontent">
                    <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </Link>
                </Typography>
              </div>
            </div>
          </CardActionArea>

          <CardActionArea style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={main}
                alt="error"
                style={{ height: '8rem', width: '14rem', borderRadius: '0.3rem' }}
              />
              <div style={{ marginLeft: '1rem' }}>
                <Typography gutterBottom variant="h5" component="div">
                  <div style={{ color: 'blue', fontSize: '0.8rem' }} className='last'>
                    Last Updated: {lastUpdatedG}
                  </div>
                  <Link to="/cardgcontent">
                    <p className='lorem'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  </Link>
                </Typography>
              </div>
            </div>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
