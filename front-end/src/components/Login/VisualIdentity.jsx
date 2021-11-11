import React from 'react';
import { Typography } from 'antd';

function VisualIdentity() {
  const { Title } = Typography;
  return (
    <section>
      <Title style={ { textAlign: 'center', margin: '50px 0 0 0' } }>Nome do app</Title>
    </section>
  );
}

export default VisualIdentity;
