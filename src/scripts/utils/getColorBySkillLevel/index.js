import { SKILL_LEVELS } from '../../../constants'
import colors from '../../../styles/utils/_colors.scss'
import * as R from 'ramda'

const skillLevelColorMap = {
    [SKILL_LEVELS.NOVICE]: colors.skillLevelColorNovice,
    [SKILL_LEVELS.PROFICIENT]: colors.skillLevelColorProficient,
    [SKILL_LEVELS.EXPERT]: colors.skillLevelColorExpert
}

const getColorBySkillLevel = R.prop(R.__, skillLevelColorMap)

export default getColorBySkillLevel
