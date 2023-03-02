import { Form, Input, Space } from 'antd';
import React, { useState } from 'react';

const SearchBar = (props) => {
  const { foods, setFoodDisplay } = { ...props };
  const [searchString, setSearchString] = useState('');

  const updateSearchString = (e) => setSearchString(e.currentTarget.value);

  function caseInsensitiveTextSearch(haystack, needle) {
    return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
  }

  const filterDisplay = () => {
    setFoodDisplay((display) => {
      const searchWords = searchString.split(' ');

      return foods.filter((item) => {
        return searchWords.reduce(
          (select, word) =>
            caseInsensitiveTextSearch(item.name, word) || select,
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

export default SearchBar;
