import React from 'react';

import { useAppDispatch, useAppSelector } from '@/store';

import {
  ShowcaseType,
  useShowcasesFragmentStaticQuery,
} from '@/fragments/showcases';
import { SkillType, useSkillsFragmentStaticQuery } from '@/fragments/skills';
import { MODAL_SIZE, MODAL_SIZES, MODAL_TYPE, MODAL_TYPES } from './constants';
import { hideModal, selectModal } from './modalSlice';
import { Modal } from './Modal';
import {
  ShowcaseModalContent,
  ShowcaseModalContentType,
} from './ShowcaseModalContent';
import { SkillModalContent, SkillModalContentType } from './SkillModalContent';

enum MODAL_CONTENT_COLLECTION_KEY {
  DEFAULT = `default`,
  SKILL = `skills`,
  SHOWCASE = `showcases`,
}

const MODAL_CONTENT_COLLECTION_KEYS: Record<
  MODAL_TYPE,
  MODAL_CONTENT_COLLECTION_KEY
> = {
  DEFAULT: MODAL_CONTENT_COLLECTION_KEY.DEFAULT,
  SKILL: MODAL_CONTENT_COLLECTION_KEY.SKILL,
  SHOWCASE: MODAL_CONTENT_COLLECTION_KEY.SHOWCASE,
};

export type ModalContentComponentProps<Content> = {
  content?: Content | null;
  isOpen: boolean;
  titleId: string;
  descriptionId: string;
  className?: string;
};
type ModalContent = ShowcaseModalContentType & SkillModalContentType;

type ModalConfig<ContentComponent> = {
  size: MODAL_SIZE;
  contentComponent: ContentComponent;
  contentCollectionKey: MODAL_CONTENT_COLLECTION_KEY | null;
  contentLabel: string;
  classNameBase: string;
};

const DefaultModalContent: React.FC = () => <span />;

// Configs for all modal variations
const modalConfigs: {
  DEFAULT: ModalConfig<typeof DefaultModalContent>;
  SKILL: ModalConfig<typeof SkillModalContent>;
  SHOWCASE: ModalConfig<typeof ShowcaseModalContent>;
} = {
  DEFAULT: {
    size: MODAL_SIZES.SMALL,
    contentComponent: DefaultModalContent,
    contentCollectionKey: null,
    contentLabel: `Modal`,
    classNameBase: `DefaultModal`,
  },
  SKILL: {
    size: MODAL_SIZES.SMALL,
    contentComponent: SkillModalContent,
    contentCollectionKey: MODAL_CONTENT_COLLECTION_KEYS[MODAL_TYPES.SKILL],
    contentLabel: `Skill Modal`,
    classNameBase: `SkillModal`,
  },
  SHOWCASE: {
    size: MODAL_SIZES.MEDIUM,
    contentComponent: ShowcaseModalContent,
    contentCollectionKey: MODAL_CONTENT_COLLECTION_KEYS[MODAL_TYPES.SHOWCASE],
    contentLabel: `Showcase modal`,
    classNameBase: `ShowcaseModal`,
  },
};

type ContentCollections = {
  [MODAL_CONTENT_COLLECTION_KEY.DEFAULT]: { id: string }[];
  [MODAL_CONTENT_COLLECTION_KEY.SHOWCASE]: ShowcaseType[];
  [MODAL_CONTENT_COLLECTION_KEY.SKILL]: SkillType[];
};
const useContentCollections = (): ContentCollections => {
  const showcases = useShowcasesFragmentStaticQuery();
  const skills = useSkillsFragmentStaticQuery();

  return {
    default: [],
    showcases,
    skills,
  };
};

export const ModalRoot: React.FC = () => {
  const modal = useAppSelector(selectModal);
  const contentCollections = useContentCollections();

  const dispatch = useAppDispatch();
  const handleOnClose = () => {
    dispatch(hideModal());
  };

  const type = modal?.type ?? MODAL_TYPES.DEFAULT;
  const { isOpen, contentId } = modal;
  const modalConfig = modalConfigs[type];
  const {
    size,
    classNameBase,
    contentComponent: ContentComponent,
    contentLabel,
  } = modalConfig;
  const contentCollectionKey =
    modalConfig.contentCollectionKey ?? MODAL_CONTENT_COLLECTION_KEYS.DEFAULT;
  const titleId = `modal-title`;
  const descriptionId = `modal-description`;

  const contentCollection = contentCollections[contentCollectionKey];
  const content = contentCollection.find(
    (contentItem) => contentItem.id === contentId,
  ) as ModalContent;

  return (
    <Modal
      type={type}
      isOpen={isOpen}
      size={size}
      contentLabel={contentLabel}
      aria={{ labelledby: titleId, describedby: descriptionId }}
      onClose={handleOnClose}
      rootClassName={`${classNameBase}__root`}
      overlayClassName={`${classNameBase}__overlay`}
    >
      <ContentComponent
        content={content}
        isOpen={isOpen}
        titleId={titleId}
        descriptionId={descriptionId}
        className="ModalContentComponent"
      />
    </Modal>
  );
};
