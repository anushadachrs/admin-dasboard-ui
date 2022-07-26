import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <MdIcons.MdDashboard/>,
    cName: 'nav-text'
  },
  {
    title: 'Chat History',
    path: '/chathistory',
    icon: <RiIcons.RiChatHistoryFill />,
    cName: 'nav-text'
  },
  {
    title: 'Services',
    path: '/services',
    icon: <MdIcons.MdMiscellaneousServices />,
    cName: 'nav-text'
  },
  {
    title: 'Companies',
    path: '/companies',
    icon: <RiIcons.RiBuilding2Fill />,
    cName: 'nav-text'
  }
];