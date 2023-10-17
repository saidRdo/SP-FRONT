"use client"
import { v4 as uuid } from 'uuid';
import {AiFillSetting, AiOutlineHome, AiOutlineUsergroupAdd} from "react-icons/ai";
import {useDictionary} from "@/components/DictionaryProvider/DictionaryProvider";
import {usePathname} from "next/navigation";
import {FaGripHorizontal} from "react-icons/fa";
import {MdAssignmentTurnedIn} from "react-icons/md";

const AdminMenu = () => {
    const dictionary = useDictionary();
    const pathName = usePathname();


    const Menu  = [
        {
            id: uuid(),
            title: dictionary.AdminRoutes.Home,
            icon: <AiOutlineHome style={{margin:"5px"}}/>,
            link: `/${pathName.split('/')[1]}/dashboard`
        },
        {
            id: uuid(),
            title: dictionary.AdminRoutes.Agents+" & "+
                dictionary.AdminRoutes.Zone,
            grouptitle: true
        },
        {
            id: uuid(),
            title: dictionary.AdminRoutes.Agents,
            icon: <AiOutlineUsergroupAdd style={{margin:"5px"}}/>,
            link: `/${pathName.split('/')[1]}/dashboard/agents`
        },
        {
            id: uuid(),
            title: dictionary.AdminRoutes.Zone,
            icon: <FaGripHorizontal style={{margin:"5px"}}/>,
            link: `/${pathName.split('/')[1]}/dashboard/zone`
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
            title: dictionary.AdminRoutes.settings,
            grouptitle: true
        },
        {
            id: uuid(),
            title: dictionary.AdminRoutes.settings,
            icon: <AiFillSetting style={{margin:"5px"}}/>,
            link: `/${pathName.split('/')[1]}/dashboard/settings`,
        },
    ];

    return Menu;
};

export default AdminMenu;

