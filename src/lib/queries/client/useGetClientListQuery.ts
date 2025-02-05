import { makeAPICall } from "../../api";
import { ClientModel } from "../../domains/client";
import { GET_ALL_CLIENTS } from "../../endpoints";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";

function getAllClientsListQuery(
  options?: Partial<UseQueryOptions<ClientModel[]>>
) {
  return {
    ...options,
    queryKey: [GET_ALL_CLIENTS],
    queryFn: async () => {
      return await makeAPICall<ClientModel[]>(GET_ALL_CLIENTS, {}, {}, {});
    },
  };
}
export function useGetAllClientsListQuery(
  options?: Partial<UseQueryOptions<ClientModel[]>>
) {
  return useQuery(getAllClientsListQuery(options));
}
