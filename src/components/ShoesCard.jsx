import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import stars from "../assets/stars.png";

export const ShoesCard = () => {
  const { data, isLoading } = useFetch(
    `https://easyshoes.onrender.com/shoes/get`
  );

  const [shoesData, setShoesData] = useState([]);

  const getShoesData = async () => {
    const res = await data;

    setShoesData(res.data);
  };

  useEffect(() => {
    getShoesData();
  }, [data]);

  const [shoesModal, setShoesModal] = useState({});

  const [smShow, setSmShow] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const shoesModalInfo = async (pairShoes) => {
    setShow(true);

    const res = await pairShoes;

    setShoesModal({
      brand: res.brand,
      model: res.model,
      size: res.size,
      img: res.img,
      price: res.price,
    });
  };

  const modalMsg = () => {
    handleClose();
    setSmShow(true);
    addToCart();
  };

  const addToCart = () => {
    localStorage.setItem("shoes", JSON.stringify([shoesModal]));
  };

  console.log("shoesData", shoesData);

  return (
    <Container
      fluid
      style={{
        backgroundColor: "#212529",
        height: "100%",
      }}
    >
      <Row>
        {isLoading ? (
          <div className="text-center mt-5">
            <Spinner animation="border" variant="danger" />
          </div>
        ) : (
          shoesData.map((shoes) => (
            <Col
              xs={12}
              md={6}
              lg={4}
              className="d-flex flex-row justify-content-center align-items-center mt-3 p-4"
            >
              <Card
                key={shoes._id}
                style={{ width: "16rem" }}
                className="border border-light shadow mb-3 bg-white rounded"
              >
                <Card.Img
                  variant="top"
                  src={shoes.img}
                  className="img-fluid"
                  style={{
                    height: "250px",
                    backgroundColor: "#F5F5F5",
                  }}
                />
                <Card.Body>
                  <div>
                    <img
                      style={{
                        width: "70px",
                      }}
                      src={stars}
                      alt="stars"
                    />
                  </div>

                  <Card.Title className="text-black text-start">
                    <h4>
                      <strong>
                        <i>{shoes.brand}</i>
                      </strong>
                    </h4>
                  </Card.Title>
                  <Card.Text className="text-black">
                    <h6>
                      <i>{shoes.model}</i>
                    </h6>
                  </Card.Text>
                  <Card.Text className="text-black">
                    <h6>
                      <strong>
                        <i>{shoes.price}</i>
                      </strong>
                    </h6>
                  </Card.Text>
                  <div className="text-center mt-4">
                    <Button variant="danger">
                      <strong>
                        <i>Add to cart</i>
                      </strong>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};
