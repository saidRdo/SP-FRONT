import {Button, Card, Col, Form, Image, Row} from "react-bootstrap";
import {FormSelect} from "@/widgets";
import {useState} from "react";

const CreateAgent = () => {

    const PermissionsOptions = [
        { value: 'per1', label: 'per1' },
        { value: 'per2', label: 'per2' },
        { value: 'per3', label: 'per3' }
    ];


    const GeneratePassword=(len)=>{
        let password="";
        while (password.length<len){
            password += Math.random().toString(36).slice(2)
        }
        //console.log(password.slice(0,len))

        return document.getElementById('password').value= password.slice(0,len);
    }

    const CopiePassword=(password)=>{
        const lbl=document.getElementById("textCopiedsuccess")
        navigator.clipboard.writeText(password).then(r =>{
            lbl.innerText="Password copied!!!"
            setTimeout(()=>{lbl.innerText=""},1000)
        })
    }

    return (
        <Card>
            {/* card body */}
            <Card.Body>
                <div>
                    <Form>

                        <Row className="mb-3">
                            <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="username">
                                User name
                            </Form.Label>
                            <Col md={8} xs={12}>
                                <Form.Control type="text" placeholder="User name" id="username" required />
                            </Col>
                        </Row>
                        {/* row */}
                        <Row className="mb-3">
                            <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="email">
                                Email
                            </Form.Label>
                            <Col md={8} xs={12}>
                                <Form.Control type="email" placeholder="Email" id="email" required />
                            </Col>
                        </Row>
                        {/* row */}
                        <Row className="mb-3">
                            <Form.Label className="col-sm-4" htmlFor="password">
                                Password
                            </Form.Label>
                            <Col md={8} xs={12} className={"d-flex align-items-center"}>
                                <Form.Control type="text" onClick={(e)=>CopiePassword(e.target.value)} placeholder="*********" id="password" readOnly={true} />
                                <button className={"ml-2 mr-2"} onClick={()=>GeneratePassword(12)}>Generate</button>
                            </Col>
                            <p className={"lbl-password-copied"} id={"textCopiedsuccess"}></p>
                        </Row>
                        {/* row */}
                        <Row className="mb-3">
                            <Form.Label className="col-sm-4" htmlFor="city">
                                City
                            </Form.Label>
                            <Col md={8} xs={12}>
                                <Form.Control type="text" placeholder="City" id="city" />
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Form.Label className="col-sm-4" htmlFor="Permissions">
                                Permissions
                            </Form.Label>
                            <Col md={8} xs={12}>
                                <Form.Control as={FormSelect} placeholder="Select your Permissions" id="Permissions" options={PermissionsOptions} />
                            </Col>
                        </Row>
                        {/*  className={`mt-4  ${lang?.lang==="ar"?"offset-rtl":''}`}   */}
                        <Col md={{ offset: 4, span: 8 }} xs={12} className={`mt-4`}>
                            <Button variant="primary" className={"text-white"} type="submit">
                                Create
                            </Button>
                        </Col>
                    </Form>

                </div>
            </Card.Body>
        </Card>
    )
}
export default CreateAgent;
