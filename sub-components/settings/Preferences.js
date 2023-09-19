// import node module libraries
import { Col, Row, Form, Card, Button } from 'react-bootstrap';

// import widget as custom components
import { FormSelect } from 'widgets';
import LocaleSwitcher from "@/components/locale-switcher";

const Preferences = ({lang}) => {

  const langaugeOptions = [
    { value: 'ar', label: `${lang.SettingsPage.ComponentPrefereces?.ComponentPrefereces.Form.SelectOptions.item1}` },
    { value: 'fr', label: `${lang.SettingsPage.ComponentPrefereces?.ComponentPrefereces.Form.SelectOptions.item2}` },
    { value: 'en', label: `${lang.SettingsPage.ComponentPrefereces?.ComponentPrefereces.Form.SelectOptions.item3}` }
  ];


  return (
    <Row className="mb-8">
      <Col xl={3} lg={4} md={12} xs={12}>
        <div className="mb-4 mb-lg-0">
          <h4 className="mb-1">{lang.SettingsPage.ComponentPrefereces?.Title}</h4>
          <p className="mb-0 fs-5 text-muted">{lang.SettingsPage.ComponentPrefereces?.subTitle}</p>
        </div>
      </Col>
      <Col xl={9} lg={8} md={12} xs={12}>
        <Card id="preferences">
          <Card.Body>
            <div className="mb-6">
              <h4 className="mb-1">{lang.SettingsPage.ComponentPrefereces?.Title}</h4>
            </div>

            {/* Langauge */}
              <Row className="mb-3">
                <Form.Label className="col-md-4 mb-5" htmlFor="langauge">
                  {lang.SettingsPage.ComponentPrefereces?.ComponentPrefereces.Form.LblLangauge}
                </Form.Label>
                <Col md={4} xs={12} className={""}>
                  <div className={"switcherLang"} >
                    <LocaleSwitcher/>
                  </div>
                </Col>
              </Row>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default Preferences