import React from 'react'
import {connect} from 'react-redux'
import List from "./List";

const mapStateToProps = (state: any) => {
    return {
        lists: state.lists,
    }
}

export default connect(mapStateToProps, null)(List)
