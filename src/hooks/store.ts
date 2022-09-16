import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import {AppDispatch, AppThunk, RootState} from "../services/types/store";

const useAppDispatch  = () => useDispatch<AppDispatch & AppThunk>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export {useAppSelector, useAppDispatch}
