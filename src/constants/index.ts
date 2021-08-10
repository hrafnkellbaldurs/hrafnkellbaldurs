export enum SECTION_ID {
  HOME = `home`,
  ABOUT = `about`,
  RESUME = `resume`,
  PORTFOLIO = `portfolio`,
}

export const SECTION_IDS = {
  HOME: SECTION_ID.HOME,
  ABOUT: SECTION_ID.ABOUT,
  RESUME: SECTION_ID.RESUME,
  PORTFOLIO: SECTION_ID.PORTFOLIO,
};

export const SKILL_LEVELS = {
  UNKNOWN: -1,
  NOVICE: 0,
  PROFICIENT: 1,
  EXPERT: 2,
};

export default {
  SECTION_IDS,
  SKILL_LEVELS,
};
