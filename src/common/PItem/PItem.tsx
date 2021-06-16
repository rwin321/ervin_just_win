import Card from "react-bootstrap/Card";
import s from "./PItem.module.css";

export type PItemT = {
  id?: number;
  img?: any;
  path: string;
  title: string;
  description?: string;
};

const PItem = ({ img, title, description, path }: PItemT) => {
  console.log(path);

  return (
    <Card className={s.card}>
      <Card.Body className={s.body}>
        <Card.Title className={s.title}>{title}</Card.Title>
        <Card.Link href={path}>
          <Card.Img className={s.img} src={img} />
        </Card.Link>
        <Card.Text className={s.text}>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PItem;
