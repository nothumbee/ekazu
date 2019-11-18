import React from 'react';
import { Skeleton, Spin, Modal } from 'antd';
import { ReactComponent as HeartBeat } from './HeartBeat.svg';
import './index.less';

export const LoadingSkeleton = () => <Skeleton active />;

export const ExaminingModal = () => (
  <Modal
    visible
    footer={null}
    closable={false}
    style={{ textAlign: 'center' }}
  >
    Vyšetřuji pacienta
    <LoadingSpin />
  </Modal>
);

export const LoadingSpin = () => <Spin style={{ margin: '0.8em' }} />;

export const LoadingHeartBeat = () => (
  <div className="cover">
    <div className="heartbeatloader">
      <HeartBeat />
      <div className="innercircle" />
      <div className="outercircle" />
    </div>
  </div>
);
