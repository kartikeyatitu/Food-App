import React, { Fragment } from 'react'
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'
const Backdrop = props => {


    return <div className={classes.backdrop} onClick={props.onClose} />
}

const ModalOverLay = props => {


    return <div className={classes.modal}>

        <div className={classes.content}>{props.children}</div>

    </div>

};
const PortalElement = document.getElementById('overlays');
const Modal = (props) => {

    return (
        <Fragment>

            {ReactDOM.createPortal(<Backdrop  onClose={props.onClose}/>,PortalElement)}
            {ReactDOM.createPortal(<ModalOverLay>{props.children}</ModalOverLay>,PortalElement)}
        </Fragment>

    );



};
export default Modal;