import { faChartPie, faDiagramProject, faTableCellsLarge, faUser } from "@fortawesome/free-solid-svg-icons";
import { IHeaderLinkAdmin } from "./types";

export const headerLinksAdmin: IHeaderLinkAdmin[] = [
    {
        icon: faChartPie,
        label: 'Panel',
        href: '/admin/panel',
    },
    {
        icon: faUser,
        label: 'Usuarios',
        href: '/admin/users',
    },
    {
        icon: faDiagramProject,
        label: 'Tracking',
        href: '/admin/tracking',
    },
    {
        icon: faTableCellsLarge,
        label: 'Blog',
        href: '/admin/blog',
    },
]