import React from 'react';
import CarsList from '../../components/CarsList/CarsList';

function FavoritePage({ favorites, onToggleFavorite }) {
  return (
      <>
          <CarsList adverts={favorites} favorites={favorites} onToggleFavorite={onToggleFavorite} />
      </>
      

  );
}

export default FavoritePage;