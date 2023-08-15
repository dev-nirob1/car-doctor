import image1 from '../../../assets/images/banner/1.jpg'
import image2 from '../../../assets/images/banner/2.jpg'
import image3 from '../../../assets/images/banner/3.jpg'
import image4 from '../../../assets/images/banner/4.jpg'
// import image5 from '../../../assets/images/banner/5.jpg'
// import image6 from '../../../assets/images/banner/6.jpg'
const Banner = () => {
  return (
    <div>
      <div className="carousel h-[600px] w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={image1} className="w-full rounded-xl" />
          <div className="absolute rounded-xl gap-5 flex items-center bg-gradient-to-r h-full from-[#151515] to-[rgba(21, 21, 21, 0.00)] transform top-0 left-0">
            <div className='text-white space-y-7 pl-16 w-1/2'>
              <h3 className='text-5xl font-semibold'>Affordable Price For Car Servicing</h3>
              <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
              <div>
                <button className="btn btn-warning mr-5">Warning</button>
                <button className="btn bg-transparent text-white hover:text-black">Default</button>
              </div>
            </div>
          </div>
          <div className="absolute gap-5 flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn bg-orange-500 hover:text-gray-800 text-white btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
        <img src={image2} className="w-full rounded-xl" />
          <div className="absolute rounded-xl gap-5 flex items-center bg-gradient-to-r h-full from-[#151515] to-[rgba(21, 21, 21, 0.00)] transform top-0 left-0">
            <div className='text-white space-y-7 pl-16 w-1/2'>
              <h3 className='text-5xl font-semibold'>Affordable Price For Car Servicing</h3>
              <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
              <div>
                <button className="btn btn-warning mr-5">Warning</button>
                <button className="btn bg-transparent text-white hover:text-black">Default</button>
              </div>
            </div>
          </div>
          <div className="absolute gap-5 flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn bg-orange-500 hover:text-gray-800 text-white btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <img src={image3} className="w-full rounded-xl" />
          <div className="absolute rounded-xl gap-5 flex items-center bg-gradient-to-r h-full from-[#151515] to-[rgba(21, 21, 21, 0.00)] transform top-0 left-0">
            <div className='text-white space-y-7 pl-16 w-1/2'>
              <h3 className='text-5xl font-semibold'>Affordable Price For Car Servicing</h3>
              <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
              <div>
                <button className="btn btn-warning mr-5">Warning</button>
                <button className="btn bg-transparent text-white hover:text-black">Default</button>
              </div>
            </div>
          </div>
          <div className="absolute gap-5 flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn bg-orange-500 hover:text-gray-800 text-white btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
        <img src={image4} className="w-full rounded-xl" />
          <div className="absolute rounded-xl gap-5 flex items-center bg-gradient-to-r h-full from-[#151515] to-[rgba(21, 21, 21, 0.00)] transform top-0 left-0">
            <div className='text-white space-y-7 pl-16 w-1/2'>
              <h3 className='text-5xl font-semibold'>Affordable Price For Car Servicing</h3>
              <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
              <div>
                <button className="btn btn-warning mr-5">Warning</button>
                <button className="btn bg-transparent text-white hover:text-black">Default</button>
              </div>
            </div>
          </div>
          <div className="absolute gap-5 flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn bg-orange-500 hover:text-gray-800 text-white btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;