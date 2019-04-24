import React from 'react';
import { Skeleton, Spin } from 'antd';

export const LoadingSkeleton = () => {
  return <Skeleton active />;
};

export const LoadingSpin = () => {
  return <Spin style={{ margin: '0.8em' }} />;
};
