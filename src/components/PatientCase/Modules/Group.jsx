// isPartialExam
import React, { useState } from 'react';
import {
  Button, List, Typography, Card,
} from 'antd';
import Property from './Property';
import useExam from './useExam';
import { ExaminingModal } from '../../Loading';

const { Title } = Typography;

const Group = ({ group }) => {
  const [{ visible, examining }, { handleExaminate, setVisible }] = useExam();

  return (
    <>
      <Card style={{
        width: '100%', backgroundColor: '#fafafa', marginTop: '20px', marginBottom: '20px',
      }}
      >
        <Title level={3}>
          {group.title}
        </Title>

        {(group.isPartialExam && !visible) && (
        <Button type="primary" onClick={handleExaminate}>
          Provést všechna vyšetření v této skupině
        </Button>
        )}

        <List
          itemLayout="vertical"
          size="large"
          bordered
          dataSource={group.properties}
          renderItem={(property) => (
            <List.Item>
              <Property property={property} visible={visible} />
            </List.Item>
          )}
        />

      </Card>
      { examining
     && <ExaminingModal />}
    </>
  );
};

export default Group;
