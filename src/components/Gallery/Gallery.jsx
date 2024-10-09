import './Gallery.css';

const Gallery = ({photos}) => {
  return (
    <div>
      <h2 className="Title">Галерея фотографий</h2>
      <div className="Gallery">
        {photos.map((photo, index) => (
          <div className="Gallery-item" key={index}>
            <img className="Gallery-img" src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Gallery;
