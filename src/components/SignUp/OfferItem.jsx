import React from 'react'

const OfferItem = ({img,texto,clase}) => {
  return (
    <section className="offer-item">
        <img src={img}/>
        <p className={clase}>{texto}</p>
    </section>
  )
}

export default OfferItem