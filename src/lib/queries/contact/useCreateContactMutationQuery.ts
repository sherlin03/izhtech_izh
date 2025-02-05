import { useMutation} from '@tanstack/react-query';
import { makeAPICall } from '../../api';
import { ADD_CONTACTS } from '../../endpoints';
import { ContactModel } from '../../domains/contact';

export function useCreateContactMutationQuery(){
    return useMutation({ mutationFn: async (payload: ContactModel) => {
        const response = await makeAPICall<ContactModel>(
            ADD_CONTACTS,
            payload,
        );
          return response;
    },
    
    })
}