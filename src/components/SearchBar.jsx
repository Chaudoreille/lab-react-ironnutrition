import { Form, Input, Space, Button } from 'antd';
import React, { useState } from 'react';

const SearchBar = (props) => {
  const { foods, setFoodsDisplay } = { ...props };
  const [searchString, setSearchString] = useState('');

  const updateSearchString = (e) => setSearchString(e.currentTarget.value);

  function caseInsensitiveTextSearch(haystack, needle) {
    return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
  }

  const filterDisplay = () => {
    setFoodsDisplay((display) => {
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
      <Space size="middle">
        <Input name="calories" type="text" onChange={updateSearchString} />
        <Button name="submit" type="primary" value="" onClick={filterDisplay}>
          Search
        </Button>
      </Space>
    </Form>
  );
};

export default SearchBar;
