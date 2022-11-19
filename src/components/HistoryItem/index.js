import React from 'react'

import './index.css'

const HistoryItem = props => {
  const {historyItem} = this.props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  return (
    <li>
      <div>
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div>
        <button>
          {' '}
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />{' '}
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
