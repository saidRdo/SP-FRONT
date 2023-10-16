import {Fragment, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import FormulaireEdit from "@/sub-components/profile/edit-profile/Formulaire";

const EditProfile = ({user}) => {

    const [scrollShow, setScrollShow] = useState(false);


    return (
    <Fragment>
        <Button variant="primary" className={"text-white"} onClick={() => setScrollShow(!scrollShow)}>
            Edit profile
        </Button>
        <Modal show={scrollShow} onHide={() => setScrollShow(!scrollShow)}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Profile </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <FormulaireEdit user={user}/>
            </Modal.Body>
        </Modal>
    </Fragment>
    )
}
export default EditProfile;