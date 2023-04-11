import React from 'react'

const QuizBackground = ({page,clase}) => {
  return (
    <section className={`quizBackground p-${page} ${clase} ` }></section>
  )
}

export default QuizBackground