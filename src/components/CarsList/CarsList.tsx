import React, { FC } from 'react';
import CarsListItem from '../CarsListItem/CarsListItem';
import css from './CarsList.module.css';
import { AdvertProp } from '../../api/adverts';

interface CarsListProps {
  adverts: AdvertProp[];
  favorites: AdvertProp[];
  onToggleFavorite: (advert: AdvertProp) => void;
}

const CarsList: FC<CarsListProps> = ({ adverts, favorites, onToggleFavorite}) => {
  return (
    <section className={css.mainSection}>
      <div className={css.listContainer}>
        <ul className={css.carsList}>
          {adverts && adverts.length > 0 ? (
            adverts.map((advert) => (
              <li className={css.carsListItem} key={advert.id}>
                <CarsListItem
                  advert={advert}
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
