import ShowcaseGrid from './ShowcaseGrid'
import { connect, actions } from '../../store'
import { MODAL_TYPES } from '../../constants'
import * as R from 'ramda'

const mapStateToProps = ({ showcases, aboutMe }) => ({
    showcases,
    onShowcaseClick: (showcase, _e) => actions.showModal({
        contentId: showcase.id,
        type: MODAL_TYPES.SHOWCASE,
        additionalContent: {
            author: R.path(['contactDetails', 'name'], aboutMe)
        }
    })
})
export default connect(mapStateToProps)(ShowcaseGrid)
