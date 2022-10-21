import React from 'react';
import ReactDOM from 'react-dom';
import Sider from './Sider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sider />, div);
  ReactDOM.unmountComponentAtNode(div);
});
