import { useEffect } from 'react';

const usePageTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Doctor Dev`;
  }, [title]);
};

export default usePageTitle;
