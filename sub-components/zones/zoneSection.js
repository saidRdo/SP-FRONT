import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import {Spinner} from "react-bootstrap";
import fetchZones from "@/data/Zones/ZoneDataList";


const ZoneSection = (props) => {
    const [Options,setOptions]=useState([])
    const defaultZoneSelected=1;
    const {data:session}=useSession();
    const [loading,setLoading]=useState(true)

    useEffect(() => {
        if (session?.user?.admin?.city?.id){
            fetchZones(session?.user?.admin?.city?.id)
                .then(zones=>{
                    if (zones){
                        setLoading(false)
                        return setOptions(zones.map(zone=>{
                            return {value:zone.id, label:zone.name}
                        }))
                    }
                })
                .catch(error=>console.error(error));
        }
    }, [session?.user?.admin?.city?.id]);

    return (
        <div className={"d-flex align-items-center mb-1 mb-lg-0"}>
            <h4 className="mb-0 text-white">{`${props?.dictionary?.zone} : `}  </h4>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                {
                        loading ?
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                            :
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        defaultValue={defaultZoneSelected}
                        className={"text-white bg-blue-400"}
                    >
                        {
                            Options.map(item=><MenuItem value={item.value}>{item.label}</MenuItem> )
                        }
                    </Select>
                }
            </FormControl>
        </div>
    )
}

export default ZoneSection;