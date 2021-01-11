import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import Added from './AddedComponent'

const SelectColor = (props) => {
    return (
        <>
        <p>select a color</p>
         <ul>
            <li><Link to='/colors/red'>red</Link> </li>
            <li> <Link to='/colors/green'>green</Link> </li>
            <li> <Link to='/colors/blue'>blue</Link> </li>
        </ul> 
        </>

    )

}
export default SelectColor;