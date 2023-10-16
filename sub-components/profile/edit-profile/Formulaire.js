import * as React from 'react';
import {useState} from "react";
import "@/Styles/ModelUserProfile.css"
import {AiOutlineEdit} from "react-icons/ai";
import TextField from "@mui/material/TextField";
import {Button} from "react-bootstrap";

export default function FormulaireEdit({user}) {

    const [data,setData]=useState({
        username:user?.user?.username,
        phone:user?.user?.phone,
        email:user?.user?.email,
        adresse:user?.city?.name,
        role:"Admin "+user?.city?.name,
    });
    const [avatar,setAvatar]=useState(user && user?.user?.picture)
    const handlepic=(data)=> {
        const imageFile = data.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(imageFile);
        console.log("reader",reader)
        reader.onload = function(evt){
         console.log("result",evt.target.result)
            setAvatar(evt.target.result)
        }
    }

    return (
        <div className="box box-primary">
            <div className="box-body box-profile">
                <div>
                    <div className="avatar-upload">
                        <div className="avatar-edit">
                             <input
                                 type="file"
                                 id="imageUpload"
                                 accept=".png, .jpg, .jpeg"
                                 onChange={(e)=>handlepic(e)}
                             />
                             <label  htmlFor={"imageUpload"}  >
                                 <AiOutlineEdit />
                             </label>
                        </div>
                        <div className="avatar-preview">
                            <img
                                className="avatar-xxl rounded-circle border border-4 border-white-color-40"
                                id="imagePreview"
                                src={!avatar?"/images/avatar/avatar-1.jpg":avatar}
                                alt="User profile picture"
                            />
                        </div>
                    </div>
                    <hr/>
                    <div className={"subTitle"} >
                        <h5 >Informations personnelles</h5>
                    </div>
                    <div className={"d-block form"}>
                        <div className={"input-grp"}>
                            <TextField id="outlined-basic" defaultValue={data?.username} label="Username" variant="outlined" />
                            <p className={"lblError"}></p>
                        </div>
                        <div className={"input-grp"}>
                            <TextField id="outlined-basic"  defaultValue={data?.email}  label="Email" variant="outlined" />
                            <p className={"lblError"}></p>
                        </div>
                        <div className={"input-grp"}>
                            <TextField id="outlined-basic"  defaultValue={data?.phone}  label="Phone" variant="outlined" />
                        </div>
                        <div className={"input-grp"}>
                            <TextField id="outlined-basic"  defaultValue={data?.adresse}  label="Location" variant="outlined" />
                        </div>
                        <div className={"input-grp"}>
                            <TextField id="outlined-basic"  value={data?.role} label="Role" variant="outlined" readonly={true} disabled={true} />
                        </div>
                        <div className={"SaveButtom mt-2"}>
                            <Button variant="primary" className={"text-white"} onClick={() => console.log(data) }>
                                Save Changes
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};