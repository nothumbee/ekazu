import React, { useContext } from 'react';
import { Icon, Upload, Form } from 'antd';
import FormContext from '../../../context';

const ImageGroupInput = ({ id }) => {
  const context = useContext(FormContext);
  const { getFieldDecorator } = context;

  const normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <div>
      <b>Přidat fotky:</b> <br />
      <Form.Item label="Fotky">
        <div className="dropbox">
          {getFieldDecorator(`${id}.imageGroup`, {
            valuePropName: 'fileList',
            getValueFromEvent: normFile
          })(
            <Upload.Dragger name="files" action="/upload.do">
              <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload.
              </p>
            </Upload.Dragger>
          )}
        </div>
      </Form.Item>
    </div>
  );
};

export default ImageGroupInput;
