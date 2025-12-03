import { useQuery } from '@tanstack/react-query'
import { getCategories } from '../../services/apiCategories';

function useCategories() {
const { data, isPending, error } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  return { categories: data, isPending, error };

}

export default useCategories
