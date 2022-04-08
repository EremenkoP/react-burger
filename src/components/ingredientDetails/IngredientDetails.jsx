import PropTypes from "prop-types";

const IngredientDetails = ({ ingredient }) => {
  return <h3>{ingredient.name}</h3>;
};

IngredientDetails.propTypes = {
  ingredient: PropTypes.object.isRequired
};

export default IngredientDetails;
