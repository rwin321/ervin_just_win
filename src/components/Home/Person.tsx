import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import profilePhoto from "../../assets/imgs/ervin_profile.jpg";

const Person = () => {
  return (
    <aside className="home__person person">
      <Card className="person__card card">
        <NavLink to="/about">
          <Card.Img className="card__photo" src={profilePhoto} />
        </NavLink>
        <Card.Body className="card__body">
          <Card.Title className="card__text">Profile: </Card.Title>
          <Card.Text className="card__text">Ervin Abliamitov</Card.Text>
          <Card.Text className="card__text">Front-end developer</Card.Text>
          <Card.Text className="card__text">
            JS / HTML / CSS (SCSS) / React / Redux / TS / Material UIs
          </Card.Text>
          <NavLink to="/contact">
            <Card.Text className="card__text contacts">
              how to contact me
            </Card.Text>
          </NavLink>
        </Card.Body>
      </Card>
    </aside>
  );
};

export default Person;
