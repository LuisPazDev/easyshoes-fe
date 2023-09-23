import { useContext } from "react";
import { ShoesContext } from "../context/ShoesContext";
import {
  ButtonGroup,
  Col,
  Dropdown,
  DropdownButton,
  Row,
} from "react-bootstrap";

export const FiltertButton = () => {
  // get data from shoes context
  const { filterBySelection } = useContext(ShoesContext);

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
            <Dropdown.Item
              onClick={() => filterBySelection("Nike")}
              className="text-danger bg-dark p-3"
              eventKey="1"
            >
              Nike
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => filterBySelection("Adidas")}
              className="text-danger bg-dark p-3"
              eventKey="2"
            >
              Adidas
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => filterBySelection("Timberland")}
              className="text-danger bg-dark p-3"
              eventKey="3"
            >
              Timberland
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => filterBySelection("Levis")}
              className="text-danger bg-dark p-3"
              eventKey="4"
            >
              Levis
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => filterBySelection("Converse")}
              className="text-danger bg-dark p-3"
              eventKey="5"
            >
              Converses
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
            <Dropdown.Item
              onClick={() => filterBySelection("", "Casual")}
              className="text-danger bg-dark p-3"
              eventKey="1"
            >
              Casual
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => filterBySelection("", "Fashion")}
              className="text-danger bg-dark p-3"
              eventKey="2"
            >
              Fashion
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => filterBySelection("", "Sport")}
              className="text-danger bg-dark p-3"
              eventKey="3"
            >
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
            <Dropdown.Item
              onClick={() => filterBySelection("", "", "8")}
              className="text-danger bg-dark p-3"
              eventKey="1"
            >
              8
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => filterBySelection("", "", "9")}
              className="text-danger bg-dark p-3"
              eventKey="2"
            >
              9
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => filterBySelection("", "", "10")}
              className="text-danger bg-dark p-3"
              eventKey="3"
            >
              10
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => filterBySelection("", "", "11")}
              className="text-danger bg-dark p-3"
              eventKey="4"
            >
              11
            </Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
    </>
  );
};
