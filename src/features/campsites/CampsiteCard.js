import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

// Task 1 - Part 1: Create CampsiteCard.js

const CampsiteCard = ({ campsite }) => {
  const { image, name } = campsite;
  return (
    <Card>
      <CardImg width="100%" src={campsite.image} alt={campsite.name} />
      <CardImgOverlay>
        <CardTitle>{campsite.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};

export default CampsiteCard;
