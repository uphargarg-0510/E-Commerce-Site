import {useState} from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Cart() {

    const [state, setState] = useState({right: false});

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const cart = {
        width: '2.5vw',
        height: '5vh',
    }

    return (
        <>
            <ShoppingCartIcon style={cart} onClick={toggleDrawer(true, true)} />
        </>
    )
}

export default Cart;