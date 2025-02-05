import { makeAPICall } from '../../api';
import { SiteInfoModal} from '../../domains/siteInfo';
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { GET_SITE_INFO_LIST } from '../../endpoints';


    function getSiteInfoQueryList(options?: Partial<UseQueryOptions<SiteInfoModal[]>>
      ) {
        return {
          ...options,
          queryKey: [GET_SITE_INFO_LIST],
          queryFn: async () => {
            return await makeAPICall<SiteInfoModal[]>(
                GET_SITE_INFO_LIST
            );
          },
        };
      }     
export function useGetSiteInfoListQuery(
    options?: Partial<UseQueryOptions<SiteInfoModal[]>>
  ) {
    return useQuery(getSiteInfoQueryList(options));
  }
      