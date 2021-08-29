/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ReactModal from 'react-modal';
import * as R from 'ramda';
import classNames from 'classnames';

import { createGlobalLocalClassnames } from '@/scripts/utils';

import { MODAL_SIZE, MODAL_TYPE, MODAL_TYPES } from '../constants';
import * as styles from './Modal.module.scss';

ReactModal.setAppElement(`#___gatsby`);

const createDecoratorClassname = (key: string, val: string) =>
  `${R.toLower(key)}-${R.toLower(val)}`;
const createTypeClassname = R.partial(createDecoratorClassname, [`type`]);
const createSizeClassname = R.partial(createDecoratorClassname, [`size`]);

const createReactModalClassname = (base: string, other?: string) => ({
  base: classNames(base, other),
  afterOpen: `${base}--after-open`,
  beforeClose: `${base}--before-close`,
});

export type ModalProps = ReactModal.Props & {
  isOpen: boolean;
  contentLabel: string;
  rootClassName: string;
  overlayClassName: string;
  type?: MODAL_TYPE;
  size?: MODAL_SIZE;
  onClose: (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>,
  ) => void;
};

export const Modal: React.FC<ModalProps> = (props) => {
  const {
    isOpen,
    contentLabel,
    children,
    overlayClassName,
    rootClassName: _rootClassName,
    onClose,
    type: _type,
    size: _size,
    ...rest
  } = props;
  const type = R.defaultTo(MODAL_TYPES.DEFAULT, _type);
  const size = R.defaultTo(MODAL_SIZE.SMALL, _size);

  const handleOnRequestClose = (
    event: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>,
  ) => {
    onClose(event);
  };

  // The highest parent below ReactModalPortal is the overlay
  // We want to have a root to set styles on
  const rootClassName = `ModalPortal`;
  const portalClassName = classNames(
    createGlobalLocalClassnames(styles, rootClassName),
    createTypeClassname(type),
    createSizeClassname(size),
    _rootClassName,
  );

  return (
    <ReactModal
      {...rest}
      isOpen={isOpen}
      contentLabel={contentLabel}
      onRequestClose={handleOnRequestClose}
      portalClassName={portalClassName}
      overlayClassName={createReactModalClassname(
        `modalOverlay`,
        overlayClassName,
      )}
      className={createReactModalClassname(`modalContent`)}
      bodyOpenClassName={`${rootClassName}--open__Body`}
      htmlOpenClassName={`${rootClassName}--open__Html`}
      closeTimeoutMS={200}
    >
      {children}
    </ReactModal>
  );
};
