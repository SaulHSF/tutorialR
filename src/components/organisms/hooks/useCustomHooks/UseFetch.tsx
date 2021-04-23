// Libs
import { useState, useEffect } from 'react';

// Props
type useFetchProps = {
  url: string;
  initialState?: any;
};

const useFetch = ({ url, initialState = [] }: useFetchProps) => {
  const [data, setData] = useState(initialState);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setIsFetching(true);
    try {
      fetch(url)
        .then(data => data.json())
        .then(data => {
          console.log('%cuseFetch data:' + data, 'color: green');
          setData(data);
          setIsFetching(false);
        })
        .catch(err => {
          console.log('%cuseFetch err:' + err, 'color: red');
          setIsFetching(false);
          setData(undefined);
        });
    } catch (err) {
      console.log('%ctryUseFetch err:' + err, 'color: red');
    }
  }, [url]);

  return [data, isFetching];
};

export default useFetch;
