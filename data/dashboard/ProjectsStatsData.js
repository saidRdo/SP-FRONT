import {BsBriefcaseFill, BsBullseye, BsListTask, BsPeopleFill} from "react-icons/bs";

export const ProjectsStats = [
    {
       id:1,
       title : "Projects",
       value : 18,
       icon: <BsBriefcaseFill size={18}/>,
       statInfo: '<span className="text-dark me-2">2</span> Completed' 
    },
    {
        id:2,
        title : "Active Task",
        value : 132,
        icon: <BsListTask size={18}/>,
        statInfo: '<span className="text-dark me-2">28</span> Completed' 
     },
     {
        id:3,
        title : "Teams",
        value : 12,
        icon: <BsPeopleFill size={18}/>,
        statInfo: '<span className="text-dark me-2">1</span> Completed' 
     },
     {
        id:4,
        title : "Productivity",
        value : '76%',
        icon: <BsBullseye size={18}/>,
        statInfo: '<span className="text-dark me-2">5%</span> Completed' 
     }
];
export default ProjectsStats;
