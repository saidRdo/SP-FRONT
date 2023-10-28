import {Alert, Button, Col, Form, Row} from "react-bootstrap";
import { useLoadScript} from "@react-google-maps/api";
import {useState} from "react";
import Map from "@/sub-components/maps/maps";
import dynamic from "next/dynamic";
import {BsCheckCircleFill} from "react-icons/bs";
import {CreateZoneController} from "@/Controller/Zone/CreateZone";

const CreateZone = ({city,setzoneData,accesstoken}) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBwqCCHiuZJJDAnxKiqWSDWzW5m8ty6QCc" // Add your API key
    });
    const [ZoneData,setZoneData]=useState({
        zone:{
            name:"",
            lat:"",
            lng:""
        },
        cityid:city && city.id
    })
    const [AlertSeuccess,setAlertSeuccess]=useState("none")
    const [loading,setLoading]=useState(false)


    const handleRefreshErrors = () => {
        const LoginError = document.querySelectorAll('.lblError')
        LoginError.forEach((p) => {
            p.textContent = '';
        })
    }
    const handleSubmit=()=>{
        setLoading(true)
        if (ZoneData?.zone.name==""){
            setLoading(false)
            document.getElementById('name').style.border = '1px solid red';
            return document.getElementById('ErrorzoneName').textContent="This field is required"
        }
        if (ZoneData?.zone.lat==""|| ZoneData?.zone?.lng==""){
            setLoading(false)
            return document.getElementById('Errormap').textContent="This field is required"
        }
        CreateZoneController(ZoneData,accesstoken).then(res=>{
            //console.log(res)
            if(res?.data && res?.status===200){
                setZoneData({
                    zone:{
                        name:"",
                        lat:"",
                        lng:""
                    },
                    cityid:city && city.id
                })
                setzoneData(prevState => {
                    return [
                            ...prevState,
                        {
                            id: res?.data.id,
                            zone: res?.data.name,
                            lat: res?.data.lat,
                            lng: res?.data.lng,
                            agent: res?.data?.agent ? res?.data?.agent.user.username : "This zone does not have any agent"
                        }
                    ]
                })
                setAlertSeuccess("flex")
                setTimeout(()=>{setAlertSeuccess("none")},4000)
                setLoading(false)
            }
            if (res?.response?.status===403 && res?.response?.data?.message){
                setLoading(false)
                return document.getElementById('ErrorzoneName').textContent=res?.response?.data?.message;
            }
        }).catch(error=> {
            setLoading(false)
            console.error(error)
        })
    }


    return (
            <Form>
                <Row className={"mb-3"}>
                    <Col md={12} xl={12}>
                        <Alert variant="success " className={`d-${AlertSeuccess}`}><BsCheckCircleFill size={25} className="me-1"  /> The Zone was added successfully</Alert>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="City">
                        City
                    </Form.Label>
                    <Col md={12} xs={12} sm={12}>
                        <Form.Control type="text" value={city.name} id="City" disabled={true}/>
                    </Col>
                </Row>
                {/* row */}
                <Row className="mb-3">
                    <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="name">
                        Name
                    </Form.Label>
                    <Col md={12} xs={12} sm={12}>
                        <Form.Control type="text" value={ZoneData.zone.name} placeholder="Zone name" id="name" required
                                      onKeyUp={handleRefreshErrors}
                                      onChange={(e) => {
                                          setZoneData(prevData => {
                                              return {
                                                  ...prevData,
                                                  zone: {
                                                      ...prevData.zone,
                                                      name: e.target.value
                                                  }
                                              }
                                          });
                                      }}
                        />
                        <p className={"text-sm text-red-700 lblError"} id={"ErrorzoneName"} ></p>
                    </Col>
                </Row>
                {/* row */}
                <Row className="mb-3">
                    <Form.Label className="col-sm-4 col-form-label form-label" htmlFor="name">
                        Location
                    </Form.Label>
                </Row>
                <Row className={"mb-3"}>
                    <Col md={12} xs={12} sm={12}>
                        <p className={"text-sm text-red-700 lblError"} id={"Errormap"} ></p>
                        {isLoaded&&<Map setZoneData={setZoneData}/>}
                    </Col>
                </Row>
                {/*  className={`mt-4  ${lang?.lang==="ar"?"offset-rtl":''}`}   */}
                <Col md={{ offset: 0, span: 12 }} xs={12} className={`mt-4`}>
                    <Button variant="primary" className={"text-white"} disabled={loading} onClick={(e)=>handleSubmit(e)}>
                        Create zone
                    </Button>
                </Col>
            </Form>

    )
}
export default dynamic(() => Promise.resolve(CreateZone), { ssr: false });