import React, { useState, useEffect, useMemo } from 'react';
import { Button, Card } from 'antd';
import * as TYPES from '../../Template/Generators/generatorTypes';
import Images from './Images';
import Text from './Text';
import Range from './Range';
import useExam from './useExam';
import { ExaminingModal } from '../../Loading';


// decide what type is and render
const Property = ({ property, visible: override = false }) => {
  const [{ visible, examining }, { handleExaminate, setVisible }] = useExam(override);

  useEffect(() => {
    if (!property.exam) {
      setVisible(true);
    } else setVisible(override);
  }, [override]);

  const getPropertyBase = useMemo(() => ({
    [TYPES.IMAGES]: <Images property={property} visible={visible} />,
    [TYPES.RANGE]: <Range property={property} visible={visible} />,
    [TYPES.TEXT]: <Text property={property} visible={visible} />,
  }[property.type]));

  return (
    <>
      {getPropertyBase}
      {(property.exam && !visible) && (
        <Button type="primary" onClick={handleExaminate}>
          Provést vyšetření
        </Button>
      )}
      {examining && <ExaminingModal />}
    </>
  );
};
export default Property;
