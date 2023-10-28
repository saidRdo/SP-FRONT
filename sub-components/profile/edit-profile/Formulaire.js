import * as React from 'react';
import {useState} from "react";
import "@/Styles/ModelUserProfile.css"
import {AiOutlineEdit} from "react-icons/ai";
import TextField from "@mui/material/TextField";
import {Alert, Button, Spinner} from "react-bootstrap";
import {maskPhoneNumber} from "@/utils/maskphonenumber";
import {UpdateProfileController} from "@/Controller/profile/UpdateProfile";
import Cloudinary from "@/hooks/Cloudinary";
import {BsCheckCircleFill} from "react-icons/bs";

export default function FormulaireEdit({lang,setScrollShow,sessionUser,updateSession,session}) {

    const [data, setData] = useState({
        id: sessionUser?.user?.id,
        username: sessionUser?.user?.username,
        phone: sessionUser?.user?.phone,
        picture: sessionUser?.user?.picture
    });
    const [avatar, setAvatar] = useState(sessionUser && sessionUser?.user?.picture)
    const [loading, setLoading] = useState(false)
    const [SuccssAlert, setSuccssAlert] = useState(false)
    const [disabledBtn,setDisabledBtn]=useState(true)


    const handlepic =async (e) => {
        setLoading(true)
        const imageFile = e.target.files[0];

        const fdata = new FormData();
        fdata.append("file", imageFile);
        fdata.append("upload_preset", "sparking");
        fdata.append("cloud_name", "dd4mrn9jy");
        Cloudinary.post('', fdata).then((res)=>{
            if (res.status==200){
                setAvatar(res.data.url)
                setLoading(false)
            }
        }).catch(error=>console.error(error))
        const reader = new FileReader();
        reader.readAsDataURL(imageFile);
        //console.log("reader",reader)
        reader.onload = function (evt) {
            /*
             console.log("result",evt.target.result)
            */
            setAvatar(evt.target.result)
        }

    }

    const handleChnageInput=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value,
        })
    }
    const handleRefreshErrors = () => {
        setDisabledBtn(false)
        const LoginError = document.querySelectorAll('.lblError')
        LoginError.forEach((p) => {
            p.textContent = '';
        })
    }
    const handleUpdate=()=>{
        setLoading(true)
        setDisabledBtn(true)

        if (!data?.username || data?.username.length < 4) {
            const prenomError = document.querySelector('#Errorusername')
            const inputprenom = document.querySelector(".username")
            if (data?.username.length === 0) {
                setLoading(false)
                setDisabledBtn(false)
                return prenomError.textContent = `${lang?.GestionErrors.obligatoire}`;
            } else if (data?.username.length <= 4) {
                setLoading(false)
                setDisabledBtn(false)
                return prenomError.textContent =  `${lang?.GestionErrors.lenghtM4}`;
            }
        }

        UpdateProfileController({
            id:data.id,
            username: `${data.username}`,
            picture:avatar
        },session?.user?.accessToken).then(user=>{
            console.log(user)
            if (user.data){
                const userUpdated=user.data;
                updateSession({
                    ...session,
                    user:{
                        ...session.user,
                        admin:{
                            ...session.user.admin,
                            user:userUpdated
                        }
                    }
                });
                setLoading(false)
                setSuccssAlert(true)
                setTimeout(()=>{
                    setScrollShow(false)
                },2000)
            }
        }).catch(err=>console.error(err))

    }

        return (
            <div className="box box-primary">
                <div className="box-body box-profile">
                    <div>
                        {
                            SuccssAlert && <Alert variant="success " className={"d-flex align-items-center"}><BsCheckCircleFill size={25} className="me-1"  /> {lang?.profileHeader.editProfile.popUp?.profileUpdatedMsg}</Alert>
                        }
                        <div className="avatar-upload">
                            <div className="avatar-edit">
                                <input
                                    type="file"
                                    id="imageUpload"
                                    accept=".png, .jpg, .jpeg"
                                    onChange={(e) => handlepic(e)}
                                />
                                <label htmlFor={"imageUpload"}>
                                    <AiOutlineEdit/>
                                </label>
                            </div>
                            <div className="avatar-preview">
                                <img
                                    className="avatar-xxl rounded-circle border border-4 border-white-color-40"
                                    id="imagePreview"
                                    src={!avatar ? "/images/avatar/defaultIMG.png" : avatar}
                                    alt="User profile picture"
                                />
                            </div>
                        </div>
                        <hr/>
                        <div className={"subTitle"}>
                            <h5>{lang?.profileHeader.editProfile.popUp?.subTitle}</h5>
                        </div>
                        <div className={"d-block form"}>
                            <div className={"input-grp"}>
                                <TextField id="outlined-basic" className={"username"} name={"username"} defaultValue={data?.username}
                                           label={`${lang?.profileHeader.editProfile.popUp.fullName}`} variant="outlined" onKeyUp={()=>handleRefreshErrors()} onChange={(e)=>handleChnageInput(e)}/>
                                <p className={"lblError"} id={"Errorusername"}></p>
                            </div>
                            {/*

                            <div className={"input-grp"}>
                                <TextField id="outlined-basic" defaultValue={data?.email} name={"email"} label={`${lang?.profileHeader.editProfile.popUp.email}`}
                                           variant="outlined"  readonly={true} />
                                <p className={"lblError"}></p>
                            </div>
                            <div className={"input-grp"}>
                                <TextField id="outlined-basic" defaultValue={maskPhoneNumber(data?.phone)} name={"phone"} label={`${lang?.profileHeader.editProfile.popUp.phone}`}
                                           variant="outlined"  readonly={true} />
                            </div>

                            */}
                            <div className={"SaveButtom mt-2"}>
                                <Button variant="primary" className={"text-white"} disabled={disabledBtn} onClick={() => handleUpdate()}>
                                    {
                                        loading ? (
                                                        <Spinner animation="border" size="sm" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner>
                                                    ):
                                            (lang?.profileHeader.editProfile.popUp.saveChanges)
                                    }
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );

}