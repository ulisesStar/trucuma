class Title extends React.Component {
    render() {
        return (
            <h1>React Motion</h1>
        )
    }
}

export default class Header extends React.Component {
    render() {
        return (
            <md-card-content>
                <Title/>
            </md-card-content>
        );
    }
}
