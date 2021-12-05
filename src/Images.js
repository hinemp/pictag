export const Images = ({ photos }) => {
    return (
      <ul>
        {photos &&
          Object.keys(photos).map((photoId) => (
            <li>
              {photos[photoId].id} <img src={photos[photoId].href}></img> {photos[photoId].href} {photos[photoId].tags}{" "}
            </li>
          ))}
      </ul>
    );
  };