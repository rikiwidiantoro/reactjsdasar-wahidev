import { Component } from "react";

class Sub extends Component {
    componentWillUnmount() {
        this.props.ubahMakanan('Sate')
    }

    render() {
        return (
            <div>
                <h5>Component Sub Lifecycle</h5>
            </div>
        )
    }
}

export default Sub