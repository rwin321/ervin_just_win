import React from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import profilePhoto from "../../assets/imgs/ervin_profile.jpg";

const Person = () => {
  return (
    <aside className="home__person person">
      <Card className="person__card card">
        <Card.Img className="card__photo" src={profilePhoto} />
        <Card.Body>
          <Card.Title className="card__text">Profile: </Card.Title>
          <Card.Text className="card__text">Ervin Abliamitov</Card.Text>
          <Card.Text className="card__text">Front-end developer</Card.Text>
          <Card.Text className="card__text">
            JS / HTML / CSS (SCSS) / React / Redux / Material UIs
          </Card.Text>
          <Card.Text className="card__text contacts">
            <NavLink to="/contact">how to contact me</NavLink>
          </Card.Text>
        </Card.Body>
      </Card>
    </aside>
  );
};

export default Person;
