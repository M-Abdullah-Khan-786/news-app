import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import newsImg from "../assets/news.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaExternalLinkAlt } from "react-icons/fa";

const NewsBoard = ({ category }) => {
  const [articles, setarticles] = useState([]);
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`;
    fetch(url)
      .then((Response) => Response.json())
      .then((data) => setarticles(data.articles));
  }, [category]);

  return (
    <div>
      <h1 className="text-center py-1 bg-warning">
        <span className="text-light fs-4">Latest</span>
        <span className="mx-1 bg-white text-warning badge rounded-pill">
          {category.replace(/\b\w/g, (l) => l.toUpperCase())}{" "}
        </span>
        <span className="text-light fs-4">News</span>
      </h1>

      <>
        <div className="container">
          <Row xs={1} md={2} lg={3} className="flex justify-content-center">
            {articles?.map((news, index) => {
              return (
                <Col key={index} style={{ width: "20rem" }} className="">
                  <Card
                    style={{ height: "20rem", width: "18rem" }}
                    className="center bg-dark text-light mb-3 d-inline-block"
                  >
                    <Card.Img
                      variant="top"
                      src={news.urlToImage ? news.urlToImage : newsImg}
                      style={{ height: "170px" }}
                    />
                    <Card.Body>
                      <Card.Title>
                        {news.title.split(" ").slice(0, 2).join(" ")}
                      </Card.Title>
                      <Card.Text>
                        {news.description
                          ? news.description.split(" ").slice(0, 4).join(" ")
                          : "Lorem ipsum"}
                      </Card.Text>
                      <div class="row justify-content-end">
                        <div className="col-auto">
                          <Button
                            href={news.url}
                            target="_blank"
                            variant="warning"
                          >
                            Learn more <FaExternalLinkAlt />
                          </Button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </>
    </div>
  );
};

export default NewsBoard;
