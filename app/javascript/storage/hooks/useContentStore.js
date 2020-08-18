import { useEffect, useState } from 'react';
import { chain } from 'lodash-es';
import useLocalStorage from './useLocalStorage';
const key = 'renters_content';
const useContentStore = ({ initialEntries = [] }) => {
  const { getItem, setItem } = useLocalStorage({ fallbackValue: [] });
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setItem({ name: key, value: initialEntries });
    setEntries(initialEntries);

    console.log('Resetting everything....');

    setLoading(false);
  }, []);

  const addEntry = (entry) => {
    const addItem = (currentEntries) => {
      const nextId = chain(currentEntries)
        .map('id')
        .max()
        .thru((currentMax) => currentMax + 1)
        .value();

      const nextEntries = currentEntries.concat({ ...entry, id: nextId });
      setEntries(nextEntries);

      return setItem({ name: key, value: nextEntries });
    };

    getItem(key).then(addItem);
  };

  return { addEntry, entries, loading };
};

export default useContentStore;
