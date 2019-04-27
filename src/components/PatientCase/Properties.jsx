import React from 'react';
import withEither from '../HOC/withEither';

import { Typography, List } from 'antd';
import { LoadingSkeleton, LoadingHeartBeat } from '../Loading';

const { Title, Text } = Typography;

const PropertiesWithLoading = ({ properties }) => (
  <List
    style={{ marginBottom: 20, background: '#fff' }}
    bordered
    dataSource={properties}
    renderItem={item => (
      <List.Item>
        <Title level={4}>{item.title}</Title> {item.text}
      </List.Item>
    )}
  />
);

const isLoadingConditionFn = props => props.loading;

const Properties = withEither(isLoadingConditionFn, LoadingHeartBeat)(
  PropertiesWithLoading
);

export default Properties;
