import { Component } from 'react'

class HeaderStore extends Component {
    render() {
        return <p style={style}>SNEAKER KNOCKERZ</p >
    }
}

const style = {
    width: '100vw',
    fontSize: '2em',
    padding: '0.2em 0.5em',
    marginBottom: '1em',
    borderBottom: '2px solid black'
}

export default HeaderStore
