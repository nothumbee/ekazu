import React from 'react';
import { Typography } from 'antd';

const { Title, Text } = Typography;

const Range = ({ property, visible }) => (
  <>
    <Title level={4}>{property.title}</Title>
    {visible && (
    <Text>
      {`${property.text} ${property.unit}`}
    </Text>
    )}
  </>
);

export default Range;
