import React, { useEffect, FC  } from 'react';
import css from './CarDetails.module.css';
import closeIcon from '../../icons/x.svg';
import { AdvertProp } from '../../api/adverts';
  
interface CarDetailsProps {
  advert: AdvertProp;
  onClose: () => void;
}

const CarDetails: FC<CarDetailsProps> = ({ advert, onClose }) => {
    
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const rentalConditionsArray =  advert.rentalConditions ? advert.rentalConditions.split('\n') : [];
  const formattedMileage = advert.mileage ? advert.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') :'';
  
  const highlightNumbers = (condition: string) => {
    const parts = condition.split(/(\d+)/);
    return (
      <>
        {parts.map((part, index) => 
          /^\d+$/.test(part) ? <span key={index} className={css.detailsItemSpan}>{part}</span> : part
        )}
      </>
    );
  };
  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <button className={css.closeButton} type="button" onClick={onClose}>
          <img src={closeIcon} alt="close" />
        </button>
        <img src={advert.img} alt="car" className={css.carImage} />
        <h1 className={css.modalTitel}>
          {advert.make} <span className={css.modalTitelSpan}>{advert.model}</span>, {advert.year}
        </h1>
        <ul className={css.modalList}>
          <li className={css.modalItem}>
            {advert.address} | Id: {advert.id} | Year: {advert.year} | Type: {advert.type} | Fuel Consumption: {advert.fuelConsumption} | Engine Size: {advert.engineSize}
          </li>
        </ul>
        <p className={css.modalDescription}>{advert.description}</p>
        <h2 className={css.accessoriesTitel}>Accessories and functionalities:</h2>
        <ul className={css.listAccessories}>
          <li className={css.itemAccessories}>{advert.accessories?.join(' | ')}</li>
          <li className={css.itemAccessories}>{advert.functionalities.join(' | ')}</li>  
        </ul>
        <h2 className={css.detailsTitel}>Rental Conditions:</h2>
        <ul className={css.detailsList}>
          {rentalConditionsArray.map((condition, index) => (
            <li key={index} className={css.detailsItem}>
              {highlightNumbers(condition)}
            </li>
          ))}
          <li className={css.detailsItem}>Mileage: <span className={css.detailsItemSpan}>{formattedMileage}</span></li>
          <li className={css.detailsItem}>Price: <span className={css.detailsItemSpan}>{advert.rentalPrice}</span></li> 
        </ul>
        <button className={css.rentalBtn}>
          <a className={css.rentalLink} href="tel:+380730000000">Rental car</a>
        </button>
      </div>
    </div>
  );
};

export default CarDetails;
