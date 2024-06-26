

export const HomeSlider = [
  {
    id: 1,
    heading1: 'Welcome Back',
    heading2: 'to Taycs',
    description1: 'Lorem ipsum dolor sit amet, consectetur adipisic',
    description2: 'dolor sit amet consectetur adipisicing elit.',
    button: 'reservation',
    link: 'open menu',
    image: './images/banner-1.jpg',

  },
  {
    id: 2,
    heading1: 'Reserve Your',
    heading2: 'Taable Today',
    description1: 'Lorem ipsum dolor sit amet, consectetur adipisic',
    description2: 'dolor sit amet consectetur adipisicing elit.',
    button: 'table order',
    link: 'online shop',
    image: './images/banner-2.jpg',

  },
  {
    id: 3,
    heading1: 'Visit to Our',
    heading2: 'Online Shop',
    description1: 'Lorem ipsum dolor sit amet, consectetur adipisic',
    description2: 'dolor sit amet consectetur adipisicing elit.',
    button: 'find us',
    link: 'open menu',
    image: './images/banner-3.jpg',

  }
]

import "../App.css";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Content = ({
  image,
  title,
  heading,
  text1,
  text2,
  link,
  page,
}) => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <>
      <section className="banner_content">
        <div className="w-100 ">
          <img
            src={image}
            alt=""
            className="w-100 start-0 bg-opacity-75 position-absolute"
          />
          <Container className="">
            <div className="text-center position-relative z-1 text-white content">
              <p className="title text-uppercase fw-bold">{title}</p>
              <h1 className="heading display-1 fw-bold mt-3">{heading}</h1>
              <div className="opacity-75 mt-4 fw-bolder fs-5">
                <p className="opacity-75">{text1}</p>
                <p className="opacity-75">{text2}</p>
              </div>
              <ul className="pages_link mt-5">
                <li className="link">
                  <button
                    onClick={() => goToHome()}
                    className="outline-none border-0 text-uppercase"
                  >
                    {link}
                  </button>
                </li>
                <li className="opacity-75">{page}</li>
              </ul>
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};
