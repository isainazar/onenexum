import React from 'react'

const SectionButton = ({texto, img, accion}) => {
  return (
    <section className="box" onClick={accion}>
        <img src={img} />
        <p>{texto}</p>
    </section>
  )
}

export default SectionButton