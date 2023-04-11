import axios from "axios";
import { actionTypes } from "../types/actionTypes";
import { url } from "./general";

//SECTION A ACTIONS

const goExA = async (data, UserDispatch, navigate, exercise) => {
  if (exercise === 1) {
    UserDispatch({
      type: actionTypes.sae1_started,
      payload: data,
    });
    const datos = {
      user: localStorage.UID,
      exercise1_started: true,
    };

    await axios
      .put(`${url}/api/user/put-section-a`, datos)
      .then((res) => {
        navigate("/seccionA/ex1");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (exercise === 2) {
    UserDispatch({
      type: actionTypes.sae2_started,
      payload: data,
    });

    const section = data.usuario.section_a;
    const datos = {
      user: localStorage.UID,
      exercise2_started: true,
    };

    await axios
      .put(`${url}/api/user/put-section-a`, datos)
      .then((res) => {
        navigate("/seccionA/ex2");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (exercise === 3) {
    UserDispatch({
      type: actionTypes.sae3_started,
      payload: data,
    });
    const datos = {
      user: localStorage.UID,

      exercise3_started: true,
    };

    await axios
      .put(`${url}/api/user/put-section-a`, datos)
      .then((res) => {
        navigate("/seccionA/ex3");
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

const completeExA = async (data, UserDispatch, navigate, exercise) => {
  if (exercise === 1) {
    UserDispatch({
      type: actionTypes.sae1_completed,
      payload: data,
    });
    const datos = {
      user: localStorage.UID,
      exercise1_completed: true,
    };
    await axios
      .put(`${url}/api/user/put-section-a`, datos)
      .then((res) => {
        navigate("/seccionA/track_calma");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (exercise === 2) {
    UserDispatch({
      type: actionTypes.sae2_completed,
      payload: data,
    });
    const datos = {
      user: localStorage.UID,
      exercise2_completed: true,
    };
    await axios
      .put(`${url}/api/user/put-section-a`, datos)
      .then((res) => {
        navigate("/seccionA/track_478");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (exercise === 3) {
    UserDispatch({
      type: actionTypes.sae3_completed,
      payload: data,
    });
    UserDispatch({
      type: actionTypes.sa_completed,
      payload: data,
    });
    const datos = {
      user: localStorage.UID,
      exercise3_completed: true,
      completed: true,
    };
    await axios
      .put(`${url}/api/user/put-section-a`, datos)
      .then((res) => {
        navigate("/seccionA/track_abd");
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
///SECTION B ACTIONS

const goExB = async (data, UserDispatch, navigate, exercise) => {
  // ex 1

  if (exercise === 1) {
    UserDispatch({
      type: actionTypes.sbe1_started,
      payload: data,
    });
    const datos = {
      user: localStorage.UID,
      exercise1_started: true,
    };
    await axios
      .put(`${url}/api/user/put-section-b`, datos)
      .then((res) => {
        navigate("/seccionB/ex1");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //ex2

  if (exercise === 2) {
    UserDispatch({
      type: actionTypes.sbe2_started,
      payload: data,
    });
    const section = data.usuario.section_b;
    const datos = {
      user: localStorage.UID,
      exercise2_started: true,
    };
    await axios
      .put(`${url}/api/user/put-section-b`, datos)
      .then((res) => {
        navigate("/seccionB/ex2");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  /// Ex 3
  if (exercise === 3) {
    UserDispatch({
      type: actionTypes.sbe3_started,
      payload: data,
    });
    const datos = {
      user: localStorage.UID,
      exercise3_started: true,
    };
    await axios
      .put(`${url}/api/user/put-section-b`, datos)
      .then((res) => {
        navigate("/seccionB/ex3");
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

const completeExB = async (data, UserDispatch, navigate, exercise,stay) => {
  if (exercise === 1) {
    UserDispatch({
      type: actionTypes.sbe1_completed,
      payload: data,
    });
    const datos = {
      user: localStorage.UID,
      exercise1_completed: true,
    };
    await axios
      .put(`${url}/api/user/put-section-b`, datos)
      .then((res) => {
       if(!stay){
         navigate("/seccionB/mapa");
       }
       return
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (exercise === 2) {
    UserDispatch({
      type: actionTypes.sbe2_completed,
      payload: data,
    });
    const datos = {
      user: localStorage.UID,
      exercise2_completed: true,
    };
    await axios
      .put(`${url}/api/user/put-section-b`, datos)
      .then((res) => {
        navigate("/seccionB/mapa");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (exercise === 3) {
    UserDispatch({
      type: actionTypes.sbe3_completed,
      payload: data,
    });
    UserDispatch({
      type: actionTypes.sb_completed,
      payload: data,
    });
    const datos = {
      user: localStorage.UID,
      exercise3_completed: true,
      completed: true,
    };
    await axios
      .put(`${url}/api/user/put-section-b`, datos)
      .then((res) => {
        navigate("/seccionB/mapa");
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
export { goExA, completeExA, goExB, completeExB };
