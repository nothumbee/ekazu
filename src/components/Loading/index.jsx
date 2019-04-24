import React from 'react';
import { Skeleton, Spin } from 'antd';

export const LoadingSkeleton = () => {
  return <Skeleton active />;
};

export const LoadingSpin = () => {
<<<<<<< HEAD
  return <Spin />;
=======
  return <Spin style={{ margin: '0.8em' }} />;
>>>>>>> feature/student-loading
};
