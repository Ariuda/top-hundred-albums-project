import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

class NotFound extends React.Component<RouteComponentProps> {
    state = {
        timeoutId: 0
    }
    componentDidMount() {
        this.setState({ timeoutId: setTimeout(() => {
            this.props.history.push('/');
        }, 5000)});
    }
    componentWillUnmount() {
        clearTimeout(this.state.timeoutId);
    }

    render() {
        
        return (
            <div className="not-found">
                <h1>Top 100 albums in the iTunes Store</h1>
                <div className="not-found-card">
                    <p>Sorry, we couldn't find the page you are looking for</p>
                    <p>You'll be redirected to our home page in 5 seconds.</p>
                    <p>Alternatively, <Link to="/">click here</Link> to go back.</p>
                </div>
            </div>
        )
    }

};

export default NotFound;