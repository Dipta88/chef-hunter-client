import React, { useEffect, useState } from 'react';

const Chefsec = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch('https://chef-recipe-hunter-server-dipta88.vercel.app/recipe')
      .then(res => res.json())
      .then(data => {
        const popularChefs = data.slice(0, 6);
        setChefs(popularChefs);
      })
      .catch(error => {
        console.error('Error fetching chef data:', error);
      });
  }, []);

  return (
    <div> <h1 className="text-5xl font-bold text-center mt-20 mb-20 text-yellow-400">Popular Chefs</h1>
    <div className='grid grid-cols-3 gap-6 ml-60 mb-20'>
   
      {chefs.map(chef => (
        <div key={chef.id} className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={chef['Chef Picture']} alt={chef['Chef Name']} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{chef['Chef Name']}</h2>
            <p>Years of experience: {chef['Years of experience']}</p>
            <p>Number of recipes: {chef['Numbers of recipes']}</p>
            <p>Likes: {chef['Likes']}</p>
            <div className="card-actions">
              <button className="btn btn-warning"><a className='text-xl' href="chefsrecipe">View Recipe</a></button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Chefsec;
