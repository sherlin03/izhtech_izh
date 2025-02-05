import { MenuItem } from "../types/MenuItems";

export const menuItems: MenuItem[] = [
  {
    id: "home",
    label: "Home",
    icon: null,
    path: "/",
  },
  {
    id: "about",
    label: "About Us",
    icon: null,
    path: "/about",
  },
  {
    id: "service",
    label: "Service",
    icon: null,
    path: "/service",
  },

  {
    id: "project",
    label: "Project",
    icon: null,
    path: "/project",
    children: [
      {
        id: "oasissportopia",
        label: "Oasis Sportopia",
        icon: null,
        path: "/oasissportopia",
      },
      {
        id: "subha",
        label: "Subha Dental",
        icon: null,
        path: "/subhadental",
      },
      {
        id: "digital",
        label: "Digital Marketing",
        icon: null,
        path: "/digital",
      },
      {
        id: "add marketing",
        label: "Ad Marketing",
        icon: null,
        path: "/admarketing",
      },
    ],
  },




  {
    id: "blog",
    label: "Blog",
    icon: null,
    path: "/blog",
  },
  {
    id: "contact",
    label: "Contact Us",
    icon: null,
    path: "/contact",
  },
];
