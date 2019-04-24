import React from 'react';
import withEither from '../HOC/withEither';

import { Typography } from 'antd';
import { LoadingSkeleton } from '../Loading';

const { Title, Text } = Typography;

const PropertiesWithLoading = ({ properties }) =>
  properties.map((field, index) => (
    <div key={index}>
      <Title level={3}>{field.title}</Title>
      <Text>{field.text}</Text>
    </div>
  ));

const isLoadingConditionFn = props => props.loading;

const Properties = withEither(isLoadingConditionFn, LoadingSkeleton)(
  PropertiesWithLoading
);

export default Properties;
