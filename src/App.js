import React, { useState } from 'react'

import { names } from './data'

function App() {
  const [showParagraph, setShowParagraph] = useState({})

  const toggleParagraph = (index) => {
    setShowParagraph({ ...showParagraph, [index]: !showParagraph[index] })
  }
  return (
    <main>
      <section className='container'>
        <h1>questions</h1>

        {names.map((quest) => {
          const { question, index } = quest
          return (
            <article className='question'>
              <div className='quest-container' key={index}>
                <h5>{question}</h5>

                <button
                  className='question-btn'
                  onClick={() => toggleParagraph(index)}
                >
                  {showParagraph[index] ? (
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      t='1551322312294'
                      viewBox='0 0 1024 1024'
                      version='1.1'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <defs></defs>
                      <path d='M152 486q0-6 6-10l232-232q6-6 16-6t16 6l232 232q6 6 6 16t-6 16l-20 20q-6 6-16 6t-16-6L512 344l-204 204q-6 6-16 6t-16-6l-20-20q-6-6-6-16Z'></path>
                    </svg>
                  ) : (
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      stroke-width='0'
                      t='1551322312294'
                      viewBox='0 0 1024 1024'
                      version='1.1'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <defs></defs>
                      <path d='M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z'></path>
                      <path d='M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z'></path>
                    </svg>
                  )}
                </button>
              </div>
              {showParagraph[index] && (
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ratione mollitia nobis qui molestias ad eveniet, provident
                  iure nihil? Nobis amet distinctio praesentium eaque ipsam
                  magnam, aliquid et ducimus fugit aliquam.
                </p>
              )}
            </article>
          )
        })}
      </section>
    </main>
  )
}

export default App
