import React from 'react';
import { ReactSVG } from 'react-svg';

// Images
import review1 from '@/public/review/review-1.jpg';
import review2 from '@/public/review/review-2.jpg';
import review3 from '@/public/review/review-3.jpg';

// Component
import Button from '../UI/Button/Button';
import Image from 'next/image';

interface ITitleReview {
  title: string;
  description: string;
}

export default function Review() {
  const [selectImages, setSelectImages] = React.useState<number>(0);

  const titleReview: ITitleReview[] = [
    {
      title: 'Best courses ever',
      description: `Good course, up to this point, still ongoing. The only downside, why I gave 4,5 stars, because the "teacher" sometimes feel like, he is lost, and takes up quite a time, to correct himself, and check back etc.`,
    },
    {
      title: 'Amazing teaching',
      description: `The explanation is crazy it really doesn't have a structure to go from point A to point B. He starts to explain something then he change his mind and start with another thing an so on. If you try to learn pro active by doing the same thing with him all along you will get confused and start to loose interest.`,
    },
    {
      title: 'Simple and easy',
      description: `I am really enjoying the experience of learning a new skill I used to believe that web design was way too complicated for me to learn but so far in this course I have been keeping up and having fun.`,
    },
  ];

  const [counter, setCounter] = React.useState<number>(1);
  const images = [review1, review2, review3];

  function swipeLeftImage() {
    if (counter < 3) {
      setCounter(counter - 1);
    }

    if (selectImages < 2) {
      setSelectImages(selectImages - 1);
    }

    if (selectImages >= 2) {
      setSelectImages(selectImages - 1);
    }

    if (counter >= 3) {
      setCounter(counter - 1);
    }

    if (selectImages == 0) {
      setSelectImages(2);
    }

    if (counter === 1) {
      setCounter(3);
    }
  }

  function swipeRightImage() {
    if (counter < 3) {
      setCounter(counter + 1);
    }

    if (selectImages < 2) {
      setSelectImages(selectImages + 1);
    }

    if (selectImages >= 2) {
      setSelectImages(0);
    }

    if (counter >= 3) {
      setCounter(1);
    }
  }

  return (
    <div className="review-block">
      <h2>Review</h2>
      <div className="review-container">
        <div className="review-information">
          <h4 className="review-information-title">
            {titleReview[counter - 1].title}
          </h4>
          <p className="review-information-description">
            {titleReview[counter - 1].description}
          </p>
        </div>
        <div className="review-elements">
          <div className="review-header">
            <div className="review-header-title">
              <span className="counter-for-image">{counter}/</span>
              <span className="limit-for-image">3</span>
            </div>
            <div className="review-arrow">
              <Button
                className="review-button"
                onClick={() => swipeLeftImage()}
              >
                <ReactSVG
                  src={require('@/public/icons/arrow bg.svg').default.src}
                  className="bg-button"
                />
                <ReactSVG
                  src={require('@/public/icons/arrow.svg').default.src}
                  className="review-arrow-left"
                />
              </Button>
              <Button
                className="review-button"
                onClick={() => swipeRightImage()}
              >
                <ReactSVG
                  src={require('@/public/icons/arrow bg.svg').default.src}
                  className="bg-button"
                />
                <ReactSVG
                  src={require('@/public/icons/arrow.svg').default.src}
                  className="review-arrow-right"
                />
              </Button>
            </div>
          </div>
          <div className="review-images">
            {images &&
              images.map((_, i) => {
                return (
                  <div
                    className={`review-image-container ${
                      i === selectImages ? 'activeImage' : ''
                    } ${i !== selectImages ? `image-review-${i + 1}` : ''}`}
                    key={i}
                  >
                    <Image
                      src={images[i]}
                      width={selectImages === i ? 2560 : 2560}
                      height={442}
                      alt=""
                      className="review-image"
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
