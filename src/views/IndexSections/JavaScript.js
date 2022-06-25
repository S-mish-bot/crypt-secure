
import React from "react";
import classnames from "classnames";
import Keypad from "./components/Keypad/Keypad";
import Protected from "./components/Protected/Protected";

// reactstrap components
import {
  Button,
  FormGroup,
  Container,
  Row,
  Col,
  Modal,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  UncontrolledCarousel,
} from "reactstrap";

const carouselItems = [
  {
    src: require("assets/img/denys.jpg").default,
    altText: "Slide 1",
    caption: "",
  },
  {
    src: require("assets/img/fabien-bazanegue.jpg").default,
    altText: "Slide 2",
    caption: "",
  },
  {
    src: require("assets/img/mark-finn.jpg").default,
    altText: "Slide 3",
    caption: "",
  },
];

export default function JavaScript() {
  const [demoModal, setDemoModal] = React.useState(false);
  const [demoModal1, setDemoModal1] = React.useState(false);
  const [miniModal, setMiniModal] = React.useState(false);
  const [formModal, setFormModal] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  return (
    <div className="section section-javascript" id="javascriptComponents">
      <img
        alt="..."
        className="path"
        src={require("assets/img/path5.png").default}
      />
      <img
        alt="..."
        className="path path1"
        src={require("assets/img/path5.png").default}
      />
      <Container>
        <h3 className="title mb-5">Crypt Secure components</h3>
        <h4 className="mb-5">Modal</h4>
        <Row id="modals">
          <Col md="4">
            <Button color="primary" onClick={() => setDemoModal(true)}>
              Launch Modal Keypad
            </Button>
          </Col>
  
          <Col md="4">
            <Button color="success" onClick={() => setFormModal(true)}>
              Launch Modal 
            </Button>
          </Col>
          <Col md="4">
            <Button color="warning" onClick={() => setMiniModal(true)}>
              Launch Modal Keypad Random
            </Button>
          </Col>
          {/* Sart Demo Modal */}
          <Modal modalClassName="modal-black" isOpen={demoModal} toggle={() => setDemoModal(false)}>
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setDemoModal(false)}>
                <i className="tim-icons icon-simple-remove" />
              </button>
              <h4 className="title title-up">Normal Keypad</h4>
            </div>
            <div className="modal-body" style={{color: 'black'}}>
         
              <Keypad />
         
            </div>
            <div className="modal-footer">
              {/* <Button color="default" type="button">
                Nice Button
              </Button> */}
              <Button
                color="danger"
                type="button"
                onClick={() => setDemoModal(false)}
              >
                Close
              </Button>
            </div>
          </Modal>
          {/* End Demo Modal */}
          {/* Start Mini Modal */}
          {/* <Modal
            modalClassName="modal-mini modal-primary modal-mini"
            isOpen={miniModal}
            toggle={() => setMiniModal(false)}
          >
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setMiniModal(false)}>
                <i className="tim-icons icon-simple-remove text-white" />
              </button> */}
              {/* <div className="modal-profile">
                <i className="tim-icons icon-single-02" />
              </div> */}
            {/* </div>
            <div className="modal-body">
              <Protected />
            </div>
            <div className="modal-footer">
              <Button className="btn-neutral" color="link" type="button">
                Back
              </Button>
              <Button
                className="btn-neutral"
                color="link"
                onClick={() => setMiniModal(false)}
                type="button"
              >
                Close
              </Button>
            </div>
          </Modal> */}
          {/* End Mini Modal */}
          {/* Start Form Modal */}
          <Modal
            modalClassName="modal-black"
            isOpen={formModal}
            toggle={() => setFormModal(false)}
          >
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setFormModal(false)}>
                <i className="tim-icons icon-simple-remove text-white" />
              </button>
              <h4 className="title title-up">Random Keypad</h4>
              {/* <div className="text-muted text-center ml-auto mr-auto">
                <h3 className="mb-0">Sign in with</h3>
              </div> */}
            </div>
            <div className="modal-body">
              <div className="btn-wrapper text-center">
                <Protected />
                {/* <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/github.svg").default}
                  />
                </Button>
                <Button
                  className="btn-neutral btn-icon"
                  color="default"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <img
                    alt="..."
                    src={require("assets/img/google.svg").default}
                  />
                </Button>
              </div>
              <div className="text-center text-muted mb-4 mt-3">
                <small>Or sign in with credentials</small>
              </div>
              <Form role="form">
                <FormGroup className="mb-3">
                  <InputGroup
                    className={classnames("input-group-alternative", {
                      "input-group-focus": emailFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-email-85" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Email"
                      type="email"
                      onFocus={(e) => setEmailFocus(true)}
                      onBlur={(e) => setEmailFocus(false)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup>
                  <InputGroup
                    className={classnames("input-group-alternative", {
                      "input-group-focus": passwordFocus,
                    })}
                  >
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="tim-icons icon-key-25" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      onFocus={(e) => setPasswordFocus(true)}
                      onBlur={(e) => setPasswordFocus(false)}
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup check className="mt-3">
                  <Label check>
                    <Input defaultChecked type="checkbox" />
                    <span className="form-check-sign" />
                    Remember me!
                  </Label>
                </FormGroup>
                <div className="text-center">
                  <Button className="my-4" color="primary" type="button">
                    Sign in
                  </Button> */}
                {/* </div>
              </Form>
            </div> */}
            </div>
            <div className="modal-footer">
              {/* <Button color="default" type="button">
                Nice Button
              </Button> */}
              <Button
                color="danger"
                type="button"
                onClick={() => setFormModal(false)}
              >
                Close
              </Button>
            </div>
            </div>
          </Modal>
          {/* End Form Modal */}
        </Row>
        <br />
        <br />
 
      </Container>
      <div className="section">
        <Container>
          <div className="title">
            <h3>Security</h3>
          </div>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="text-white font-weight-light">
                Encryption & Decryption
              </h1>
              <p className="text-white mt-4">
              Encryption is the process by which a readable message is converted to an unreadable form to prevent unauthorized parties from reading it. Decryption is the process of converting an encrypted message back to its original (readable) format. The original message is called the plaintext message.
              </p>
              <Button
                className="mt-4"
                color="warning"
                href="#"
              >
               Learn More
              </Button>
            </Col>
            <Col lg="6">
              <UncontrolledCarousel
                items={carouselItems}
                indicators={false}
                autoPlay={false}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
