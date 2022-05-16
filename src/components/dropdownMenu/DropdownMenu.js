import React, { useState } from 'react';
import { Input, AutoComplete } from 'antd';
import { CITY_LIST } from '../../constants/citylist';


const Complete = ({setCitySelected}) => {
  const [options, setOptions] = useState([]);

  const searchResult = (v) => {
    return CITY_LIST.filter(el => el.value.toLowerCase().includes(v));
  };

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value) => {
    setCitySelected(value);
  };

  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      style={{
        width: '60vw',
        display: 'block',
        marginBottom: '10px'
      }}
      options={options}
      onSelect={onSelect}
      onSearch={handleSearch}
    >
      <Input.Search size="large" placeholder="input here" enterButton />
    </AutoComplete>
  );
};

export default Complete;