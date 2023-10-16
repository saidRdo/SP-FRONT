import {Card} from "react-bootstrap";
import ZoneSection from "@/sub-components/zones/zoneSection";

export const ContentHeader = (props) => {

    return (
        <div className="d-flex justify-content-between align-items-center flex-wrap">
                <Card.Header className="py-0 mb-1">
                    <h4 className="mb-0 text-white">City : {props?.AdminCity?.name}</h4>
                </Card.Header>
                <div className="d-flex align-items-center mb-1 mb-lg-0">
                    <ZoneSection cityID={props?.AdminCity?.id}/>
                </div>
        </div>
    )
}
