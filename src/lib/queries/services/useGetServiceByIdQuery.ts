/* eslint-disable react-hooks/rules-of-hooks */
import {
    useQuery,
    UseQueryOptions,
    UseQueryResult,
  } from '@tanstack/react-query';
  import { GET_SERVICES_BY_ID } from '../../endpoints';
  import { ServicesModal } from '../../domains/services';
  import { makeAPICall } from '../../api';
  
  
function getServiceById(
    serviceId: string,
    options?: Partial<UseQueryOptions<ServicesModal>>
  ): UseQueryOptions<ServicesModal> {
    return {
      ...options,
      queryKey: [GET_SERVICES_BY_ID, serviceId],
      queryFn: async () => {
        return await makeAPICall<ServicesModal>(
          GET_SERVICES_BY_ID,
          {},
          { id: serviceId },
          { id: serviceId }
        );
      },
    };
  }
  export function usegetServiceByIdQuery(
    id: string,
    options?: Partial<UseQueryOptions<ServicesModal>>
  ): UseQueryResult<ServicesModal> {
    return useQuery(getServiceById(id, options));
  }