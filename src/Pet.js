import React from "react";
import { Link } from "@reach/router";

class Pet extends React.Component {
  render() {
    const { name, animal, breed, media, location, id } = this.props;

    let photos =
      media && media.photos && media.photos.photo
        ? media.photos.photo.filter(photo => photo["@size"] === "pn")
        : [];
    let photo =
      photos.length !== 0
        ? photos[0].value
        : "https://images.pexels.com/photos/1663421/pexels-photo-1663421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

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
