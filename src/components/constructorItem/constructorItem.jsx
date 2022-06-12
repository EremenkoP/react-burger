import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react'
import { useDrop,useDrag } from "react-dnd";
import PropTypes from "prop-types";

import { ingredientPropTypes } from "../../utils/constants";
import {GET_INGREDIENT_FOR_BURGER} from '../../services/actions/index'

import style from './constructorItem.module.css'


const ConstructorItem = ({ingredient, index}) => {

  const elseIngredients = useSelector(store=> store.ingridientReducer.ingredientsForBurger).elseIngregients;
  const dispatch = useDispatch()
  const ref = useRef()

  const deleteItem = (data) => {
    let newElseIngredient =  elseIngredients.filter(i => i.uuid !== data.uuid);
    if (newElseIngredient.length === 0) {
      newElseIngredient = false
    }
    dispatch({
      type: GET_INGREDIENT_FOR_BURGER,
      data: newElseIngredient
    })
  }

  const sortElseIngredient = (dragObject ,index) => {
    elseIngredients.splice(index, 0, elseIngredients.splice(dragObject.index, 1)[0])
    dispatch ({
      type: GET_INGREDIENT_FOR_BURGER,
      data: elseIngredients
    })
  }

  const [{ isDragging }, dragRef] = useDrag({
    type: "draggable-ingredient",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  })

  const [{ isHover }, dropRef] = useDrop({
    accept: "draggable-ingredient",
    collect: monitor => ({
      isHover: monitor.isOver()
    }),
    drop(dragObject) {
      if (dragObject.index === index) {
        return
      }
      sortElseIngredient(dragObject, index);
    }
  })

  dragRef(dropRef(ref))

  return (
    <li  className={`${style.element} ${isDragging && style.dragging} ${isHover && style.dropping}`} ref={ref}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image_mobile}
        handleClose={()=>deleteItem(ingredient)}
      />
    </li>
  )
}

ConstructorItem.propTypes = {
  ingredient: ingredientPropTypes.isRequired,
  index: PropTypes.number.isRequired,
};

export {ConstructorItem}
