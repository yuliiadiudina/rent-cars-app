import React from 'react';
import css from './CarsListItem.module.css';
import heart from '../../icons/heart.svg';
import heartBlue from '../../icons/heartblue.svg';

const CarsListItem = ({
  img,
  make,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  id,
  functionalities,
  isFavorite,
  onToggleFavorite
}) => {
  return (
    <div className={css.carsListItemDiv}>
      <button className={css.btnHeart} type="button" onClick={() => onToggleFavorite({ id, img, make, model, year, rentalPrice, address, rentalCompany, type, functionalities })}>
        <img className={css.btnHeartImg} src={isFavorite ? heartBlue : heart} alt="heart" />
      </button>
      <img className={css.itemImg} src={img} alt="Car" width="274" height="268"></img>
      <h1 className={css.titelItem}>
        {make} <span className={css.titelItemSpan}>{model}</span>, {year} {rentalPrice}
      </h1>
      <ul className={css.ulList}>
        <li className={css.liList}>
          {address} {rentalCompany} {type} {model} {id} {functionalities}
        </li>
      </ul>
      <button className={css.learnMoreBtn} type="button">Learn more</button>
    </div>
  );
};

export default CarsListItem;