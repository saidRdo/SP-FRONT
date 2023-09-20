import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ZoneOptions from "@/data/select/ZoneOptions";

export const ContentHeader = () => {

    const defaultZoneSelected="sm";

    return (
        <div className="d-flex justify-content-between align-items-center flex-wrap-reverse">
            <div className="d-flex align-items-center mb-2 mb-lg-0">
                <h3 className="mb-0 text-white">Zone : </h3>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        defaultValue={defaultZoneSelected}
                        className={"text-white"}
                    >
                        {
                            ZoneOptions.map(item=><MenuItem value={item.value}>{item.label}</MenuItem> )
                        }
                    </Select>
                </FormControl>

            </div>
            <div className={"mb-4"}>
                <h2 className="mb-0 text-white">City : Casablanca </h2>
            </div>
        </div>
    )
}
