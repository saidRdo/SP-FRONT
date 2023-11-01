import {Alert, Button, Card, Col, Form, Image, Row} from "react-bootstrap";
import {FormSelect} from "@/widgets";
import {useState} from "react";
import {CreateAgentController} from "@/Controller/Agent/CreateAgent";
import {BsCheckCircleFill} from "react-icons/bs";

const CreateAgent = ({city,SetAgentsData,accesstoken}) => {
    const [FirstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [user,setUser]=useState({
        code:"",
        username:"",
        email:"",
        password:"",
        phone:""
    })
    const [AlertSeuccess,setAlertSeuccess]=useState("none")
    const handleChange=(e)=>{
        return(
            setUser({
                ...user,
                [e.target.name]:e.target.value
            })
        )
    }
    const GeneratePassword=(len)=>{
        let password="";
        while (password.length<len){
            password += Math.random().toString(36).slice(2)
        }
        //console.log(password.slice(0,len))
        setUser({
            ...user,
            "password":password.slice(0,len)
        })
        handleRefreshErrors()
        return document.getElementById('password').value= password.slice(0,len);
    }

    const CopiePassword=(password)=>{
        const lbl=document.getElementById("textCopiedsuccess")
        if (password!==""){
            navigator.clipboard.writeText(password).then(r =>{
                lbl.innerText="Password copied!!!"
                setTimeout(()=>{lbl.innerText=""},1000)
            })
        }
    }
    const handleRefreshErrors = () => {
        const LoginError = document.querySelectorAll('.lblError')
        LoginError.forEach((p) => {
            p.textContent = '';
        })
    }
    const handleSubmitAgent=(e)=>{
        e.preventDefault();
        if (!FirstName || FirstName.length < 4) {
            const prenomError = document.querySelector('#ErrorFirstName')
            const inputprenom = document.querySelector('#FirstName')
            if (FirstName.length === 0) {
                inputprenom.style.border = '1px solid red';
                return prenomError.textContent = 'Ce champ est Obligatoire';
            } else if (FirstName.length <= 4) {
                inputprenom.style.border = '1px solid red';
                return prenomError.textContent = 'Ce champ doit contenir au moins 4 caractères ';
            }
        }
        if (!lastName || lastName.length < 4) {
            const prenomError = document.querySelector('#ErrorlastName')
            const inputprenom = document.querySelector('#lastName')
            if (lastName.length === 0) {
                inputprenom.style.border = '1px solid red';
                return prenomError.textContent = 'Ce champ est Obligatoire';
            } else if (lastName.length <= 4) {
                inputprenom.style.border = '1px solid red';
                return prenomError.textContent = 'Ce champ doit contenir au moins 4 caractères ';
            }
        }
        if (!user?.email || user?.email) {
            const ErrorEmail = document.querySelector('#Erroremail')
            const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            const inputemail = document.querySelector('#email')
            if (!user?.email) {
                ErrorEmail.textContent = 'Ce champ est Obligatoire';
                return inputemail.style.border = '1px solid red';
            } else if (!mailformat.test(user?.email)) {
                inputemail.style.border = '1px solid red';
                return ErrorEmail.textContent = 'Votre e-mail invalide devrait ressembler à ceci : example@example.com';
            }
        }
        if (!user?.password || user?.password.length < 8) {
            const Errorpassword = document.querySelector('#Errorpassword')
            const inputpassword = document.querySelector('#password')
            if (user?.password.length === 0) {
                inputpassword.style.border = '1px solid red';
                return Errorpassword.textContent = 'Ce champ est Obligatoire';
            } else if (user?.password.length < 8) {
                inputpassword.style.border = '1px solid red';
                return Errorpassword.textContent = 'Le mot de passe doit comporter au moins 8 caractères';
            }
        }
        if (!user?.code || user?.code) {
            const Errorcode = document.querySelector('#Errorcode')
            const codeRegex = /^[A-Z]{1,2}[0-9]{4,8}$/;
            const inputcode = document.querySelector('#code')
            if (!user?.code) {
                Errorcode.textContent = 'Ce champ est Obligatoire';
                return inputcode.style.border = '1px solid red';
            } else if (!codeRegex.test(user?.code)) {
                return Errorcode.textContent = 'Votre code invalide devrait ressembler à ceci : A12345 ';
            }
        }
       
        if (!user?.phone || user?.phone.length !== 10 || isNaN(user?.phone)) {
            const Errorphone = document.querySelector('#Errorphone')
            const inputphone = document.querySelector('#phone')
            const decimail = /^\d+$/;

            if (!user?.phone) {
                Errorphone.textContent = 'Ce champ est Obligatoire';
                return inputphone.style.border = '1px solid red';
            } else if (!decimail.test(user?.phone) || user?.phone.length !== 10) {
                inputphone.style.border = '1px solid red';
                return Errorphone.textContent = "Votre numéro n'est pas valide. Entrez un numéro à 10 chiffres";
            }
        }

        CreateAgentController({
            user,
            city:{
                id:city&&city
            },
            roleId:2,
            description:`Agent ${user?.username}`,
            typeUser:"Agent"
        },accesstoken).then(res=>{
            //console.log(res)
            if(res?.data && res?.status===200){
                setUser({
                    code:"",
                    username:"",
                    email:"",
                    password:"",
                    phone:""
                });
                setAlertSeuccess("flex")
                //console.log(res?.data)
                SetAgentsData((prevAgentsData) => {
                    return [...prevAgentsData, {
                        id: res?.data.id,
                        username: res?.data.username,
                        cin: res?.data.code,
                        phone: res?.data.phone,
                        picture:  res?.data.picture,
                        email:  res?.data.email,
                        city: "Casablanca",
                        zone: "He has no zone",
                        zonesId:0,
                        created_at: res?.data.createAt.split("T")[0].replace(/-/g, "/")
                    }];
                });
                setTimeout(()=>{setAlertSeuccess("none")},4000)
            }
            if(res.response?.data && res?.response?.data?.httpStatus===403){
                document.querySelector('#email').style.border = '1px solid red';
                document.querySelector('#Erroremail').textContent=res?.response?.data?.message;
            }
        }).catch(error=> {
            console.error(error)
        })
    }

    return (
        <Form>
                <Row>
                    <Col md={12} xl={12}>
                        <Alert variant="success " className={`d-${AlertSeuccess}`}><BsCheckCircleFill size={25} className="me-1"  /> The Agent was added successfully</Alert>
                    </Col>
                </Row>
                <Row>
                    <Col md={6} xs={6}>
                            <Form.Label className="col-form-label form-label" htmlFor="FirstName">
                                First Name
                            </Form.Label>
                            <Form.Control type="text" placeholder="First Name" id="FirstName" value={FirstName} required onKeyUp={handleRefreshErrors} onChange={(e)=>setFirstName(e.target.value)}/>
                            <p className={"text-sm text-red-700 lblError"} id={"ErrorFirstName"}></p>
                        </Col>
                    <Col md={6} xs={6}>
                        <Form.Label className="col-form-label form-label" htmlFor="lastName">
                            Last Name
                        </Form.Label>
                        <Form.Control type="text" placeholder="LastName" id="lastName" value={lastName} required onKeyUp={handleRefreshErrors} onChange={(e)=>setLastName(e.target.value)}/>
                        <p className={"text-sm text-red-700 lblError"} id={"ErrorlastName"}></p>
                    </Col>
                </Row>
                {/* row */}
                <Row>
                    <Col md={12} xs={12}>
                        <Form.Label className="col-form-label form-label" htmlFor="email">
                            Email
                        </Form.Label>
                        <Form.Control type="email" placeholder="Email" id="email" required value={user?.email} name={"email"}  onKeyUp={handleRefreshErrors} onChange={(e)=>handleChange(e)}/>
                        <p className={"text-sm text-red-700 lblError"} id={"Erroremail"}></p>
                    </Col>
                </Row>
                {/* row */}
                <Row>
                        <Form.Label className="col-form-label form-label" htmlFor="password">
                            Password
                        </Form.Label>
                    <Col md={8} xs={8}>
                        <Form.Control type="text" value={user?.password} onClick={(e)=>CopiePassword(e.target.value)} name={"password"} placeholder="*********" id="password" readOnly={true} onChange={(e)=>handleChange(e)}/>
                        <p className={"lbl-password-copied"} id={"textCopiedsuccess"}></p>
                        <p className={"text-sm text-red-700 lblError"} id={"Errorpassword"}></p>
                    </Col>
                    <Col md={4} xs={4}>
                        <button className={"btn btn-success text-white w-100"} onClick={(e)=> {
                                e.preventDefault();
                                GeneratePassword(12)
                            }}>Generate</button>
                    </Col>
                    
                </Row>
                {/* row */}
                <Row>
                    <Col md={6} xs={6}>
                            <Form.Label className="col-form-label form-label" htmlFor="cin">
                                Cin
                            </Form.Label>
                            <Form.Control type="text" placeholder="Cin" id="code" value={user?.code} name={"code"} required onKeyUp={handleRefreshErrors} onChange={(e)=>handleChange(e)}/>
                            <p className={"text-sm text-red-700 lblError"} id={"Errorcode"} ></p>
                        </Col>
                    <Col md={6} xs={6}>
                        <Form.Label className="col-form-label form-label" htmlFor="username">
                        Phone
                        </Form.Label>
                        <Form.Control type="text" placeholder="phone" id="phone" onKeyUp={handleRefreshErrors} value={user?.phone} onChange={(e)=>handleChange(e)} name={"phone"}/>
                        <p className={"text-sm text-red-700 lblError"} id={"Errorphone"}></p>
                    </Col>
                </Row>
                
                <Row>
                    <Col md={12} xs={12} className={`mt-4`}>
                        <Button variant="primary" className={"text-white w-100"} onClick={handleSubmitAgent}>
                            Create Agent
                        </Button>
                    </Col>
                </Row>
            </Form>
    )
}
export default CreateAgent;
