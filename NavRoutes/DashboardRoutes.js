"use client"
import { v4 as uuid } from 'uuid';
import {AiFillSetting, AiOutlineHome} from "react-icons/ai";
import {useDictionary} from "@/components/DictionaryProvider/DictionaryProvider";

const DashboardMenu = () => {
	const dictionary = useDictionary();

	const Menu  = [

		{
			id: uuid(),
			title: dictionary.SideBar.Home,
			icon: <AiOutlineHome style={{margin:"5px"}}/>,
			link: '/dashboard'
		},
		{
			id: uuid(),
			title: dictionary.SideBar.USEROLE.Title,
			grouptitle: true
		},
		{
			id: uuid(),
			title: dictionary.SideBar.USEROLE.Users.Title,
			icon: <AiOutlineHome style={{margin:"5px"}}/>,
			children: [
				{ id: uuid(), link: '#', name:  dictionary.SideBar.USEROLE.Users.ListUsers }
			]
		},
		{
			id: uuid(),
			title: dictionary.SideBar.USEROLE.Roles.Title,
			icon: <AiOutlineHome style={{margin:"5px"}}/>,
			children: [
				{ id: uuid(), link: '#', name: dictionary.SideBar.USEROLE.Roles.ListRoles }
			]
		},
		{
			id: uuid(),
			title: dictionary.SideBar.PARKINGTEAM.Title,
			grouptitle: true
		},
		{
			id: uuid(),
			title: dictionary.SideBar.PARKINGTEAM.Parking.Title,
			icon: <AiOutlineHome style={{margin:"5px"}}/>,
			children: [
				{ id: uuid(), link: '#', name: dictionary.SideBar.PARKINGTEAM.Parking.ListParking },
			]
		},
		{
			id: uuid(),
			title: dictionary.SideBar.PARKINGTEAM.TEAM.Title,
			icon: <AiOutlineHome style={{margin:"5px"}}/>,
			children: [
				{ id: uuid(), link: '#', name: dictionary.SideBar.PARKINGTEAM.TEAM.ListTeams },
			]
		},

		/*
        {
            id: uuid(),
            title: 'Menu Level',
            icon: 'corner-left-down',
            children: [
                {
                    id: uuid(),
                    link: '#',
                    title: 'Two Level',
                    children: [
                        { id: uuid(), link: '#', name: 'NavItem 1'},
                        { id: uuid(), link: '#', name: 'NavItem 2' }
                    ]
                },
                {
                    id: uuid(),
                    link: '#',
                    title: 'Three Level',
                    children: [
                        {
                            id: uuid(),
                            link: '#',
                            title: 'NavItem 1',
                            children: [
                                { id: uuid(), link: '#', name: 'NavChildItem 1'},
                                { id: uuid(), link: '#', name: 'NavChildItem 2'}
                            ]
                        },
                        { id: uuid(), link: '#', name: 'NavItem 2' }
                    ]
                }
            ]
        }*/

		{
			id: uuid(),
			title: "Settings",
			icon: <AiFillSetting style={{margin:"5px"}}/>,
			link: "dashboard/settings",
		},
	];

	return Menu;
};

export default DashboardMenu;

