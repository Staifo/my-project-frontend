import React from 'react';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';


const animatedComponents = makeAnimated();

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

export default function AnimatedMultiSkills() {
  return (
    <Select
      closeMenuOnSelect={true}
      components={animatedComponents}
      isMulti
      options={options}
      
    />
  );
}