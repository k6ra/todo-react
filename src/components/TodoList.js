import React from 'react';
// �R���|�[�l���g��ǂݍ���
import Todo from './Todo';
import '../styles/todoList.css';

const TodoList = (props) => {
    // �e�R���|�[�l���g����l���󂯎��
    const { todos, checkTodo } = props;
    const list = [];
    // TODO�f�[�^�̐��������X�g���쐬
    todos.forEach((todo, index) =>
        list.push(<Todo key={index} todo={todo} checkTodo={checkTodo} />
    ));
    return (
        <ul className="todoList">
            {list}
        </ul>
    );
}

// �R���|�[�l���g���G�N�X�|�[�g
export default TodoList;
