import { Form, Input, Space } from 'antd';
import React, { useState } from 'react';

const AdvancedSearchBar = (props) => {
  const { foods, setFoodDisplay } = { ...props };
  const [searchString, setSearchString] = useState('');

  const updateSearchString = (e) => setSearchString(e.currentTarget.value);

  function caseInsensitiveTextSearch(haystack, needle) {
    return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
  }

  function rangeSearch(value, low, high) {
    console.log(value, low, high);
    return (low ? low <= value : true) && (high ? high >= value : true);
  }

  const searchFields = {
    name: caseInsensitiveTextSearch,
    calories: rangeSearch,
    image: caseInsensitiveTextSearch,
    servings: rangeSearch,
  };

  const filterDisplay = () => {
    const searchWords = searchString.split(' ');
    const validators = searchWords.map((token) => {
      let advancedSearch = token.split(':');
      let key = 'name';

      if (advancedSearch.length >= 2) {
        advancedSearch[0] = advancedSearch[0].toLowerCase();
        if (advancedSearch[0] in searchFields) {
          key = advancedSearch[0];
          advancedSearch = advancedSearch[1].split('-');
        }
      }
      return (item) => {
        return searchFields[key](item[key], ...advancedSearch);
      };
    });

    setFoodDisplay((display) => {
      return foods.filter((item) => {
        return validators.reduce(
          (select, validator) => validator(item) || select,
          false
        );
      });
    });
  };

  return (
    <Form>
      <Space direction="veritcal" size="middle">
        <Input name="calories" type="text" onChange={updateSearchString} />
        <Input
          name="submit"
          type="submit"
          value="search"
          onClick={filterDisplay}
        />
      </Space>
    </Form>
  );
};

export default AdvancedSearchBar;
