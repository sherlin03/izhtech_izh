import {
    useQuery,
    UseQueryOptions,
    UseQueryResult,
  } from '@tanstack/react-query';
import { GET_SERVICES_LIST } from '../../endpoints';
import { ServicesModal } from '../../domains/services';
import { makeAPICall } from '../../api';


  function getServiceList(options?:UseQueryOptions<ServicesModal[]>
                         ): UseQueryOptions<ServicesModal[]> {
            return {
                ...options,
                queryKey: [GET_SERVICES_LIST],
                queryFn: async () => {
                    const data=await makeAPICall<ServicesModal[]>(
                        GET_SERVICES_LIST
                    );
                    return data;
                  },
            }
  }
  export function useGetServicesListQuery(options?:UseQueryOptions<ServicesModal[]>
  ): UseQueryResult<ServicesModal[]>{
    return useQuery(getServiceList(options));
  }