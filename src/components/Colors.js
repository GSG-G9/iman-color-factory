import {
    BrowserRouter as Router, Link
  } from "react-router-dom";  



import SelectColor from './SelectColor'
import AddColor from './AddColor'
const Colors = () => {
    const addColor = (color) => {
        return <p>{color}</p>
        console.log('moni')
        // return <AddedColor color={color}></AddedColor>
    
    }
    return (
        <>
        <Link to="/colors/new">Add new color</Link>
        <SelectColor addColor={addColor}></SelectColor>
        </>
    )

}
export default Colors;