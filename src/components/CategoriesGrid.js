import PropTypes from "prop-types";
import GifGridItem from "./GifGridItem";
import useFetchGifs from "../hooks/useFetchGifs";
import "./CategoriesGrid.css";

const CategoriesGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <li className="categories__item">
      <h3 className="category__title animate__animated animate__fadeIn">
        {category}
      </h3>

      {loading && (
        <p className="category__loading animate__animated animate__flash animate__infinite">
          cargando...
        </p>
      )}

      <div className="gif__grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </li>
  );
};

CategoriesGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default CategoriesGrid;
