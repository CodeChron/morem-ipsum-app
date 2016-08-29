import React from 'react'
import Clipboard from 'clipboard'
import classnames from 'classnames'

export default class ClipboardBtn extends React.Component {

  constructor(props) {
    super(props);
    this.clipboard = new Clipboard('.clipboard-btn')
    this.state = {
      copied: false
    }
  }
  componentWillUnmount () {
    this.clipboard.destroy()
  }

  handleClick (e) {
    const self = this
    this.clipboard.on('success', (e) => {
      e.clearSelection()
      self.setState({ copied: true })
      setTimeout(() => {
        self.setState({ copied: false })
      }, 1500)
    })
  }

  render () {
    const btnClasses = classnames('clipboard-btn', {
       'copied': this.state.copied
    })

    return (
      <button className={btnClasses} data-clipboard-text={this.props.clipboardText} onClick={this.handleClick.bind(this)}>{this.props.label}</button>
    )
  }
}

ClipboardBtn.propTypes = {
  label: React.PropTypes.string,
  clipboardText: React.PropTypes.string.isRequired
}

ClipboardBtn.defaultProps = {
  label: 'Copy to Clipboard'
}