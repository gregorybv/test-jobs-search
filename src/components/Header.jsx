// eslint-disable-next-line no-unused-vars
import React from "react"
import close from "../assets/icon-remove.svg"

const Header = ({ keywords, removeKeywords, clearAll }) => {
  return (
    <div className='header-container'>
      <ul>
        {keywords.map((key, id) => {
          return (
            <li key={id}>
              {key}
              <button className='close' onClick={() => removeKeywords(key)}>
                <img src={close} alt='' />
              </button>
            </li>
          )
        })}
        <a href='/#' onClick={() => clearAll()}>
          Clear
        </a>
      </ul>
    </div>
  )
}

export default Header
