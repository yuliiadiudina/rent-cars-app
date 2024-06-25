import React, {useState} from 'react';
import css from './CarsListItem.module.css';
import heart from '../../icons/heart.svg';
import heartBlue from '../../icons/heartblue.svg';
import CarDetails from 'components/CarDetails/CarDetails';

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
  fuelConsumption,
  engineSize,
  description,
  accessories,
  rentalConditions,
  mileage,
  isFavorite,
  onToggleFavorite
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLearnMore = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
        <div className={css.carsListItemDiv}>
      <button className={css.btnHeart} type="button" onClick={() => onToggleFavorite({ id, img, make, model, year, rentalPrice, address, rentalCompany, type, functionalities })}>
        <img className={css.btnHeartImg} src={isFavorite ? heartBlue : heart} alt="heart" />
      </button>
        <img className={css.itemImg} src={img} alt="Car" width="274" height="268"></img>
      <h1 className={css.titelItem}>
        {make} <span className={css.titelItemSpan}>{model}</span>, {year} <span className={css.titelPrice}>{rentalPrice}</span>
      </h1>
      <ul className={css.ulList}>
          <li className={css.liList}>
            {address} | {rentalCompany} | {type} | {model} | {id} | {functionalities[0]}
        </li>
      </ul>
      <button className={css.learnMoreBtn} type="button" onClick={handleLearnMore}>Learn more</button>
    </div>
    {isModalOpen && <CarDetails advert={{ img, make, model, year, rentalPrice, address, rentalCompany, type, id, functionalities, fuelConsumption, engineSize, description, accessories, rentalConditions, mileage, }} onClose={handleCloseModal} />}
  </>
  );
};

export default CarsListItem;