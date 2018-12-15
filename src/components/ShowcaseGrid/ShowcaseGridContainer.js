import ShowcaseGrid from './ShowcaseGrid'
import { connect, actions } from '../../store'
import { MODAL_TYPES } from '../../constants'

const mapStateToProps = ({ showcases }) => ({
    showcases,
    onShowcaseClick: (showcase, _e) => actions.showModal({
        contentId: showcase.id,
        type: MODAL_TYPES.SHOWCASE
    })
})
export default connect(mapStateToProps)(ShowcaseGrid)
