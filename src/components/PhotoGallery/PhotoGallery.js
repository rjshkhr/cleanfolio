import './PhotoGallery.css';
import ImageGallery from 'react-image-gallery';
import { photos } from '../../portfolio';

const PhotoGallery = () => {
	(<ImageGallery items={photos} />)
}
export default PhotoGallery
