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
    <div class="cover">
      <div class="heartbeatloader">
        <HeartBeat />
        <div class="innercircle" />
        <div class="outercircle" />
      </div>
    </div>
  );
};
