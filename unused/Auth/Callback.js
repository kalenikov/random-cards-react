import React from 'react'

import {withAuth} from './Auth'



class Callback extends React.Component {
   componentDidMount() {
        const {hadnleAuth} = this.props
       if (hadnleAuth){
           hadnleAuth()
       }
   }

    render() {
        return <div>Loading....</div>
    }
}

export default withAuth(Callback)
