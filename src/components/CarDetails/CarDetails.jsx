import React, { useEffect } from 'react';
import css from './CarDetails.module.css';
import closeIcon from '../../icons/x.svg';

const CarDetails = ({ advert, onClose }) => {
    
  useEffect(() => {
    const handleEsc = e => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <button className={css.closeButton} type="button" onClick={onClose}>
          <img src={closeIcon} alt="close" />
        </button>
        <img src={advert.img} alt="car" className={css.carImage} />
        <h1>
          {advert.make} <span>{advert.model}</span>, {advert.year}
        </h1>
        <ul>
          <li>
            {advert.address} Id: {advert.id} Year: {advert.year} Type: {advert.type} Fuel Consumption: {advert.fuelConsumption} Engine Size: {advert.engineSize}
          </li>
        </ul>
        <p>{advert.description}</p>
        <h2>Accessories and functionalities</h2>
        <ul>
          <li>{advert.accessories} {advert.functionalities}</li>
        </ul>
        <h2>Rental Conditions</h2>
        <ul>
          <li>{advert.rentalConditions} Mileage: {advert.mileage} Price: {advert.price}</li>
        </ul>
        <a className={css.rentalBtn} href="tel:+380730000000">Rental car</a>
      </div>
    </div>
  );
};

export default CarDetails;
