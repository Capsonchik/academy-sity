import {HomePage} from '../../pages/homePage/homePage';
import {Route, Routes} from 'react-router-dom';
import {LoginPage} from '../../pages/loginPage/loginPage';
import {OfferPage} from '../../pages/offerPage/offerPage';
import {FavoritesPage} from '../../pages/favoritesPage/favoritesPage';

type AppProps = {
  offersSum: number;
}
function App({offersSum}: AppProps): JSX.Element {

  return (
    <Routes>
      <Route path={'/'} element={<HomePage offersSum={offersSum}/>}/>
      <Route path={'login'} element={<LoginPage/>}/>
      <Route path={'offer/:id'} element={<OfferPage/>}/>
      <Route path={'favorites'} element={<FavoritesPage/>}/>
      <Route path={'*'} element={<HomePage offersSum={offersSum}/>}/>
    </Routes>
  );
}

export default App;
