import './PhotoGallery.css';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

const photos = [
	{ original: "/cat_0.jpg", },
	{ original: "/cat_1.jpg", },
	{ original: "/cat_2.jpg", },
	{ original: "/cat_3.jpg", },
	{ original: "/cat_4.jpg", },
	{ original: "/cat_5.jpg", },
	{ original: "/cat_6.jpg", },
	{ original: "/cat_7.jpg", },
	{ original: "/cat_8.jpg", },
	{ original: "/cat_9.jpg", },
	{ original: "/cat_0.jpg", },
]

const renderImage = (item) => (
	<div className="image-gallery-image" style={{ textAlign: 'center' }}>
		<img
			src={item.original}
			alt=""
			style={{
				maxHeight: '70vh', // Max height to fit screen
				maxWidth: '100%',   // Never overflow width
				objectFit: 'contain' // Scale nicely
			}}
		/>
	</div>
);

const PhotoGallery = () => (
	<ImageGallery
		items={photos}
		renderItem={renderImage}
		slideDuration={450}
		slideInterval={3000}
	/>
);
export default PhotoGallery
