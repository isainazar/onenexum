import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Bookmark = ({index,title,accion, clase}) => {
  return (
    <section className={`bookmark ${clase}`}>
        <span className="numbers">{index}</span>
        <p className="item-title">{title}</p>
        <FontAwesomeIcon icon={faChevronRight} onClick={accion}/>
    </section>
  )
}

export default Bookmark