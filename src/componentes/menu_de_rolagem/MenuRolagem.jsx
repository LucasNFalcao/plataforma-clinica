import PropTypes from 'prop-types'

import './menuRolagem.css'

const MenuRolagem = ({ className }) => {
  return (
    <div className={`row menu-container ${className}`}>
        <div id="list-example" className={`col-4 list-group`}>
          <a className={`list-group-item list-group-item-action`} href="#list-item-1">
            Item 1
          </a>
          <a className={`list-group-item list-group-item-action`} href="#list-item-2">
            Item 2
          </a>
          <a className={`list-group-item list-group-item-action`} href="#list-item-3">
            Item 3
          </a>
          <a className={`list-group-item list-group-item-action`} href="#list-item-4">
            Item 4
          </a>
        </div>
        <div
          data-bs-spy="scroll"
          data-bs-target="#list-example"
          data-bs-smooth-scroll="true"
          className={`col-8 overflow-y-auto menu-rolagem`}
          tabIndex="0"
        >
          <h4 id="list-item-1">Item 1</h4>
          <p>
            This is some placeholder content for the scrollspy page. Note that as you scroll down
            the page, the appropriate navigation link is highlighted. Its repeated throughout the
            component example. We keep adding some more example copy here to emphasize the scrolling
            and highlighting.
          </p>
          <h4 id="list-item-2">Item 2</h4>
          <p>
            This is some placeholder content for the scrollspy page. Note that as you scroll down
            the page, the appropriate navigation link is highlighted. Its repeated throughout the
            component example. We keep adding some more example copy here to emphasize the scrolling
            and highlighting.
          </p>
          <h4 id="list-item-3">Item 3</h4>
          <p>
            This is some placeholder content for the scrollspy page. Note that as you scroll down
            the page, the appropriate navigation link is highlighted. Its repeated throughout the
            component example. We keep adding some more example copy here to emphasize the scrolling
            and highlighting.
          </p>
          <h4 id="list-item-4">Item 4</h4>
          <p>
            This is some placeholder content for the scrollspy page. Note that as you scroll down
            the page, the appropriate navigation link is highlighted. Its repeated throughout the
            component example. We keep adding some more example copy here to emphasize the scrolling
            and highlighting.
          </p>
        </div>
    </div>
  )
}

MenuRolagem.propTypes = {
  className: PropTypes.string
}

export default MenuRolagem
