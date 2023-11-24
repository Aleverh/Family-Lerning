import { useParams } from 'react-router-dom';
import Products from './products/Products';
import Orders from '../../../components/Orders/Orders';
import UserInfo from './userInfo/userInfo';

function Controller() {
    const params = useParams();
    if (params.tab === 'myProducts') {
        return (
            <Products />
        );
    }
    if (params.tab === 'myOrders') {
        return (
            <Orders />
        );
    }
    if (params.tab === 'aboutMe') {
        return (
            <UserInfo />
        );
    }
}
export default Controller;
