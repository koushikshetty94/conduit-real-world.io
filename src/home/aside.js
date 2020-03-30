import React from 'react';
import { Link } from 'react-router-dom';

class Aside extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Link to={`/tags/${this.props.tag}`}>
                    <span className="tag is-rounded is-inline">{this.props.tag}
                    </span>
                </Link>
            </div>
        )
    }
}

export default Aside;