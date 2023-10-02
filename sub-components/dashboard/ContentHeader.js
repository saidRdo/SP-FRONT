import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ZoneOptions from "@/data/Zones/ZoneOptions";
import {Card} from "react-bootstrap";

export const ContentHeader = () => {

    const defaultZoneSelected="sm";

    return (
        <div className="d-flex justify-content-between align-items-center flex-wrap">
                <Card.Header className="py-0 mb-1">
                    <h4 className="mb-0 text-white">City : Casablanca</h4>
                </Card.Header>
                <div className="d-flex align-items-center mb-1 mb-lg-0">
                    <div className={"d-flex align-items-center mb-1 mb-lg-0"}>
                        <h4 className="mb-0 text-white">Zone : </h4>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                defaultValue={defaultZoneSelected}
                                className={"text-white bg-blue-400"}
                            >
                                {
                                    ZoneOptions.map(item=><MenuItem value={item.value}>{item.label}</MenuItem> )
                                }
                            </Select>
                        </FormControl>
                    </div>
                </div>
        </div>
    )
}
