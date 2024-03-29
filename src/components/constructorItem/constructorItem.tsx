import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import { FC, MutableRefObject, useRef } from 'react'
import { useDrop,useDrag, DropTargetMonitor } from "react-dnd";

import {GET_INGREDIENT_FOR_BURGER} from '../../services/actions/index'

import style from './constructorItem.module.css'
import { TBurgerItem, TIngredient } from '../../services/types/ingredient';
import { useAppDispatch, useAppSelector } from '../../hooks/store';

type TConstructorItem = TBurgerItem & {index: number}

const ConstructorItem: FC<TConstructorItem> = ({ingredient, index}) => {

  const elseIngredients = useAppSelector(store=> store.ingridientReducer.ingredientsForBurger).elseIngregients;
  const dispatch = useAppDispatch()

  const ref: MutableRefObject<HTMLLIElement | null> = useRef<HTMLLIElement>(null);

  const deleteItem = (data: TIngredient) => {
    let newElseIngredient =  elseIngredients.filter(i => i.uuid !== data.uuid);
    if (newElseIngredient.length === 0) {
      newElseIngredient = []
    }
    dispatch({
      type: GET_INGREDIENT_FOR_BURGER,
      data: newElseIngredient
    })
  }

  const sortElseIngredient = (dragObject: {index: number} ,index: number) => {
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
    collect: (monitor: DropTargetMonitor) => ({
      isHover: monitor.isOver()
    }),
    drop(dragObject:{index: number}) {
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

export {ConstructorItem}
