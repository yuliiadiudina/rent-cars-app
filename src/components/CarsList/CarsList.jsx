import React from 'react';
import CarsListItem from '../CarsListItem/CarsListItem';
import css from './CarsList.module.css';

const CarsList = ({ adverts, index, favorites, onToggleFavorite }) => {
  return (
    <section className={css.mainSection}>
          <div className={css.listContainer}>
      <ul className={css.carsList}>
        {adverts && adverts.length > 0 ? (
          adverts.map((advert) => (
            <li className={css.carsListItem} key={index}>
              <CarsListItem
                {...advert}
                isFavorite={favorites.some(fav => fav.id === advert.id)}
                onToggleFavorite={() => onToggleFavorite(advert)}
              />
            </li>
          ))
        ) : (
          <p className={css.anverbInfo}>No adverts available</p>
        )}
      </ul>
    </div>
    </section>

  );
};

export default CarsList;