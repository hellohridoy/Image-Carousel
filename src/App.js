import './App.css';
import React ,{useState} from 'react';

function App() {

  const images = [
    "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
  ];
  
  const[currentImage,setCurrentImage] = useState(0);

  //current image
  function nextSlide(){
    setCurrentImage(currentImage === images.length-1 ? 0 : currentImage + 1)
  }
  function prevSlide(){
    setCurrentImage(currentImage === 0 ? images.length-1 : currentImage-1)
  }


  return (
   <div>
        
      <h2>Project 1: Carousel</h2>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
          ⬅
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          ⮕
        </div>
        {images.map(
          (image, index) =>
            currentImage === index && (
               
              <div key={image} className="slide"> {/* index number of the image */}
                <img src={image} alt="images" />  {/* src of the image and set image*/}
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default App;
