import React, {useState} from 'react';

import Select, { components } from 'react-select';
import makeAnimated from 'react-select/animated';


const animatedComponents = makeAnimated();

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  

export default function AnimatedMulti() {
    const [text, setText] = useState(null)
    console.log(text)

    const handleOnChange = (e) => {
       setText()
      

    }



  return (<div>
    <Select
      closeMenuOnSelect={true}
      components={animatedComponents}
      isMulti
      options={options}
      onChange={handleOnChange} 
    />
    </div>
  );
}

