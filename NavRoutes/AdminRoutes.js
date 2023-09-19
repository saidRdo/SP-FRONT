"use client"
import { v4 as uuid } from 'uuid';
import {AiFillSetting, AiOutlineHome, AiOutlineUsergroupAdd} from "react-icons/ai";
import {useDictionary} from "@/components/DictionaryProvider/DictionaryProvider";
import {usePathname} from "next/navigation";
import {FaGripHorizontal, FaParking} from "react-icons/fa";

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
            title: dictionary.AdminRoutes.Agents.title+" & "+
                dictionary.AdminRoutes.Zone.title +" & "+
                dictionary.AdminRoutes.Parking.title,
            grouptitle: true
        },
        {
            id: uuid(),
            title: dictionary.AdminRoutes.Agents.title,
            icon: <AiOutlineUsergroupAdd style={{margin:"5px"}}/>,
            children: [
                { id: uuid(), link: '#', name:  dictionary.AdminRoutes.Agents.addAgents },
                { id: uuid(), link: '#', name:  dictionary.AdminRoutes.Agents.listAgents }
            ]
        },
        {
            id: uuid(),
            title: dictionary.AdminRoutes.Zone.title,
            icon: <FaGripHorizontal style={{margin:"5px"}}/>,
            children: [
                { id: uuid(), link: '#', name:  dictionary.AdminRoutes.Zone.addZone },
                { id: uuid(), link: '#', name:  dictionary.AdminRoutes.Zone.listZones }
            ]
        },
        {
            id: uuid(),
            title: dictionary.AdminRoutes.Parking.title,
            icon: <FaParking style={{margin:"5px"}}/>,
            children: [
                { id: uuid(), link: '#', name:  dictionary.AdminRoutes.Parking.addParking },
                { id: uuid(), link: '#', name:  dictionary.AdminRoutes.Parking.listParking }
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
            title: dictionary.AdminRoutes.settings,
            grouptitle: true
        },
        {
            id: uuid(),
            title: dictionary.AdminRoutes.settings,
            icon: <AiFillSetting style={{margin:"5px"}}/>,
            link: `/${pathName.split('/')[1]}/dashboard/settings`,
        },
        {
            id: uuid(),
            title: "Login ",
            icon: <AiFillSetting style={{margin:"5px"}}/>,
            link: `/${pathName.split('/')[1]}/authentication/sign-in`,
        },
    ];

    return Menu;
};

export default AdminMenu;

