import { Routes, Route } from "react-router-dom";
import { lazy, useState, useEffect, FC} from "react";
import SharedLayuot from "./components/SharedLayout/SharedLayout";
import { AdvertProp } from "./api/adverts";
const HomePage = lazy(() => import("./screens/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./screens/CatalogPage/CatalogPage"));
const FavoritePage = lazy(() => import("./screens/FavoritePage/FavoritePage"));
const NotFoundPage = lazy(() => import("./screens/NotFoundPage/NotFoundPage"));


const App: FC = () => {
  const [favorites, setFavorites] = useState<AdvertProp[]>(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const toggleFavorite = (advert: AdvertProp) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some(fav => fav.id === advert.id);
      if (isFavorite) {
        return prevFavorites.filter(fav => fav.id !== advert.id);
      } else {
        return [...prevFavorites, advert];
      }
    });
  };

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayuot />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage favorites={favorites} onToggleFavorite={toggleFavorite} />} />
          <Route path="favorites" element={<FavoritePage favorites={favorites} onToggleFavorite={toggleFavorite} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;