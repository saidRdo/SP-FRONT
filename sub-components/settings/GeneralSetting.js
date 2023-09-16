// import node module libraries
import { Col, Row, Form, Card, Button, Image } from 'react-bootstrap';

// import widget as custom components
import { FormSelect, DropFiles } from 'widgets';

// import hooks
import useMounted from 'hooks/useMounted';
import {useState} from "react";

const GeneralSetting = ({lang}) => {
  const hasMounted = useMounted();
  const countryOptions = [
    { value: 'India', label: 'India' },
    { value: 'US', label: 'US' },
    { value: 'UK', label: 'UK' },
    { value: 'UAE', label: 'UAE' }
  ];
  const [avatar,setAvatar]=useState()
  const handleChangeAvatar=(data)=>{

    const imageFile = data.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(imageFile);
    console.log("reader",reader)
    reader.onload = function(evt){
      //console.log("result",evt.target.result)
      setAvatar(evt.target.result)
    }

  }

  return (
    <Row className="mb-8">
      <Col xl={3} lg={4} md={12} xs={12}>
        <div className="mb-4 mb-lg-0">
          <h4 className="mb-1">{lang?.SettingsPage?.ComponentSettingGeneral?.Title}</h4>
          <p className="mb-0 fs-5 text-muted">{lang?.SettingsPage?.ComponentSettingGeneral?.SubTitle}</p>
        </div>
      </Col>
      <Col xl={9} lg={8} md={12} xs={12}>
        <Card>
          {/* card body */}
          <Card.Body>
            <div className=" mb-6">
              <h4 className="mb-1">{lang?.SettingsPage?.ComponentSettingGeneral?.Component?.title}</h4>
            </div>
            <Row className="align-items-center mb-8">
              <Col md={3} className="mb-3 mb-md-0">
                <h5 className="mb-0">{lang?.SettingsPage?.ComponentSettingGeneral?.Component?.avatar}</h5>
              </Col>
              <Col md={9}>
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <Image src={avatar?avatar:"/images/avatar/avatar-5.jpg"} className="rounded-circle avatar avatar-lg" alt="" />
                  </div>
                  <div>
                    <input type={"file"} id={"avatarFromSetting"} hidden={true} onChange={(e)=>handleChangeAvatar(e)}/>
                    <Button variant="outline-white" className="me-2" type="submit"
                            onClick={()=>document.getElementById('avatarFromSetting').click()}>
                      {lang?.SettingsPage?.ComponentSettingGeneral?.Component.ChangeButtom}
                    </Button>
                    <Button variant="outline-white" type="submit"
                    onClick={()=>setAvatar(null)}>
                      {lang?.SettingsPage?.ComponentSettingGeneral?.Component?.RemoveButtom}
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
            <div>
              <div className="mb-6">
                <h4 className="mb-1">{lang?.SettingsPage?.ComponentSettingGeneral?.Component.personalInformation?.title}</h4>
              </div>
              {hasMounted && 
              <Form>
                <Row className="mb-3">
                  <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="username">
                    {lang?.SettingsPage?.ComponentSettingGeneral?.Component.personalInformation?.Form?.LblUsername}
                  </Form.Label>
                  <Col sm={8} className="mb-3 mb-lg-0">
                    <Form.Control type="text" placeholder={lang?.SettingsPage?.ComponentSettingGeneral?.Component.personalInformation?.Form?.UsernamePlaceHolder} id="username" required />
                  </Col>
                </Row>
                {/* row */}
                <Row className="mb-3">
                <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="email">
                  {lang?.SettingsPage?.ComponentSettingGeneral?.Component.personalInformation?.Form?.LblEmail}
                </Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="email" placeholder={lang?.SettingsPage?.ComponentSettingGeneral?.Component.personalInformation?.Form?.EmailPlaceHolder} id="email" required />
                  </Col>
                </Row>
                {/* row */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="phone">
                    {lang?.SettingsPage?.ComponentSettingGeneral?.Component.personalInformation?.Form?.LblPhone}
                    <span className="text-muted">({lang?.SettingsPage?.ComponentSettingGeneral?.Component.personalInformation?.Form?.Optional})</span></Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder={lang?.SettingsPage?.ComponentSettingGeneral?.Component.personalInformation?.Form?.PhonePlaceHolder} id="phone" />
                  </Col>
                </Row>

                {/* Location */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="country">
                    {lang?.SettingsPage?.ComponentSettingGeneral?.Component.personalInformation?.Form?.LblLocation}
                  </Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control as={FormSelect} placeholder="Select Country" id="country" options={countryOptions} />
                  </Col>
                </Row>

                {/* Address Line One
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="addressLine">Address line 1</Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="Enter Address line 1" id="addressLine" required />
                  </Col>
                </Row>*/}



                {/* Zip code */}
                <Row className="align-items-center">
                  <Form.Label className="col-sm-4" htmlFor="zipcode">
                    {lang?.SettingsPage?.ComponentSettingGeneral?.Component.personalInformation?.Form?.Code}
                  </Form.Label>

                  <Col md={8} xs={12}>
                    <Form.Control type="text" placeholder="Code" id="zipcode" required />
                  </Col>

                  <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-4">
                    <Button variant="primary" type="submit">
                      {lang?.SettingsPage?.SaveChanges}
                    </Button>
                  </Col>

                </Row>
              </Form>

              }
            </div>
          </Card.Body>
        </Card>

      </Col>
    </Row>
  )
}

export default GeneralSetting