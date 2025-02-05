
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { makeAPICall } from '../../api';
import { ContactModel } from '../../domains/contact';
import { GET_CONTACT_LIST } from '../../endpoints';


    function getContactQueryList(options?: Partial<UseQueryOptions<ContactModel[]>>
      ) {
        return {
          ...options,
          queryKey: [GET_CONTACT_LIST],
          queryFn: async () => {
            return await makeAPICall<ContactModel[]>(
                GET_CONTACT_LIST
            );
          },
        };
      }     
export function useGetContactQueryList(
    options?: Partial<UseQueryOptions<ContactModel[]>>
  ) {
    return useQuery(getContactQueryList(options));
  }