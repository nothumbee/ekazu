import React, { useContext } from "react";
import { Icon, Upload, Form } from "antd";
import FormContext from "../../../context";
import axe from "../../../../Axios";

const ImageGroupInput = ({ id }) => {
  const context = useContext(FormContext);
  const { getFieldDecorator } = context;

  const normFile = e => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const uploadFile = ({ file }) => {
    console.log("uploadFile", file);
    axe.post("/admin/upload", file, {
      headers: { "Content-Type": "multipart/form-data" }
    });
  };

  // const props = {
  //   name: 'file',
  //   multiple: true,
  //   action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  //   onChange(info) {
  //     const status = info.file.status;
  //     if (status !== 'uploading') {
  //       console.log(info.file, info.fileList);
  //     }
  //     if (status === 'done') {
  //       message.success(`${info.file.name} file uploaded successfully.`);
  //     } else if (status === 'error') {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   }
  // };

  // action="https://owe-kazu.herokuapp.com/api/rest/admin/upload"
  return (
    <div>
      <Form.Item label="Fotky">
        <div className="dropbox">
          {getFieldDecorator(`${id}.imageGroup`, {
            valuePropName: "fileList",
            getValueFromEvent: normFile
          })(
            <Upload.Dragger customRequest={uploadFile}>
              <p className="ant-upload-drag-icon">
                <Icon className={"ant-upload-drag-icon"} type="plus" />
              </p>
              <p className="ant-upload-text">
                Klikněte nebo přeneste soubory sem.
              </p>
            </Upload.Dragger>
          )}
        </div>
      </Form.Item>
    </div>
  );
};

export default ImageGroupInput;
