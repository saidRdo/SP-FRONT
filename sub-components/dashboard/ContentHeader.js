import {Col, Form} from "react-bootstrap";
import {FormSelect} from "@/widgets";

export const ContentHeader = () => {
    const countryOptions = [
        { value: 'sm', label: 'Sidi Maarouf' },
        { value: 'bsk', label: 'Bouskoura' },
        { value: 'he', label: 'Hay Elhassany' },
        { value: '2m', label: '2 Mars' }
    ];
    return (
        <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center mb-2 mb-lg-0">
                <h3 className="mb-0 text-white">Zone : </h3>
                <Col md={8} xs={12}>
                    <Form.Control as={FormSelect} defaultselected={"sm"} placeholder="Select Country" id="country" options={countryOptions} />
                </Col>
            </div>
            <div>
                <h2 className="mb-0 text-white">City : Casablanca </h2>
            </div>
        </div>
    )
}
