import { Routes, Route} from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Contact from './routes/contact/contact.component';
import Menus from './routes/menu/menu.component';
import Footer from './routes/footer/footer.component';
import Authentication from './routes/authentication/authentication.component';

const App = () => {

  return (
   <div>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='menus' element={<Menus />} />
          <Route path='contact' element={<Contact />} />
          <Route path='auth' element={<Authentication />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
