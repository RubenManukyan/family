import { useParams } from "react-router-dom";
import "./pageInside.scss";
import { data } from "../../data";

const PageInside = () => {
  const { year } = useParams();
  
  return (
    <div className="pageInside" style={{gridTemplateColumns: `repeat(${data[`y${year}`]?.countInRow}, 1fr)`}}>
      {data[`y${year}`]?.images.map((item) => (
        <img src={item} alt={year} key={year * Math.random()} />
      ))}
    </div>
  );
};

export default PageInside;
