interface SideBarMenu {
  path: string;
  title: string;
  iconClass: string;
  hasSubmenu: boolean;
  submenus: { path: string; title: string }[];
  subMenuIsActive: boolean;
}

export const SIDEBAR_MENU: SideBarMenu[] = [
  {
    path: '/admin-dashboard',
    title: 'Tableau de board',
    iconClass: 'fa-solid fa-desktop ',
    hasSubmenu: false,
    submenus: [],
    subMenuIsActive: false,
  },
  {
    path: '/admin-dashboard',
    title: 'Utilisateur',
    iconClass: 'fa-regular fa-user ',
    hasSubmenu: true,
    subMenuIsActive: true,
    submenus: [
      {
        path: 'admin/list-utilisateur',
        title: 'liste utilisateur',
      },
      {
        path: 'admin/ajouter-utilisateur',
        title: 'ajouter Utilisateur',
      },
    ],
  },
  {
    path: 'admin/list-tajet',
    title: 'Liste trajet',
    iconClass: 'fa-solid fa-route ',
    hasSubmenu: false,
    submenus: [],
    subMenuIsActive: false,
  },
]
