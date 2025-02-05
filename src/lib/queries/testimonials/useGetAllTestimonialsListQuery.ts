import { makeAPICall } from "../../api";
import { TestimonialsModel } from "../../domains/testimonials";
import { GET_ALL_TESTIMONIALS } from "../../endpoints";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";

function getAllTestimonialsListQuery(
  options?: Partial<UseQueryOptions<TestimonialsModel[]>>
) {
  return {
    ...options,
    queryKey: [GET_ALL_TESTIMONIALS],
    queryFn: async () => {
      return await makeAPICall<TestimonialsModel[]>(GET_ALL_TESTIMONIALS, {}, {}, {});
    },
  };
}
export function useGetAllTestimonialsListQuery(
  options?: Partial<UseQueryOptions<TestimonialsModel[]>>
) {
  return useQuery(getAllTestimonialsListQuery(options));
}
