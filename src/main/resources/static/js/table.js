class Tabla extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            author = document.getElementById("author").value
        }
        const blueprints = []
    }
    render() {
        <div>
            <h2>{this.state.author}</h2>
            <table>
                <tr>
                    <th>Blueprint name</th>
                    <th>Number of points</th>
                    <th>Open</th>
                </tr>

            </table>
        </div>
    }
}



class row extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blueprintName: props.name,
            numberOfPoints: props.points
        };
    }
    render() {
        <div>
            <tr>
                <td>{this.state.blueprintName}</td>
                <td>{this.state.numberOfPoints}</td>
                <button onClick="">Open</button>
            </tr>
        </div>
    }
}
ReactDOM.render(<Tabla />, document.getElementById('table'));