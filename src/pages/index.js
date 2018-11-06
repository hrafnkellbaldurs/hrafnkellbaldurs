import React from 'react'
import OldLayout from '../components/OldLayout'
import '../css/index.scss'
// import { Link } from 'gatsby'

// class IndexPage extends React.PureComponent {
//   render () {
//     return (
//       <Layout>
//         <h1>Hi people</h1>
//         <p>Welcome to your new Gatsby site.</p>
//         <p>Now go build something great.</p>
//         <Link to="/page-2/">Go to page 2</Link>
//       </Layout>
//     )
//   }
// }

class IndexPage extends React.PureComponent {
    render() {
        return (
            <OldLayout>
                <h1>Hi</h1>
            </OldLayout>
        )
    }
}

export default IndexPage
