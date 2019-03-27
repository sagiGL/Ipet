import React from "react";
import { Link } from "@reach/router";

class Pet extends React.Component {
  render() {
    const { name, animal, breed, media, location, id } = this.props;
    let photos = [];
    let photo;
    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }
    if (photos.length !== 0) {
      photo = photos[0].value;
    } else {
      photo = [];
    }
    return (
      <Link to={`/details/${id}`} className={"pet"}>
        <div className={"image-container"}>
          <img src={photo} alt={name} />
        </div>
        <div className={"info"}>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
        </div>
      </Link>
    );
  }
}
export default Pet;
