import { useState, useRef } from 'react'

function Collapse({ headerText, contentText }) {
  const [collapseOpen, setCollapseOpen] = useState(false)

  const toggle = () => {
    setCollapseOpen(!collapseOpen)
  }

  const refContent = useRef()

  return (
    <div className="collapse">
      <div className="collapse__header">
        <p className="collapse__header__text">{headerText}</p>
        <div
          className={`collapse__header__arrow ${collapseOpen}`}
          onClick={toggle}
        >
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>

      <div
        className="collapse__content"
        ref={refContent}
        style={
          collapseOpen
            ? {
                height: refContent.current.scrollHeight + 'px',
              }
            : {
                height: '0px',
              }
        }
      >
        <div className="collapse__content__son">
          <p>{contentText}</p>
        </div>
      </div>
    </div>
  )
}

export default Collapse
