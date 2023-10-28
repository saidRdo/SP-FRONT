import {Fragment, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import FormulaireEdit from "@/sub-components/profile/edit-profile/Formulaire";

const EditProfile = ({lng,user,updateSession,session}) => {

    const [scrollShow, setScrollShow] = useState(false);

    return (
    <Fragment>
        <Button variant="primary" className={"text-white"} onClick={() => setScrollShow(!scrollShow)}>
            {lng?.profileHeader.editProfile.button}
        </Button>
        <Modal show={scrollShow} onHide={() => setScrollShow(!scrollShow)}>
            <Modal.Header closeButton style={{direction:"ltr"}}>
                <Modal.Title>{lng?.profileHeader.editProfile.popUp.subTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <FormulaireEdit sessionUser={user} lang={lng} session={session} setScrollShow={setScrollShow} updateSession={updateSession}/>
            </Modal.Body>
        </Modal>
    </Fragment>
    )
}
export default EditProfile;