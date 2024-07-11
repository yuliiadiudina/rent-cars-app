import React, { useState, useEffect, FC } from 'react';
import CarsList from '../../components/CarsList/CarsList';
import { fetchAdverts, AdvertProp} from '../../api/adverts';
import Loader from '../../components/Loader/Loader';
import LoadBtn from '../../components/LoadBtn/LoadBtn';

interface CatalogPageProps {
  favorites: AdvertProp[];
  onToggleFavorite: (advert: AdvertProp) => void;
}

const CatalogPage: FC<CatalogPageProps> = ({ favorites, onToggleFavorite }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [adverts, setAdverts] = useState<AdvertProp[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  

  useEffect(() => {
    async function loadAdverts() {
      try {
        setIsLoading(true);
        const data = await fetchAdverts(page);
        setAdverts((prevAdverts) => [...prevAdverts, ...data]);
        if (data.length < 12) setHasMore(false);
      } catch (error: any) {
        console.error('Error:', error.message);
      } finally {
        setIsLoading(false);
      }
    }
    loadAdverts();
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  
  return (
    <>
      {isLoading && <Loader />}
      <CarsList adverts={adverts} favorites={favorites} onToggleFavorite={onToggleFavorite}  />
      {hasMore && !isLoading && <LoadBtn onClick={loadMore} />}
    </>
  );
}

export default CatalogPage;