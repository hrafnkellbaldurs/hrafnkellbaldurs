import SkillGrid from './SkillGrid'
import { connect, actions } from '../../store'

const mapStateToProps = ({ skills }) => ({
    skills,
    onSkillClick: (skill, _e) => actions.onSkillClick(skill)
})
export default connect(mapStateToProps)(SkillGrid)
