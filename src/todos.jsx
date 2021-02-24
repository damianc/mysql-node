import React from 'react';

export class Todos extends React.Component {
  state = {
    todos: []
  };

  render() {
    return <div>
      <h1>TODOS</h1>

      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.todos.map((todo, idx) => {
              return <tr key={idx}>
                <td>{ todo.desc }</td>
                <td>{ todo.done ? 'YEP' : 'NOPE' }</td>
              </tr>;
            })
          }
        </tbody>
      </table>
    </div>;
  }

  componentDidMount() {
    fetch('http://localhost:3600/api/todos')
    .then(res => res.json())
    .then(json => {
      this.setState({
        todos: json
      });
    });
  }
}