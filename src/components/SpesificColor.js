import Red from'./Red';
import Green from './Green';
import Blue from './Blue';
import NotFound from './NotFound';

const SpesificColor = (props) => {
  const {match:{params:{color}}} = props;
  const {history: {goBack}} = props;

    return (
        <>
        {color === 'red'? <Red/>: color === 'green'?<Green/>:  color === 'blue'?<Blue/> : <NotFound/> }
        <button onClick= {() => {goBack()}}>GO BACK</button>
        </>
    )

}
export default SpesificColor;