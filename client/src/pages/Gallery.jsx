// libraries
import { nanoid } from 'nanoid';
import { useState } from 'react';
// data
import { galleryData } from '../data/contentData';
import { iconData } from '../data/contentData';
// components
import MetaData from '../components/MetaData';
import SectionHeader from '../components/SectionHeader';
import Icon from '../components/Icon';
import ImgSlider from '../components/ImgSlider';

const Gallery = () => {
  // create gallery
  // create modal

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleOpenModal = (index) => {
    setCurrentSlide(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {/* meta data */}
      <MetaData title={'Gallery'} />
      {/* section  start */}
      <section id="contentTop">
        {/* header  start */}
        <SectionHeader {...galleryData} />

        {/* gallery list items */}
        <ul className="galleryList">
          {galleryData.images.map((image, index) => {
            const { url, alt, id } = image;
            return (
              <li
                key={id}
                className="galleryListItem"
                onClick={() => handleOpenModal(index)}
              >
                <div className="imageOverlay">
                  <Icon {...iconData.zoomIn} />
                </div>
                <img src={url} alt={alt} />
              </li>
            );
          })}
        </ul>
        {}
        <div
          className={
            isModalOpen ? 'modalContainer openModal' : 'modalContainer'
          }
        >
          <ImgSlider
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
            imgData={galleryData.images}
            handleCloseModal={handleCloseModal}
            isModalOpen={isModalOpen}
          />
        </div>
      </section>
    </>
  );
};
export default Gallery;
