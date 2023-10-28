// import node module libraries
import {Col, Row, Form, Card, Button, Spinner, Alert} from 'react-bootstrap';
import {useState} from "react";
import * as React from "react";
import {UpdatePasswordController} from "@/Controller/profile/UpdatePassword";
import {BsCheckCircleFill} from "react-icons/bs";


const EmailSetting = ({lang,user}) => {
  const [DisplayPassword,setDisplayPassword]=useState(false);
  const [currentPassword,setCurrentPassword]=useState('');
  const [newPassword,setNewPassword]=useState('');
  const [ConfirmPassword,setConfirmPassword]=useState('');
  const [loading,setLoading]=useState(false);
  const [disabledBtn,setDisabledBtn]=useState(true);
  const [SuccssAlert, setSuccssAlert] = useState(false)


  const handleRefreshErrors = () => {
    const LoginError = document.querySelectorAll('.lblError')
    LoginError.forEach((p) => {
      p.textContent = '';
    })
  }
  const handleChangePassword=(e)=> {
    e.preventDefault();
    setLoading(true)
    setDisabledBtn(true)
    if (currentPassword.length===0 || currentPassword==="" || currentPassword.length<8){
      setLoading(false)
      setDisabledBtn(false)
      const current=document.getElementById("Errorcurrentpassword")
      if (currentPassword.length===0 || currentPassword===""){
        return current.textContent=`${lang.GestionErrors.obligatoire}`
      }
      if (currentPassword.length<8){
        return current.textContent=`${lang.GestionErrors.passwordM8}`
      }
    }
    if (newPassword.length===0 || newPassword==="" || newPassword.length<8){
      setLoading(false)
      setDisabledBtn(false)
      const current=document.getElementById("Errornewpassword")
      if (newPassword.length===0 || newPassword===""){
        return current.textContent=`${lang.GestionErrors.obligatoire}`
      }
      if (newPassword.length<8){
        return current.textContent=`${lang.GestionErrors.passwordM8}`
      }
    }
    if (ConfirmPassword.length===0 || ConfirmPassword==="" || ConfirmPassword !== newPassword){
      setLoading(false)
      setDisabledBtn(false)
      const current=document.getElementById("Errorconfpassword")
      if (ConfirmPassword.length===0 || ConfirmPassword===""){
        return current.textContent=`${lang.GestionErrors.obligatoire}`
      }
      if ( ConfirmPassword !== newPassword){
        return current.textContent=`${lang.GestionErrors.passwordNotmatched}`
      }
    }
    UpdatePasswordController({
      email:user.admin.user.email,
      currentPassword: currentPassword,
      newPassword: newPassword,
      confirmNewPassword: ConfirmPassword
    },user?.accessToken)
        .then(resp=>{
          setLoading(false)
          setDisabledBtn(false)
          if (resp?.response?.data?.httpStatus===403 && resp.response?.data?.message){
            setCurrentPassword('')
            setNewPassword('')
            setConfirmPassword('')
            document.getElementById("Errorcurrentpassword").textContent=`${lang.GestionErrors.currentPasswordIncorrect}`;
          }
          if (resp?.status===200){
            setCurrentPassword('')
            setNewPassword('')
            setConfirmPassword('')
            setSuccssAlert(true)
            setTimeout(()=>{
              setSuccssAlert(false)
            },2000)
          }
        })
        .catch(error=>{
          setLoading(false)
          setDisabledBtn(false)
          console.error(error)
        })
  }

  return (
    <Row className="mb-5 mt-5">
      <Col xl={3} lg={4} md={12} xs={12}>
        <div className="mb-4 mb-lg-0">
          <h4 className="mb-1">{lang?.SettingsPage?.ComponentEmailSetting?.Title}</h4>
          <p className="mb-0 fs-5 text-muted">{lang?.SettingsPage?.ComponentEmailSetting?.SubTitle} </p>
        </div>
      </Col>
      <Col xl={9} lg={8} md={12} xs={12}>
        {/* card */}
        <Card id="edit">

          {/* card body */}
          <Card.Body>
            <div className="mb-5">
              <h4 className="mb-1">
                {lang?.SettingsPage?.ComponentEmailSetting?.ComponentChangePassword?.title}
              </h4>
              {
                  SuccssAlert && <Alert variant="success " className={"d-flex align-items-center mt-4"}><BsCheckCircleFill size={25} className="me-1"  /> {lang.GestionErrors.passwordChangedSuccess}</Alert>
              }
            </div>
              <Form>
                {/* Current password */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="currentPassword">
                    {lang?.SettingsPage?.ComponentEmailSetting?.ComponentChangePassword?.Form?.LblCurrentPassword}
                  </Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type={DisplayPassword?"text":"password"} value={currentPassword} placeholder={lang?.SettingsPage?.ComponentEmailSetting?.ComponentChangePassword?.Form.CurrentPasswordPlaceHolder} id="currentPassword"
                                  onChange={(e)=> {
                                    setLoading(false)
                                    setCurrentPassword(e.target.value)
                                  }}
                                  onKeyUp={(e)=> {
                                    if(e.target.value.length>0){
                                      setDisabledBtn(false)
                                    }else {
                                      setDisabledBtn(true)
                                    };
                                    handleRefreshErrors()
                                  }}/>
                    <p className={"lblError"} id={"Errorcurrentpassword"}></p>
                  </Col>
                </Row>
                {/* New password */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="newPassword">
                    {lang?.SettingsPage?.ComponentEmailSetting?.ComponentChangePassword?.Form?.LblNewPassword}
                  </Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type={DisplayPassword?"text":"password"} value={newPassword} placeholder={lang?.SettingsPage?.ComponentEmailSetting?.ComponentChangePassword?.Form?.NewPasswordPlaceHolder} id="newPassword"
                                  onChange={(e)=> {
                                    setLoading(false)
                                    setNewPassword(e.target.value)
                                  }}
                                  onKeyUp={()=>handleRefreshErrors()}/>
                    <p className={"lblError"} id={"Errornewpassword"}></p>
                  </Col>
                </Row>
                {/* Confirm new password */}
                <Row className="align-items-center">
                  <Form.Label className="col-sm-4" htmlFor="confirmNewpassword">
                    {lang?.SettingsPage?.ComponentEmailSetting?.ComponentChangePassword?.Form?.LblConfirmNewPassword}
                  </Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type={DisplayPassword?"text":"password"} value={ConfirmPassword} placeholder={lang?.SettingsPage?.ComponentEmailSetting?.ComponentChangePassword?.Form?.ConfirmNewPasswordPlaceHolder} id="confirmNewpassword"
                                  onChange={(e)=> {
                                    setLoading(false)
                                    setConfirmPassword(e.target.value)
                                  }}
                                  onKeyUp={()=>handleRefreshErrors()}/>
                    <p className={"lblError"} id={"Errorconfpassword"}></p>
                  </Col>

                  {/* list */}
                  <Col md={{ offset: 4, span: 8}} xs={12} className={`mt-4  ${lang?.lang==="ar"?"offset-rtl":''}`}>
                    {/* Checkbox */}
                    <div className="d-lg-flex justify-content-between align-items-center mb-4">
                      <Form.Check type="checkbox" id="rememberme">
                        <Form.Check.Input type="checkbox" onClick={()=>setDisplayPassword(!DisplayPassword)}/>
                        <Form.Check.Label>{lang?.LoginPage.ShowPassword}</Form.Check.Label>
                      </Form.Check>
                    </div>

                    <h5 className="mb-1">{lang?.SettingsPage?.ComponentEmailSetting?.ComponentChangePassword?.Form?.Notes.Title}</h5>
                    <p>{lang?.SettingsPage?.ComponentEmailSetting?.ComponentChangePassword?.Form?.Notes.subTitle}</p>
                    <ul>
                      <li> {lang?.SettingsPage?.ComponentEmailSetting?.ComponentChangePassword?.Form?.Notes.requirement1}</li>
                      <li>{lang?.SettingsPage?.ComponentEmailSetting?.ComponentChangePassword?.Form?.Notes.requirement2}</li>
                      <li>{lang?.SettingsPage?.ComponentEmailSetting?.ComponentChangePassword?.Form?.Notes.requirement3}</li>
                      <li>{lang?.SettingsPage?.ComponentEmailSetting?.ComponentChangePassword?.Form?.Notes.requirement4}</li>
                    </ul>
                    <Button variant="primary" className={"text-white w-100"} disabled={disabledBtn} onClick={(e)=>handleChangePassword(e)} type="submit">
                      {
                        loading ? (
                              <Spinner animation="border" size="sm" role="status">
                                <span className="visually-hidden">Loading...</span>
                              </Spinner>
                          ) :
                          lang?.SettingsPage?.SaveChanges
                      }
                    </Button>
                  </Col>
                </Row>
              </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default EmailSetting