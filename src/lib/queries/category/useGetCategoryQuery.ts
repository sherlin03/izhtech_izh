
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { CategoryModel } from '../../domains/category';
import { makeAPICall } from '../../api';
import { GET_CATEGORY_LIST } from '../../endpoints';


    function getCategoryQueryList(options?: Partial<UseQueryOptions<CategoryModel[]>>
      ) {
        return {
          ...options,
          queryKey: [GET_CATEGORY_LIST],
          queryFn: async () => {
            return await makeAPICall<CategoryModel[]>(
              GET_CATEGORY_LIST
            );
          },
        };
      }


      
export function useGetCategoryQueryListQuery(
    options?: Partial<UseQueryOptions<CategoryModel[]>>
  ) {
    return useQuery(getCategoryQueryList(options));
  }
      