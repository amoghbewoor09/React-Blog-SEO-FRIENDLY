// Home.js
import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import { Helmet } from 'react-helmet';

import MainCard from '../components/MainCard';
import DateTimeContext from '../DateTimeContext';
import Cards from '../components/Cards';

export default function Home() {
  return (

    <>
    <Helmet>
        <title>Home Blog - Skorlife</title>
        <meta name="description" content="This is the content of Blog posts. About: " />
        <meta name="keywords" content="Skor life, Blog, Publisher Name, SEO" />
      </Helmet>


    <div>
      <Navbar />
      <Header />
      <MainCard />
      <DateTimeContext.Consumer>
        {({ lastUpdated }) => <Cards lastUpdated={lastUpdated} />}
      </DateTimeContext.Consumer>
      
    </div>
    </> 
  );
}














// import React from 'react';
// import Navbar from '../components/Navbar';
// import Header from '../components/Header';
// import Cards from '../components/Cards';
// import MainCard from '../components/MainCard';


// export default function Home() {

  
    
//   return (
//     <div>
//       <Navbar />
//       <Header /> 
//       <MainCard />
//       <Cards />
//     </div>
//   )
// }
