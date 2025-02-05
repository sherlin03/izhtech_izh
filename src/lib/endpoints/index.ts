import { EndpointDetails } from "./type";


export const GET_SERVICES_LIST = `GET_SERVICES`;
export const GET_POST_LIST = `GET_POST_LIST`;
export const GET_CATEGORY_LIST = `GET_CATEGORY_LIST`;
export const GET_CONTACT_LIST = `GET_CONTACT_LIST`;
export const GET_SERVICES_BY_ID = `GET_SERVICES_BY_ID`;
export const ADD_CONTACTS = `ADD_CONTACTS`;
export const GET_SITE_INFO_LIST = `GET_SITE_INFO_LIST`;
export const GET_ALL_TESTIMONIALS = `GET_ALL_TESTIMONIALS`;
export const GET_POST_BY_ID =`GET_POST_BY_ID`;
export const GET_ALL_CLIENTS = `GET_ALL_CLIENTS`;


export default <EndpointDetails>{
    [GET_SERVICES_LIST]:{
        requestType: `GET`,
        endpoint:`/api/services`,
      },
      [GET_POST_LIST]: {
        requestType: `GET`,
        endpoint: `/api/post`,
      },
      [GET_CATEGORY_LIST]: {
        requestType: `GET`,
        endpoint: `/api/admin/category`,
      },
      [GET_CONTACT_LIST]: {
        requestType: `POST`,
        endpoint: `/api/contact`,
      },
      [GET_SERVICES_BY_ID]: {
        requestType: `GET`,
        endpoint: `/api/services/[id]`,
      },
      [ADD_CONTACTS]: {
        requestType: `POST`,
        endpoint: `/api/contact`,
      },
      [GET_SITE_INFO_LIST]:{
        requestType: `GET`,
        endpoint: `/api/siteInfo`
      },
      [GET_ALL_TESTIMONIALS]:{
        requestType: `GET`,
        endpoint: `/api/testimonials`
      },
      [GET_POST_BY_ID]: {
        requestType: `GET`,
        endpoint: `/api/post/[id]`,
      },
      [GET_ALL_CLIENTS]: {
        requestType: `GET`,
        endpoint: `/api/client`,
      },
}
