import { Form, Input, Space } from 'antd';
import React, { useState } from 'react'

const SearchBar = (props) => {
    const {foods, setFoodDisplay } = {...props};
    const [searchString, setSearchString] = useState('');

    const searchFields = {
        name: (haystack, needle) => haystack.indexOf(needle) !== -1,
        calories: (value, low, high) =>
          (low ? low <= value : true) && (high ? high >= value : true),
        image: (haystack, needle) => haystack.indexOf(needle) !== -1,
        servings: (value, low, high) =>
          (low ? low <= value : true) && (high ? high >= value : true),
      };
      
    const filterDisplay = () => {
        const searchWords = searchString.split();
        const validators = searchWords.map(token => {
            const advancedSearch = token.split(':');
            let key = 'name';
            let search = [token];

            if (advancedSearch.length >= 2) {
                if (advancedSearch[0] in searchFields) {
                    key = advancedSearch[0];
                    search = advancedSearch[1].split('-');
                }
            }
            return (item) => searchFields[key](item, ...search);
        });
        console.log(validators)
        setFoodDisplay((display) => {
            return foods.filter((item) => {
                return validators.reduce((select, validator) => validator(item) || select, false)
            });
        });
    };
    
  return (
    <Form>
      <Space direction='veritcal' size='middle'>
        <Input
          name='calories'
          type='text'
          onChange={setSearchString}
          />
        <Input
          name='submit'
          type='submit'
          value='search'
          onClick={filterDisplay}
        />
      </Space>
    </Form>
  )
}

export default SearchBar