import React from 'react';
import { Heading, Header, RulesImage, Close } from './style';
import { IModalProps } from '../../interfaces';

const ModalInner = ({ closeModal }: IModalProps) => {
  return (
    <>
      <Header>
        <Heading>rules</Heading>
        <Close onClick={closeModal}></Close>
      </Header>

      <RulesImage />
    </>
  );
};

export default ModalInner;
