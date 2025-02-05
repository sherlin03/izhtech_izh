
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { PostModel } from "../../domains/post";
import { makeAPICall } from "../../api";
import { GET_POST_BY_ID } from "../../endpoints";

function getPostByIdQuery(
    id:string,
    options?: Partial<UseQueryOptions<PostModel>>
) {
  return {
    ...options,
    queryKey: [GET_POST_BY_ID],
    queryFn: async () => {
      return await makeAPICall<PostModel>(
        GET_POST_BY_ID,{},{},{id}
      );
    },
  };
}     
export function useGetPostByIdQuery(
    id:string,
options?: Partial<UseQueryOptions<PostModel>>
) {
return useQuery(getPostByIdQuery(id, options));
}