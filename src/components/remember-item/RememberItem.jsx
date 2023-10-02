import PropTypes from 'prop-types'

import './rememberItem.css'

const RememberItem = ({ numberItem, first, item }) => {

  const { title, text_info } = item

  return (
    <div className={`accordion-item py-2`}>
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${!first && "collapsed"} fs-4`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${numberItem}`}
          aria-expanded={first ? true : false}
          aria-controls={`collapse${numberItem}`}
        >
          {title}
        </button>
      </h2>
      <div
        id={`collapse${numberItem}`}
        className={`accordion-collapse collapse ${first && "show"}`}
        data-bs-parent="#accordionRemember"
      >
        <div className={`accordion-body fs-5`}>
          {text_info}
        </div>
      </div>
    </div>
  )
}

RememberItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    text_info: PropTypes.string
  }),
  first: PropTypes.bool,
  numberItem: PropTypes.number
}

export default RememberItem
