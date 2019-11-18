import React from 'react';
import { Typography } from 'antd';

const { Title, Text: TextField } = Typography;

const Text = ({ property, visible }) => (
  <>
    <Title level={4}>{property.title}</Title>
    {visible && <TextField>{property.text}</TextField>}
  </>
);

export default Text;
