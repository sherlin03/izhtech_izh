
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { makeAPICall } from '../../api';
import { PostModel } from '../../domains/post';
import { GET_POST_LIST } from '../../endpoints';


    function getPostQueryList(options?: Partial<UseQueryOptions<PostModel[]>>
      ) {
        return {
          ...options,
          queryKey: [GET_POST_LIST],
          queryFn: async () => {
            return await makeAPICall<PostModel[]>(
                GET_POST_LIST
            );
          },
        };
      }     
export function useGetPostQueryListQuery(
    options?: Partial<UseQueryOptions<PostModel[]>>
  ) {
    return useQuery(getPostQueryList(options));
  }
      