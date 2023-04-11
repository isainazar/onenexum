import React, { useEffect } from "react";
import { useState } from "react";

const JournalDate = () => {
  const [dates, setDates] = useState(null);

  const getDate = () => {
    const hoy = new Date();
    const dosAntes = new Date(hoy);
    const unoAntes = new Date(hoy);
    const unoDes = new Date(hoy);
    const dosDes = new Date(hoy);
    dosAntes.setDate(hoy.getDate() - 2);
    unoAntes.setDate(hoy.getDate() - 1);
    unoDes.setDate(hoy.getDate() + 1);
    dosDes.setDate(hoy.getDate() + 2);
    let arr = [];
    arr.push(
      dosAntes.toLocaleDateString("es-ES", {
        weekday: "short",
        day: "numeric",
      })
    );
    arr.push(
      unoAntes.toLocaleDateString("es-ES", {
        weekday: "short",
        day: "numeric",
      })
    );
    arr.push(
      hoy.toLocaleDateString("es-ES", {
        weekday: "short",
        day: "numeric",
      })
    );
    arr.push(
      unoDes.toLocaleDateString("es-ES", {
        weekday: "short",
        day: "numeric",
      })
    );
    arr.push(
      dosDes.toLocaleDateString("es-ES", {
        weekday: "short",
        // year: "numeric",
        // month: "long",
        day: "numeric",
      })
    );

    return arr;
  };

  useEffect(() => {
    setDates(getDate());
  }, []);
  return (
    <section className="date">
      {dates !== null &&
        dates.map((date, index) => {
          return (
            <section
              className={`day ${index === 2 ? "today" : ""}`}
              key={date.split(" ")[1]}
            >
              <h2>{date.split(" ")[1]}</h2>
              <p>{date.split(" ")[0]}</p>
            </section>
          );
        })}
    </section>
  );
};

export default JournalDate;
