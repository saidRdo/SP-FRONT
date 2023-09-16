// import node module libraries
import { Col, Row, Form, Card, Button } from 'react-bootstrap';

// import hooks
import useMounted from 'hooks/useMounted';

const EmailSetting = ({lang}) => {
  const hasMounted = useMounted();
  return (
    <Row className="mb-8">
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
            <div className="mb-6">
              <h4 className="mb-1">{lang?.SettingsPage?.ComponentEmailSetting?.ComponentEmail?.title}</h4>
            </div>
            {hasMounted &&
              <Form>
                {/* New email */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="newEmailAddress">
                    {lang?.SettingsPage?.ComponentEmailSetting?.ComponentEmail?.Form?.LblNewEmail}
                  </Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="email" placeholder={lang?.SettingsPage?.ComponentEmailSetting?.ComponentEmail?.Form?.NewEmailPlaceHolder}
                                  id="newEmailAddress" required />
                  </Col>
                  <Col md={{ offset: 4, span: 8 }} xs={12} className="mt-3">
                    <Button variant="primary" type="submit">
                      {lang?.SettingsPage?.SaveChanges}
                    </Button>
                  </Col>
                </Row>
              </Form>
            }
            <div className="mb-6 mt-6">
              <h4 className="mb-1">
                {lang?.SettingsPage?.ComponentEmailSetting?.ComponentChangePassword?.title}
              </h4>
            </div>
            {hasMounted &&
              <Form>
                {/* Current password */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="currentPassword">
                    {lang?.SettingsPage?.ComponentEmailSetting?.ComponentChangePassword?.Form?.LblCurrentPassword}
                  </Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="password" placeholder={lang?.SettingsPage?.ComponentEmailSetting?.ComponentChangePassword?.Form.CurrentPasswordPlaceHolder} id="currentPassword" required />
                  </Col>
                </Row>

                {/* New password */}
                <Row className="mb-3">
                  <Form.Label className="col-sm-4" htmlFor="newPassword">
                    {lang?.SettingsPage?.ComponentEmailSetting?.ComponentChangePassword?.Form?.LblNewPassword}
                  </Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="password" placeholder={lang?.SettingsPage?.ComponentEmailSetting?.ComponentChangePassword?.Form?.NewPasswordPlaceHolder} id="newPassword" required />
                  </Col>
                </Row>

                {/* Confirm new password */}
                <Row className="align-items-center">
                  <Form.Label className="col-sm-4" htmlFor="confirmNewpassword">
                    {lang?.SettingsPage?.ComponentEmailSetting?.ComponentChangePassword?.Form?.LblConfirmNewPassword}
                  </Form.Label>
                  <Col md={8} xs={12}>
                    <Form.Control type="password" placeholder={lang?.SettingsPage?.ComponentEmailSetting?.ComponentChangePassword?.Form?.ConfirmNewPasswordPlaceHolder} id="confirmNewpassword" required />
                  </Col>
                  {/* list */}
                  <Col md={lang?.lang==="ar"?{ offset: 4, span: 8 }:{ offset: 4, span: 8 }} xs={12} className="mt-4">
                    <h5 className="mb-1">{lang?.SettingsPage?.ComponentEmailSetting?.ComponentChangePassword?.Form?.Notes.Title}</h5>
                    <p>{lang?.SettingsPage?.ComponentEmailSetting?.ComponentChangePassword?.Form?.Notes.subTitle}</p>
                    <ul>
                      <li> {lang?.SettingsPage?.ComponentEmailSetting?.ComponentChangePassword?.Form?.Notes.requirement1}</li>
                      <li>{lang?.SettingsPage?.ComponentEmailSetting?.ComponentChangePassword?.Form?.Notes.requirement2}</li>
                      <li>{lang?.SettingsPage?.ComponentEmailSetting?.ComponentChangePassword?.Form?.Notes.requirement3}</li>
                      <li>{lang?.SettingsPage?.ComponentEmailSetting?.ComponentChangePassword?.Form?.Notes.requirement4}</li>
                    </ul>
                    <Button variant="primary" type="submit">
                      {lang?.SettingsPage?.SaveChanges}
                    </Button>
                  </Col>
                </Row>

              </Form>
            }
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default EmailSetting