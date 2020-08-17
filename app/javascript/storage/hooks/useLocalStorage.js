import localForage from 'localforage';
import { noop } from 'lodash-es';

const handleErrors = (err) => {
  console.log(err);
};

const useLocalStorage = ({ fallbackValue = undefined } = {}) => {
  const getItem = (name, callback = noop) =>
    localForage
      .getItem(name)
      .then((val) => {
        const value = val || fallbackValue;
        callback(value);
        return value;
      })
      .catch(handleErrors);

  const setItem = ({ name, value: val, callback }) =>
    localForage
      .setItem(name, val)
      .then(() => getItem(name, callback))
      .catch(handleErrors);

  return { setItem, getItem };
};

export default useLocalStorage;
