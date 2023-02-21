import { Routes, Route} from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Contact from './routes/contact/contact.component';
import Menus from './routes/menu/menu.component';
import Footer from './routes/footer/footer.component';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';

const App = () => {

  return (
   <div>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='menus' element={<Menus />} />
          <Route path='contact' element={<Contact />} />
          <Route path='auth' element={<Authentication />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
