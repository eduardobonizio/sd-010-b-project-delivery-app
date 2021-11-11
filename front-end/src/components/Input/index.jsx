import React from 'react';
import { Label, Input, Container } from './styles';

const l = 'Label';
const p = 'placeholder aqui';

const InputComponent = () => (
  <Container>
    <Label htmlFor={ l }>
      {l}
    </Label>
    <Input type="text" name={ l } id={ l } placeholder={ p } />
  </Container>
);

export default InputComponent;
