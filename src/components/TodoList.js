import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItems';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {
  return(
    <TodoListBlock>
      <TodoItem text="공부하기" done={true} />
      <TodoItem text="메이플하기" done={true} />
      <TodoItem text="회식하기" done={false} />
      <TodoItem text="집에가기" done={false} />
    </TodoListBlock>
  );
}

export default TodoList;