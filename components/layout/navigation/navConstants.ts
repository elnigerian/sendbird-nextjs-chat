import {
    CalendarIcon, ChartPieIcon, ChatBubbleLeftEllipsisIcon,
    DocumentDuplicateIcon, FolderIcon, HomeIcon, UsersIcon,
} from '@heroicons/react/24/outline';

export const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: false },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Channels', href: '#', icon: ChatBubbleLeftEllipsisIcon, current: true },
    { name: 'Projects', href: '#', icon: FolderIcon, current: false },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
    { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
];

export const userNavigation = [
    { name: 'Your profile', href: '#' },
    { name: 'Sign out', href: '#' },
]