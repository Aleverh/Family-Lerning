import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './components/index.scss';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import theme from './components/MUI/theme';
import CustomRoute from './components/Route/Route';
import Login from './Pages/LoginPage/Login';
import Register from './Pages/RegisterPage/Register';
import AllProducts from './Pages/AllProducts/Allproducts';
import AllInfoAboutProduct from './Pages/Product/allInfoAboutProduct';
import CreateProduct from './Pages/OnlyAdminPage/CreateProduct/createProduct';
import Profile from './Pages/ProfilePage/profile';
import store from './components/redux/store';
import Cart from './Pages/Cart/Cart';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <ThemeProvider theme={theme}>
                    <div className="container">
                        <Routes>
                            <Route index element={<CustomRoute route="public"><Login /></CustomRoute>} />
                            <Route path="/AllProducts" element={<CustomRoute route="protected"><AllProducts /></CustomRoute>} />
                            <Route path="/login" element={<CustomRoute route="public"><Login /></CustomRoute>} />
                            <Route path="/register" element={<CustomRoute route="public"><Register /></CustomRoute>} />
                            <Route path="/product/:id" element={<CustomRoute route="protected"><AllInfoAboutProduct /></CustomRoute>} />
                            <Route path="/create/:id/:state" element={<CustomRoute route="admin"><CreateProduct /></CustomRoute>} />
                            <Route path="/profile/:tab" element={<CustomRoute route="protected"><Profile /></CustomRoute>} />
                            {/* <Route path="/profile/myProducts" element={<CustomRoute route="admin">
                            <Profile /></CustomRoute>} /> */}
                            <Route path="/cart" element={<CustomRoute route="protected"><Cart /></CustomRoute>} />
                        </Routes>
                    </div>
                </ThemeProvider>
            </Router>
        </Provider>
    );
}

export default App;
