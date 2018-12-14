import ShowcaseGrid from './ShowcaseGrid'
import { connect, actions } from '../../store'

const mapStateToProps = ({ showcases }) => ({
    showcases,
    onShowcaseClick: (showcase, _e) => actions.onShowcaseClick(showcase)
})
export default connect(mapStateToProps)(ShowcaseGrid)
