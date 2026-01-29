import { useCallback, useEffect, useState } from 'react'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography';
import { inputValidation } from './helper';
import { Coordinates } from './types';
import TableComponent from './components/TableComponent';
import { Directions } from './enum';
 
type Props = {
  input?: string;
}

function App(props: Props) {
  const { input } = props;
  const [value, setValue] = useState(input? input :'0,0 SOUTH');
  const [data, setData] = useState<Coordinates | string >('');

  useEffect(() => {
    if(input){
      const newData = inputValidation(input);
      setData(newData)
    }else{
      //Default only
      setData({x: 0, y: 0, direction: Directions.SOUTH})
    }
  }, [input])

  const valueChanged = useCallback((newValue: string) => {
    setValue(newValue)
    const newData = inputValidation(newValue);
    setData(newData)
  }, [])

  return (
    <div style={{margin: '20px'}}>
      <TextField id="textfieldValue" label="Input Value" variant="outlined" value={value} onChange={(e) => valueChanged(e.target.value)} />
      <div style={{marginTop: '20px'}}>
        {typeof data === 'string'  ? (<Typography>{data}</Typography>) :  (<TableComponent coordinates={data} />) } 
      </div>
    </div>
  );
}

export default App;
