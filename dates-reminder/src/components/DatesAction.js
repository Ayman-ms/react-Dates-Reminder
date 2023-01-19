import React from 'react'
import { Row, Col } from 'react-bootstrap'
const DatesAction = ({deleteData,onViewData}) => {
    return (
        <Row className="justify-content-center my-2 ">
          <Col sm="8" className="d-flex justify-content-between">
            <button onClick={deleteData} className="btn-style p-2">Delete All</button>
            <button onClick={onViewData} className="btn-style p-2">Show</button>
          </Col>
        </Row>
    )
}

export default DatesAction
