'use client'

// import node module libraries
import { Row, Col, Card, Form, Image } from 'react-bootstrap';
import Link from 'next/link';

// import hooks
import useMounted from '@/hooks/useMounted';
import dynamic from "next/dynamic";
import LocaleSwitcher from "@/components/locale-switcher";
import React, {useState} from "react";
import {useDictionary} from "@/components/DictionaryProvider/DictionaryProvider";
import SigninButton from "@/components/AuthComponents/SignInButton/SigninButton";

const SignIn = () => {
    const hasMounted = useMounted();
    const dictionary = useDictionary();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [DisplayPassword, setDisplayPassword] = useState(false);

    const handleRefreshErrors = () => {
        const LoginError = document.querySelectorAll('.lblerror')
        LoginError.forEach((p) => {
            p.textContent = '';
        })
    }


    return (
        <Row dir={dictionary.lang == 'ar' ? 'rtl' : 'ltr'} className="align-items-center justify-content-center g-0 min-vh-100">
            <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
                {/* Card */}
                <Card className="smooth-shadow-md">
                    {/* Card body */}
                    <Card.Body className="p-6">
                        <div className="mb-4">
                            <Link href="#"><Image src="../../images/brand/logo/sm-logo.png" className="m-auto" alt="" /></Link>
                            <p className="m-auto">{dictionary.LoginPage.LoginTitle}</p>
                        </div>
                        {/* Form */}
                        {hasMounted &&
                            <Form>
                                {/* Username */}
                                <Form.Group className="mb-3" controlId="username">
                                    <Form.Label>{dictionary.LoginPage.LoginEmailInput}</Form.Label>
                                    <Form.Control type="email" name="username" placeholder="Johane@example.com" required=""
                                                  defaultValue={email}
                                                  id={"email"}
                                                  onChange={(e)=>setEmail(e.target.value)}
                                                  onKeyUp={handleRefreshErrors}/>
                                    <p className={"lblerror text-red-600 dark:text-red-400"} id={"ErrorEmail"}></p>

                                </Form.Group>

                                {/* Password */}
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label>{dictionary.LoginPage.LoginPasswordInput}</Form.Label>
                                    <Form.Control name="password"
                                                  defaultValue={password}
                                                  id={"password"}
                                                  onKeyUp={handleRefreshErrors}
                                                  onChange={(e)=>setPassword(e.target.value)}
                                                  placeholder="***************"
                                                  type={DisplayPassword?"text":"password"}  required="" />
                                    <p className={"lblerror text-red-600 dark:text-red-400"} id={"ErrorPassword"}></p>

                                </Form.Group>

                                {/* Checkbox */}
                                <div className="d-lg-flex justify-content-between align-items-center mb-4">
                                    <Form.Check type="checkbox" id="rememberme">
                                        <Form.Check.Input type="checkbox" onClick={()=>setDisplayPassword(!DisplayPassword)}/>
                                        <Form.Check.Label>{dictionary.LoginPage.ShowPassword}</Form.Check.Label>
                                    </Form.Check>
                                </div>
                                <div>
                                    {/* Button */}
                                    <div className="d-grid">
                                        <SigninButton email={email} password={password}/>
                                    </div>
                                    <div className="d-md-flex justify-content-between mt-4">
                                        <div>
                                            <Link href="#" className="text-inherit fs-5">
                                                {dictionary.LoginPage.ForgotPassword}
                                            </Link>
                                        </div>
                                        <div>
                                            <LocaleSwitcher />
                                        </div>
                                    </div>
                                </div>
                            </Form>}


                    </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}


export default dynamic(() => Promise.resolve(SignIn), { ssr: false });