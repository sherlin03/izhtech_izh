export type MenuItem = {
    id: string;
    path: string;
    label: string;
    icon: null;
    children?: MenuItem[];
  };