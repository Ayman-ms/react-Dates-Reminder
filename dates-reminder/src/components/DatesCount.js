import React from 'react'
import { Row, Col } from 'react-bootstrap'

const DatesCount = ({ person }) => {
    return (
        <Row className="justify-content-center my-2">
            <Col sm="8" className="">
                You Have {person.length} Dates.
            </Col>
        </Row>
    )
}

export default DatesCount
