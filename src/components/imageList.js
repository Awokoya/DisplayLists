import './imageList.css';
import ImageTile from './imageTile';

const ImageList = props => {
  const images = props.images.map((image) => {
    return <ImageTile key ={image.id} image={image}/>
  });


  return <div className = "image-list">
    {images}
  </div>
};

export default ImageList;