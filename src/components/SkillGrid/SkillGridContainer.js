import SkillGrid from './SkillGrid'
import { connect, actions } from '../../store'
import { MODAL_TYPES } from '../../constants'

const mapStateToProps = ({ skills }) => ({
    skills,
    onSkillClick: (skill, _e) => actions.showModal({
        contentId: skill.id,
        type: MODAL_TYPES.SKILL
    })
})
export default connect(mapStateToProps)(SkillGrid)
