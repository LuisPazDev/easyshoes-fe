import {
  ButtonGroup,
  Col,
  Dropdown,
  DropdownButton,
  Row,
} from "react-bootstrap";

export const FiltertButton = () => {
  return (
    <>
      <div>
        <h5 className="text-center mt-5">Filter by</h5>
      </div>

      <Row
        xs={3}
        className="text-center mt-4 mb-4 ms-auto me-auto"
        style={{
          maxWidth: "300px",
        }}
      >
        <style>
          {`
      div.dropdown-menu.show {
        background-color: black !important;
      }
    `}
        </style>
        <Col>
          <DropdownButton
            as={ButtonGroup}
            title="Brand"
            id="bg-nested-dropdown"
            variant="outline-danger"
            className="mt-2 mb-2"
          >
            <Dropdown.Item className="text-danger bg-dark p-3" eventKey="1">
              Nike
            </Dropdown.Item>
            <Dropdown.Item className="text-danger bg-dark p-3" eventKey="2">
              Adidas
            </Dropdown.Item>
            <Dropdown.Item className="text-danger bg-dark p-3" eventKey="3">
              Timberland
            </Dropdown.Item>
            <Dropdown.Item className="text-danger bg-dark p-3" eventKey="4">
              Levis
            </Dropdown.Item>
            <Dropdown.Item className="text-danger bg-dark p-3" eventKey="5">
              Converse
            </Dropdown.Item>
          </DropdownButton>
        </Col>

        <Col>
          <DropdownButton
            as={ButtonGroup}
            title="Model"
            id="bg-nested-dropdown"
            variant="outline-danger"
            className="mt-2 mb-2"
          >
            <Dropdown.Item className="text-danger bg-dark p-3" eventKey="1">
              Casual
            </Dropdown.Item>
            <Dropdown.Item className="text-danger bg-dark p-3" eventKey="2">
              Fashion
            </Dropdown.Item>
            <Dropdown.Item className="text-danger bg-dark p-3" eventKey="3">
              Sport
            </Dropdown.Item>
          </DropdownButton>
        </Col>

        <Col>
          <DropdownButton
            as={ButtonGroup}
            title="Size"
            id="bg-nested-dropdown"
            variant="outline-danger"
            className="mt-2 mb-2"
          >
            <Dropdown.Item className="text-danger bg-dark p-3" eventKey="1">
              8
            </Dropdown.Item>
            <Dropdown.Item className="text-danger bg-dark p-3" eventKey="2">
              9
            </Dropdown.Item>
            <Dropdown.Item className="text-danger bg-dark p-3" eventKey="3">
              10
            </Dropdown.Item>
            <Dropdown.Item className="text-danger bg-dark p-3" eventKey="4">
              11
            </Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
    </>
  );
};
