import React, { Component } from 'react';
// �R���|�[�l���g��ǂݍ���
import Add from './Add';
import TodoList from './TodoList';
import '../styles/index.css';

class App extends Component {
    constructor(props) {
        super(props);
        // �֐��̃o�C���h
        this.addTodo = this.addTodo.bind(this);
        this.checkTodo = this.checkTodo.bind(this);
        // state�̏�����
        this.state = {todos: []};
    }

    // TODO�ǉ��A�N�V����
    addTodo(text) {
        const { tods } = this.state;
        this.setState(
            {
                todos: [...todos, { id: todos.length, text: text, isChecked: false }]
            }
        );
    }

    checkTodo(id) {
        const todos = [...this.state.todos];
        todos.forEach((todo) => {
            if (todo.id === id) {
                todo.isChecked = !todo.isChecked;
            }
        });
        this.setState(
            { todos: todos }
        );
    }

    render() {
        const { todos } = this.state;
        // Add�R���|�[�l���g��TodoList�R���|�[�l���g�̔z�u
        return (
            <div className="App">
                <Add addTodo={this.addTodo} />
            </div>
        );
    }
}

export default App;
