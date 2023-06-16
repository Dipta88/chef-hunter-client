import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import like from '../images/like.png';

const ChefsRecipe = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch('https://chef-recipe-hunter-server-dipta88.vercel.app/recipe')
      .then(res => res.json())
      .then(data => {
        const popularChefs = data.slice(0, 10);
        setChefs(popularChefs);
      })
      .catch(error => {
        console.error('Error fetching chef data:', error);
      });
  }, []);

  const handleFavoriteClick = chefName => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${chefName} added to favorites!`,
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center mt-20 mb-20 text-yellow-400">Popular Chefs</h1>
      <div className='grid grid-cols-3 gap-6 ml-60 mb-20 mr-60 text-grey-100'>
        {chefs.map(chef => (
          <div key={chef['Chef Name']} className="card lg:card-side bg-base-300 shadow-xl">
            <div className="card-body">
              <img src={chef['Chef Picture']} className="w-50 object-cover" alt={chef['Chef Name']} />
              <h2 className="card-title text-3xl">{chef['Chef Name']}</h2>
              <p>Bio: {chef['Bio']}</p>
              <p className="text-xl">Experience: {chef['Years of experience']}</p>
              <p className="text-xl">Number of Recipes: {chef['Numbers of recipes']} recipes</p>
              <div className="flex items-center">
                <img className="w-7" src={like} alt="like" /> <p className="text-xl ml-2">{chef['Likes']}</p>
              </div>
              <div className="card-actions justify-end"></div>
              <h3 className="text-xl font-bold mt-6">Recipe:</h3>
              <p className="text-xl">Name: {chef['Recipe Name']}</p>
              <p className="text-xl">Ingredients: {chef['Ingredients'].join(', ')}</p>
              <p className="text-l">Cooking Method: {chef['Cooking Method']}</p>
              <p className="text-xl">Rating: {chef['Rating']}</p>
              <button className="btn bg-yellow-500 text-black" onClick={() => handleFavoriteClick(chef['Chef Name'])}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Favorite
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefsRecipe;
