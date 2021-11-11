import React from 'react';
import GlobalStyle from './styles/global';

import Input from './components/Input';
import Button from './components/Button';
import Card from './components/Card';
import RowContainer from './components/RowContainer';

const App = () => (
  <div className="App">
    <Card>
      <Input />
      <Input />
      <Input />
      <RowContainer>
        <Button />
        <Button />
      </RowContainer>
    </Card>

    <GlobalStyle />
  </div>
);

export default App;
