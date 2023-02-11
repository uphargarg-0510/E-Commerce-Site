import logo from '../assets/logo.svg'
import './Navbar.css'
import { TextField } from '@mui/material';
import { InputAdornment } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Login from './login'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import DropDown from '../APIs/productsdrop';
import Cart from './shoppingcart.js'
import Categories from './categories/Categories'



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '20px',
};

function Navbar() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const StyledBadge = styled(Badge)(({ theme }) => ({
        '& .MuiBadge-badge': {
            right: -3,
            top: 13,
            border: `2px solid ${theme.palette.background.paper}`,
            padding: '0 4px',
        },
    }));

    const account = {
        width: '6vw',
        height: '6vh',
    }

    

    const text = {
        borderRadius:'50px'
        ,width:'40vw'
    }

    return (
        <div>
            <header className='header' data-header>
            <div className='navbar'>
                <div>
                    <img src={logo} alt={"Logo"} />
                </div>

                <div className='nav-2'>

                    <div>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Searching For..."
                            multiline
                            maxRows={4}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                )
                            }}
                            style={text}
                            variant="outlined"
                        />
                    </div>

                    {/* <div>
                        <DropDown></DropDown>
                    </div> */}

                    <div>
                        <div>
                            <AccountCircle onClick={handleOpen} style={account} />
                            {/* <Button onClick={handleOpen} style={account}>{<AccountCircle />}</Button> */}
                            <Modal
                                keepMounted
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="keep-mounted-modal-title"
                                aria-describedby="keep-mounted-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                                        <Login />
                                    </Typography>
                                    <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>

                                    </Typography>
                                </Box>
                            </Modal>
                        </div>
                    </div>

                    <div>
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={4} color="secondary">
                                <Cart></Cart>
                                {/* <ShoppingCartIcon style={cart} /> */}
                            </StyledBadge>
                        </IconButton>
                    </div>
                </div>

            </div>
            </header>

            <div>
                <Categories />
            </div>
        </div>
    )
}

export default Navbar;