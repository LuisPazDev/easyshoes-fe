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

export const ShoesCard = () => {
  const { data, isLoading, hasError } = useFetch(
    `https:easyshoes.onrender.com/shoes/get`
  );

  const [shoesData, setShoesData] = useState([]);

  const [shoesModal, setShoesModal] = useState({});

  const [smShow, setSmShow] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const shoesModalInfo = async (pairShoes) => {
    setShow(true);

    const res = await pairShoes;

    console.log(pairShoes);

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
  };

  const getShoesData = async () => {
    const newData = await data;

    setShoesData(newData.data);
  };

  useEffect(() => {
    getShoesData();
  }, [data]);

  return (
    <Container fluid>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Card
          border='dark'
          className='ms-auto mt-4 me-auto mb-4'
          style={{ width: "16rem" }}
        >
          <Card.Img variant='top' src={shoesModal.img} />
          <Card.Body>
            <Card.Title>{shoesModal.brand}</Card.Title>
            <Card.Text>
              <p>
                <strong>Model:</strong> {shoesModal.model}
              </p>
              <p>
                <strong>Size:</strong> {shoesModal.size}
              </p>
              <p>
                <strong>Price:</strong> {shoesModal.price}
              </p>
            </Card.Text>
            <Button variant='danger' onClick={modalMsg}>
              Confirm
            </Button>
            ;
          </Card.Body>
        </Card>
      </Modal>

      <Modal
        size='sm'
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby='example-modal-sizes-title-sm'
      >
        <Modal.Header closeButton>
          <Modal.Title id='example-modal-sizes-title-sm'></Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <p>Succesfully Added to Cart</p>
          <Button className='mt-3 mb-3'>
            <Link className='link-button' to='/mycart'>
              Go to Cart
            </Link>
          </Button>
          <Button
            className='ms-2 mt-3 mb-3'
            variant='danger'
            onClick={() => setSmShow(false)}
          >
            Keep Shopping
          </Button>
        </Modal.Body>
      </Modal>

      <Row xl={4} lg={4} md={3} sm={2} xs={1}>
        {isLoading ? (
          <Button className='ms-auto me-auto mt-5' variant='primary' disabled>
            <Spinner
              as='span'
              animation='grow'
              size='sm'
              role='status'
              aria-hidden='true'
            />
            Loading...
          </Button>
        ) : (
          shoesData.map((pairShoes) => {
            return (
              <Col>
                <Card
                  key={pairShoes.id}
                  className='mb-4 ms-auto me-auto text-center'
                  style={{ width: "15rem" }}
                >
                  <Card.Img variant='top' src={pairShoes.img} />

                  <Card.Body>
                    <Card.Title className='mb-4'>
                      <h3>{pairShoes.brand}</h3>
                    </Card.Title>
                    <Card.Text>
                      <p>
                        <strong>{pairShoes.model}</strong>
                      </p>
                      <p>
                        <strong>{pairShoes.price}</strong>
                      </p>
                      <p>
                        <strong>Size:</strong> {pairShoes.size}
                      </p>
                    </Card.Text>
                    <Button
                      variant='primary'
                      onClick={() => shoesModalInfo(pairShoes)}
                    >
                      Order Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        )}
      </Row>
    </Container>
  );
};
