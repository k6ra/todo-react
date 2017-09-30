import React from 'react';
import '../styles/todo.css';

// �R���|�[�l���g��錾
const Todo = (props) => {
    // �e�R���|�[�l���g����l���󂯎��
    const { todo, checkTodo } = props;
    // �`�F�b�N�ς݂�TODO������
    if (todo.isChecked) {
        return (
            <li className="checked" onClick={() => checkTodo(todo.id)}>{todo.text}</li>
        i)
    } else {
       return (
          <li onClick={() => checkTodo(todo.id)}>{todo.text}</li>
       )
    }
};
// �R���|�[�l���g���G�N�X�|�[�g
export default Todo;
