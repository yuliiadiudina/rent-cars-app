import React, { FC, useState } from 'react';
import { AdvertProp } from '../../api/adverts';
import css from './CarsListItem.module.css';
import heart from '../../icons/heart.svg';
import heartBlue from '../../icons/heartblue.svg';
import CarDetails from '../CarDetails/CarDetails';

interface CarsListItemProps {
  advert: AdvertProp;
  isFavorite: boolean;
  onToggleFavorite: (advert: AdvertProp) => void;
}

const CarsListItem: FC<CarsListItemProps> = ({ advert, isFavorite, onToggleFavorite }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleLearnMore = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
        <div className={css.carsListItemDiv}>
      <button className={css.btnHeart} type="button" onClick={() => onToggleFavorite(advert)}>
        <img className={css.btnHeartImg} src={isFavorite ? heartBlue : heart} alt="heart" />
      </button>
        <img className={css.itemImg} src={advert.img} alt="Car" width="274" height="268"></img>
      <h1 className={css.titelItem}>
        {advert.make} <span className={css.titelItemSpan}>{advert.model}</span>, {advert.year} <span className={css.titelPrice}>{advert.rentalPrice}</span>
      </h1>
      <ul className={css.ulList}>
          <li className={css.liList}>
            {advert.address} | {advert.rentalCompany} | {advert.type} | {advert.model} | {advert.id} | {advert.functionalities[0]}
        </li>
      </ul>
      <button className={css.learnMoreBtn} type="button" onClick={handleLearnMore}>Learn more</button>
    </div>
      {isModalOpen && <CarDetails advert={advert} onClose={handleCloseModal} />}
  </>
  );
};

export default CarsListItem;
