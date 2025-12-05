import { useQuery } from '@tanstack/react-query';
import { getBooks } from '../../services/apiBooks';

function useBooks({ page = 1, limit = 10, search = "" } = {}) {
  const { data, isPending, error } = useQuery({
    queryKey: ['books', page, limit, search],
    queryFn: () => getBooks({ page, limit, search }),
  });

  return { 
    books: data?.data || [], 
    totalPages: data?.totalPages || 0,
    currentPage: data?.page || 1,
    totalBooks: data?.total || 0,
    isPending, 
    error 
  };
}

export default useBooks;