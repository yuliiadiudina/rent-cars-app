import React, { useState, useEffect } from 'react';
import CarsList from '../../components/CarsList/CarsList';
import { fetchAdverts } from '../../api/adverts';
import Loader from '../../components/Loader/Loader';
import LoadBtn from '../../components/LoadBtn/LoadBtn';

function CatalogPage({ favorites, onToggleFavorite }) {
  const [isLoading, setIsLoading] = useState(false);
  const [adverts, setAdverts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function loadAdverts() {
      try {
        setIsLoading(true);
        const data = await fetchAdverts(page);
        setAdverts((prevAdverts) => [...prevAdverts, ...data]);
        if (data.length < 12) setHasMore(false);
      } catch (error) {
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
      <CarsList adverts={adverts} favorites={favorites} onToggleFavorite={onToggleFavorite} />
      {hasMore && !isLoading && <LoadBtn onClick={loadMore} />}
    </>
  );
}

export default CatalogPage;