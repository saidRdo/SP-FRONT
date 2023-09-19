// import node module libraries
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import LineChart from "@/sub-components/dashboard/charts/LineChart";

const ChartCard = props => {
    const { info } = props;
    return (
        <Card>
            <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <LineChart HoursData={info}/>
                </div>
            </Card.Body>
        </Card>
    )
}

// Typechecking With PropTypes
ChartCard.propTypes = {
    info: PropTypes.any.isRequired
};

export default ChartCard