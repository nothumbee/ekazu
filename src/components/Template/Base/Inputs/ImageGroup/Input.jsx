import React, { useContext } from 'react';
import { Icon, Upload, Form } from 'antd';
import FormContext from '../../../context';
import axe from '../../../../Axios';

const ImageGroupInput = ({ id }) => {
  const context = useContext(FormContext);
  const { getFieldDecorator, setFieldsValue, getFieldValue } = context;
  const imagesField = `${id}.imageGroup`;

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const afterUploadFile = (filename) => {
    const images = getFieldValue(imagesField);
    const newImagesField = [...images, filename];
    setFieldsValue({
      [imagesField]: newImagesField,
    });
  };

  const uploadFile = (event) => {
    const {
      file, onProgress, onSuccess, onError,
    } = event;
    const formData = new FormData();
    formData.append('file', file);

    axe.post('/admin/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: ({ total, loaded }) => {
        onProgress({ percent: parseFloat(Math.round(loaded / total * 100).toFixed(2)) }, file);
      },
    }).then(({ data: response }) => {
      onSuccess(response, file);
      afterUploadFile(response.filename);
    })
      .catch(onError);
  };

  getFieldDecorator(imagesField, { initialValue: [] });

  return (
    <div>
      <Form.Item label="Fotky">
        <div className="dropbox">
          {getFieldDecorator('tempImagesField', {
            valuePropName: 'fileList',
            getValueFromEvent: normFile,
          })(
            <Upload.Dragger customRequest={uploadFile} multiple>
              <p className="ant-upload-drag-icon">
                <Icon className="ant-upload-drag-icon" type="plus" />
              </p>
              <p className="ant-upload-text">
                Klikněte nebo přeneste soubory sem.
              </p>
            </Upload.Dragger>,
          )}
        </div>
      </Form.Item>
    </div>
  );
};

export default ImageGroupInput;
