import React, { useRef, useContext } from 'react';
import { Affix, Icon, List } from 'antd';

import FormContext from '../context';
import immutablySwapItems from '../../helpers/arraySwap';
import GeneratorsList from '../Generators/List';
import GroupAddButton from './AddForm';
import TitleInput from '../Base/Inputs/Helpers/TitleInput';

const GroupsList = ({ loading = false }) => {
  const count = useRef(0);
  const { getFieldDecorator, setFieldsValue, getFieldValue } = useContext(
    FormContext,
  );
  const groupsKeysName = 'groupsKeys';

  const handleAddGroup = () => {
    const nextId = count.current++;
    const nextFields = groupsKeys.concat(nextId);
    setFieldsValue({ [groupsKeysName]: nextFields });
  };

  const handleRemoveGroup = (groupId) => {
    const nextFields = groupsKeys.filter((id) => id !== groupId);
    setFieldsValue({ [groupsKeysName]: nextFields });
  };

  const sortItem = (direction) => ({
    up: (field) => {
      const fieldIndex = groupsKeys.indexOf(field);
      const nextFields = immutablySwapItems(
        groupsKeys,
        fieldIndex,
        fieldIndex - 1,
      );
      nextFields
          && setFieldsValue({
            [groupsKeysName]: nextFields,
          });
    },
    down: (field) => {
      const fieldIndex = groupsKeys.indexOf(field);
      const nextFields = immutablySwapItems(
        groupsKeys,
        fieldIndex,
        fieldIndex + 1,
      );
      nextFields
          && setFieldsValue({
            [groupsKeysName]: nextFields,
          });
    },
  }[direction]);

  getFieldDecorator('id', { initialValue: '' });
  getFieldDecorator(groupsKeysName, { initialValue: [] });
  const groupsKeys = getFieldValue(groupsKeysName);
  return (
    <div style={{ width: '100%' }}>
      <Affix offsetTop={64}>
        <GroupAddButton handleClick={handleAddGroup} />
      </Affix>
      <List loading={loading}>
        {groupsKeys.map((id) => (
          <List.Item key={id}>
            <GeneratorsList
              id={`groups[${id}]`}
              actions={[
                <Icon
                  className="dynamic-delete-button"
                  type="minus-circle-o"
                  onClick={() => handleRemoveGroup(id)}
                />,
                <Icon type="up" onClick={() => sortItem('up')(id)} />,
                <Icon type="down" onClick={() => sortItem('down')(id)} />,
              ]}
            />
          </List.Item>
        ))}
      </List>
    </div>
  );
};

export default GroupsList;
