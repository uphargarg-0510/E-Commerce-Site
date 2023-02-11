import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Categories() {
    const [categories, setcategories] = React.useState('');

    const handleChange = (event) => {
        setcategories(event.target.value);
    };

    return (
        <>
            <div>

                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                        <InputLabel >Categories</InputLabel>
                        <Select
                            value={categories}
                            label="Categories"
                            onChange={handleChange}
                            style={{width: '150px', height: '30px'}}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

            </div>
        </>
    );
}

export default Categories;