import IngredientDetails from '../../components/ingredientDetails/IngredientDetails';

import style from './IngredientPage.module.css';

const IngredientPage = () => {

  return (
   <div className={style.box}>
      <IngredientDetails />
   </div>
  )
};

export default IngredientPage;
