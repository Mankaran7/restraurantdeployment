import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT SAVOR BITE</h1>
            <p>Delighting taste buds with every bite.</p>
          </div>
          <p className="mid">
            Welcome to Savor Bite, where culinary delight meets simplicity. Our chefs craft each dish with care, using the freshest ingredients to bring you a mouthwatering experience. From delectable appetizers to indulgent desserts, every bite is a celebration of flavor.

            Join us for a dining experience that is easygoing yet unforgettable. Our menu is designed to please every palate, making Savor Bite the perfect spot for casual gatherings, date nights, or solo indulgence.

          </p>
          <Link to={"menu"} spy={true} smooth={true} duration={500}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
