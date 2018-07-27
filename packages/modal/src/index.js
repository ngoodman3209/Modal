import React, { component } from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'
const { bool, func } = PropTypes

class Modal extends component {
  static propTypes = {
    isOpen: bool.isRequired,
    toggleModal: func.isRequired
  }

  render(){
    const { isOpen, toggleModal } = this.propTypes

    if (!isOpen)
    return null

    return (
      <Container onClick={toggleModal}>
        {this.props.children}
      </Container>
    )
  }
}

export default ModalEntry