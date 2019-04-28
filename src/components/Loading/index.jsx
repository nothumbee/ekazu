import React from 'react';
import { Skeleton, Spin } from 'antd';
import { ReactComponent as HeartBeat } from './HeartBeat.svg';
import './index.css';

export const LoadingSkeleton = () => {
  return <Skeleton active />;
};

export const LoadingSpin = () => {
  return <Spin style={{ margin: '0.8em' }} />;
};

export const LoadingHeartBeat = () => {
  return (
    <div className="cover">
      <div className="heartbeatloader">
        <HeartBeat />
        <div className="innercircle" />
        <div className="outercircle" />
      </div>
    </div>
  );
};
