import React, {FC} from 'react';
import CarsList from '../../components/CarsList/CarsList';
import { AdvertProp } from "../../api/adverts";


interface FavoritePageProps {
  favorites: AdvertProp[];
  onToggleFavorite: (advert: AdvertProp) => void;
}

const FavoritePage: FC<FavoritePageProps> = ({ favorites, onToggleFavorite }) => {
  return (
      <>
          <CarsList  adverts={favorites} favorites={favorites} onToggleFavorite={onToggleFavorite} />
      </>
      

  );
}

export default FavoritePage;