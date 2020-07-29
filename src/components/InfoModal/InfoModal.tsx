import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import CloseIcon from '@material-ui/icons/Close';
import { rand } from '../../util/random';
// import { Bio, Tag } from '../../redux/types';

export interface Props {
  classes?: any;
  // name: string;
  // tags: Tag[];
  // bio: Bio;
  isOpen: boolean;
  onClose: any;
  render: any;
};
const getModalStyle = () => {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};
const InfoModal = (props: Props): JSX.Element => {
  const [modalStyle] = useState(getModalStyle);
  const {
    render, isOpen, onClose, classes,
  } = props;
  return (
    <Modal
      open={isOpen}
      // onClose={onClose}
    >
      <div style={modalStyle} className={classes.paper}>
        <CloseIcon onClick={onClose} />
        {render()}
      </div>

    </Modal>
  );
};

export { InfoModal };
