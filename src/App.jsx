import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MockApiProvider from './context/MockApiProvider';
import Home from './views/Home';
import Contact from './views/Contact';
import NotFound from './views/NotFound';
import AddProduct from './views/AddProducts';
import NavigationTabs from './components/navbar';

function App() {
  return (
    <MockApiProvider>
      <Router>
        <NavigationTabs />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-product" element={<AddProduct />} /> {/* Add new route */}
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </MockApiProvider>
  );
}

export default App;
