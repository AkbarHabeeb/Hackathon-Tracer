import React, { Component } from "react";
import CardCompact from '../Components/cardCompact';
import { Row, Col, Form } from 'react-bootstrap'
import { TextField } from '@material-ui/core';
import Button from '../Components/button';
import '../style.css';
class Home extends Component {
  render() {
    let container = (
      <Row>
        <Col>
          <CardCompact
            bigIcon={<i className="fa fa-clock-o text-warning" />}
            statsText="----"
            statsValue="-"
          />
        </Col>
        <Col>
          <CardCompact
            bigIcon={<i className="fa fa-clock-o text-warning" />}
            statsText="----"
            statsValue="-"
          />
        </Col>
        <Col>
          <CardCompact
            bigIcon={<i className="fa fa-clock-o text-warning" />}
            statsText="----"
            statsValue="-"
          />
        </Col>
        <Col>
          <CardCompact
            bigIcon={<i className="fa fa-clock-o text-warning" />}
            statsText="----"
            statsValue="-"
          />
        </Col>
        <Col>
          <CardCompact
            bigIcon={<i className="fa fa-clock-o text-warning" />}
            statsText="----"
            statsValue="-"
          />
        </Col>
        <Col>
          <CardCompact
            bigIcon={<i className="fa fa-clock-o text-warning" />}
            statsText="----"
            statsValue="-"
          />
        </Col>
      </Row>
    )

    let form = (
      <Row>
        <Col sm="12" lg="4" md="5">
          <div className="card">
            <div className="content">
              <Form name="individualTraceForm">
                <Row>
                  <Col className="u_form">
                    <TextField
                      id="outlined-textarea"
                      name="question"
                      label="Search Order"
                      placeholder="We trace order for you"
                      variant="outlined"
                      value=''
                      fullWidth
                      required
                      size="small"
                    // onChange={e => this.handleChange(e, 0)}
                    />
                  </Col>
                  <Col className="u_button">
                    <Button />
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    )

    return (
      <div>
        <br />
        {form}
        {/* {container} */}
      </div>
    )
  }
}

export default Home;