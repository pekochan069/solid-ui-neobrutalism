type NavItem = {
  title: string;
  href: string;
};

type NavGroup = {
  title: string;
  items: NavItem[];
};

export type { NavItem, NavGroup };
