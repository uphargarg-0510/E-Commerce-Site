import { BrowserRouter,Route,Routes } from "react-router-dom"
import {Dropdown} from './productsdrop'
function routt()
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dropdown></Dropdown>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default routt