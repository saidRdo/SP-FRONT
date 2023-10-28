import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import React, {useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import {Spinner} from "react-bootstrap";
import fetchZones from "@/Controller/Zone/ZoneDataList";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";


const ZoneSection = (props) => {
    const [Options,setOptions]=useState([])
    const [ZoneSelected,setZoneSelected]=useState(Options[0]);
    const {data:session}=useSession();
    const [loading,setLoading]=useState(true)

    useEffect(() => {
        if (session?.user?.admin?.city?.id){
            fetchZones(session?.user?.admin?.city?.id,session?.user?.accessToken)
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
            <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                {
                        loading && !Options?
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                            :
                            <Autocomplete
                                onChange={(event, newValue) => {
                                    setZoneSelected(newValue);
                                    //console.log(newValue)
                                }}
                                inputValue={Options?.value}
                                id="controllable-states-demo"
                                options={Options}
                                defaultValue={"zone A"}
                                renderInput={(params) => <TextField key={...props.key} {...params} InputProps={{...params.InputProps, style: { color: 'white' } }} variant={"standard"}  />}
                            />
                }
            </FormControl>
        </div>
    )
}

export default ZoneSection;