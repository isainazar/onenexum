import useCripto from "../helpers/hooks/useCripto";
import { actionTypes } from "../types/actionTypes";
export const UserReducer = (state, action) => {
  const {set} = useCripto()

  if(action.type===actionTypes.initialValue){
     let datos = action.payload;
     set(datos,"ud")
     return datos;
  }
  if (action.type === actionTypes.sae1_started) {
    let datos = action.payload;
    datos.usuario.section_a.exercise1_started = true;
    set(datos, "ud")
    return datos;
  }
  if (action.type === actionTypes.sae2_started) {
    let datos = action.payload;
    datos.usuario.section_a.exercise2_started = true;
    set(datos, "ud")
    return datos;
  }
  if (action.type === actionTypes.sae3_started) {
    let datos = action.payload;
    datos.usuario.section_a.exercise3_started = true;
    set(datos, "ud")
    return datos;
  }
  if (action.type === actionTypes.sa_bonus_started) {
    let datos = action.payload;
    datos.usuario.section_a.bonus_started = true;
    set(datos, "ud")
    return datos;
  }
  if (action.type === actionTypes.sae1_completed) {
    let datos = action.payload;
    datos.usuario.section_a.exercise1_completed = true;
    set(datos, "ud")
    return datos;
  }
  if (action.type === actionTypes.sae2_completed) {
    let datos = action.payload;
    datos.usuario.section_a.exercise2_completed = true;
    set(datos, "ud")
    return datos;
  }
  if (action.type === actionTypes.sae3_completed) {
    let datos = action.payload;
    datos.usuario.section_a.exercise3_completed = true;
    set(datos, "ud")
    return datos;
  }
  if (action.type === actionTypes.sa_bonus_completed) {
    let datos = action.payload;
    datos.usuario.section_a.bonus_completed = true;
    set(datos, "ud")
    return datos;
  }
  if (action.type === actionTypes.sa_completed) {
    let datos = action.payload;
    datos.usuario.section_a.completed = true;
    set(datos, "ud")
    return datos;
  }
  if (action.type === actionTypes.sbe1_started) {
    let datos = action.payload;
    datos.usuario.section_b.exercise1_started = true;
    set(datos, "ud")
    return datos;
  }
  if (action.type === actionTypes.sbe1_completed) {
    let datos = action.payload;
    datos.usuario.section_b.exercise1_completed = true;
    set(datos, "ud")
    return datos;

  }
  if (action.type === actionTypes.sbe2_started) {
    let datos = action.payload;
    datos.usuario.section_b.exercise2_started = true;
    set(datos, "ud")
    return datos;

  }
  if (action.type === actionTypes.sbe2_completed) {
    let datos = action.payload;
    datos.usuario.section_b.exercise2_completed = true;
    set(datos, "ud")
    return datos;
  }
  if (action.type === actionTypes.sbe3_started) {
    let datos = action.payload;
    datos.usuario.section_b.exercise3_started = true;
    set(datos, "ud")
    return datos;

  }
  if (action.type === actionTypes.sbe3_completed) {
    let datos = action.payload;
    datos.usuario.section_b.exercise3_completed = true;
    set(datos, "ud")
    return datos;
  }
  if (action.type === actionTypes.sb_completed) {
    let datos = action.payload;
    datos.usuario.section_b.completed = true;
    set(datos, "ud")
    return datos;
  }
  return state;
};
