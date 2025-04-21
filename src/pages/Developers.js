import React, { useEffect, useState } from 'react';
 import DeveloperCard from '../components/DeveloperCard';
 
 export default function Developers() {
   const [developers, setDevelopers] = useState([]);
 
   useEffect(() => {
     fetch('/developers.json')
       .then(res => res.json())
       .then(data => setDevelopers(data));
   }, []);
 
   return (
   <main className="dev-page">
       <h2>Developers</h2>
     <div className="dev-grid">
       {developers.map(dev => (
         <DeveloperCard key={dev.id} dev={dev} />
       ))}
     </div>
   </main>
   );
 }
