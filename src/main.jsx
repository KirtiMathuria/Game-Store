import ReactDOM from 'react-dom/client';
import App from './App';
import { Toaster } from 'react-hot-toast';
import AuthContext from './context/AuthContext';
import CartContext from './context/CartContext';
import { SearchProvider } from './context/SearchContext'; // import the search context

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContext>
    <CartContext>
      <SearchProvider>
        <App />
        <Toaster />
      </SearchProvider>
    </CartContext>
  </AuthContext>
);
