import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to Enlist AI</h1>
      <h2>Rapidly create hand-crafted cover letters attuned to the unique needs of every position you pursue, with some help from generative AI.</h2>
      <p>Made with React (Next.js), Express, PostgreSQL and Tailwind CSS.</p>
    </div>
  );
};

// const Home = () => {
//   const handleProfileSubmit = async () => {
//     try {
//       const response = await axios.post('/api/profile');
//       console.log(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Welcome to Next.js</h1>

//       <button onClick={handleProfileSubmit}>Submit to Express</button>
//     </div>
//   );
// };

export default Home;
