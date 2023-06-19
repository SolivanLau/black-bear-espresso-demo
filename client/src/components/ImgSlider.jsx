// data
import { iconData } from '../data/contentData';
// components
import Icon from './Icon';
const ImgSlider = ({
  currentSlide,
  setCurrentSlide,
  imgData,
  handleCloseModal,
  isModalOpen,
}) => {
  const prevSlide = () => {
    setCurrentSlide((prevslide) => {
      return (prevslide - 1 + imgData.length) % imgData.length;
    });
  };
  const nextSlide = () => {
    setCurrentSlide((prevslide) => {
      return (prevslide + 1) % imgData.length;
    });
  };

  return (
    <div className="carousel">
      {/* BTN CONTAINER */}
      <div className="sliderBtnContainer">
        <p>
          {currentSlide + 1}/{imgData.length}
        </p>
        <button className="modalBtn" onClick={handleCloseModal}>
          <Icon {...iconData.closeMenu} />
        </button>
      </div>

      {/* SLIDER */}
      <div className="sliderContainer">
        {imgData.map((image, index) => {
          const { id, url, alt } = image;
          return (
            <article
              key={id}
              className="slide"
              style={{
                transform: `translateX(${100 * (index - currentSlide)}%)`,
                opacity: currentSlide === index && isModalOpen ? '1' : '0',
                visibility:
                  currentSlide === index && isModalOpen ? 'visible' : 'hidden',
              }}
            >
              <img src={url} alt={alt} />
            </article>
          );
        })}
        {/* NEXT/PREV BTNS */}

        <button className="modalBtn prevSlide" onClick={prevSlide}>
          <Icon {...iconData.chevLeft} />
        </button>

        <button className="nextSlide modalBtn" onClick={nextSlide}>
          <Icon {...iconData.chevRight} />
        </button>
      </div>
    </div>
  );
};
export default ImgSlider;
