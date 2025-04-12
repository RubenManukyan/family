import "./home.scss";
import leaf from "../../images/Leaf.png";
import ruben from "../../images/Ruben.jpg";
import lilya from "../../images/lilya.jpg"
import ruben2 from "../../images/R.jpg"
import lilya2 from "../../images/L.jpg"

const Home = () => {
  return (
    <div className="home">
      <div>
        <p>
          Family is the heart of everything we cherish, shaping our lives with
          love, laughter, and unforgettable moments. It’s the foundation of who
          we are, offering support, comfort, and a sense of belonging. This
          website is dedicated to celebrating those special bonds that connect
          us, reminding us of the joy and warmth that family brings. Here, we’ll
          showcase a collection of beautiful photos that capture the essence of
          togetherness—holidays spent side by side, simple everyday moments
          filled with love, and milestone events that define our journey as a
          family. Each image tells a story, reflecting the deep connections,
          traditions, and experiences that make our family unique. Beyond just
          photos, this space serves as a tribute to the people who mean the most
          to us. It’s a place to preserve precious memories, relive cherished
          experiences, and strengthen the ties that keep us close. Whether near
          or far, family remains at the core of our hearts, and this website
          ensures that the love we share continues to inspire us every day.
        </p>
        <img src={leaf} alt="" id="lovelmg"/>
      </div>
      <div className="homeImages">
        <img src={ruben} alt="" />
        <img src={lilya} alt="" />
        <img src={ruben2} alt="" />
        <img src={lilya2} alt="" />
      </div>
    </div>
  );
};

export default Home;
