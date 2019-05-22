import React, { useContext } from "react";
import { Affix, Typography, Card, Form, Button, Icon, Collapse } from "antd";

import DiagnosisSelect from "./Selects/Diagnosis/Select";
import RequiredFields from "./RequiredFields/RequiredFields";
import "./Form.less";
import CustomFieldAddForm from "./CustomFields/AddForm";
import CustomInputBase from "./CustomFields/CustomInputBase";

import FormContext from "../context";
import { TitleInput } from "./Inputs/helpers";

const { Title } = Typography;

const defaultItem = {
  bonus: null,
  exam: null,
  imageGroup: null,
  malus: null,
  max: null,
  min: null,
  price: null,
  text: null,
  title: null
};

class TemplateBaseForm extends React.Component {
  state = {};

  componentDidMount() {
    console.log("this.props.data", this.props.data);
    this.setState({ ...this.props.data });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("FORMSTATE", this.state);
  }

  handleSubmit = event => {
    event.preventDefault();

    const { diagnosis, requiredFieldsData, generators } = this.state;

    // need to remove type property from each generator if exists
    const generatorsWithoutTypes = generators.map(generator => {
      const { type, ...generatorWithoutType } = generator;
      return generatorWithoutType;
    });

    const template = {
      diagnosis: diagnosis,
      ...requiredFieldsData,
      generators: generatorsWithoutTypes
    };

    this.props.handleSubmit(template);
  };

  // handleChange = event => {
  //   const name = event.target.name;
  //   const newItem = { [name]: event.target.value };
  //   if (name === 'diagnosis') {
  //     this.setState(prevState => ({
  //       ...prevState,
  //       ...newItem
  //     }));
  //   } else
  //     this.setState(prevState => ({
  //       ...prevState,
  //       requiredFieldsData: { ...prevState.requiredFieldsData, ...newItem }
  //     }));
  // };

  // handleChangeCustomField = (id, newItem, type) => {
  //   const newGenerators = [...this.state.generators];
  //   newGenerators[id] = { ...newGenerators[id], ...newItem };
  //   this.setState(prevState => ({
  //     ...prevState,
  //     generators: newGenerators
  //   }));
  // };

  handleAddCustomField = (event, type) => {
    event.preventDefault();

    if (type !== "") {
      this.setState(prevState => ({
        ...prevState,
        generators: [...prevState.generators, { ...defaultItem, type: type }]
      }));
    }
  };

  render() {
    const { generators, requiredFieldsData } = this.state;
    const Formik = props => {
      const handleSubmit = event => {
        event.preventDefault();

        const values = props.form.getFieldsValue();
        console.log("values", values);
      };
      const form = props.form;

      return (
        <FormContext.Provider value={form}>
          <Form onSubmit={handleSubmit}>
            <TitleInput />

            <DiagnosisSelect />
            <RequiredFields data={requiredFieldsData} />
            <CustomFields data={generators} />
            <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
              <Button type="primary" htmlType="submit">
                Přidej šablonu
              </Button>
            </Form.Item>
          </Form>
        </FormContext.Provider>
      );
    };
    const WrappedDynamicFieldSet = Form.create({ name: "dynamic_form_item" })(
      Formik
    );
    return (
      <>
        <Title level={2}>Přidání šablony</Title>

        <Card>
          <WrappedDynamicFieldSet />
        </Card>
      </>
    );
  }
}

const CustomFields = ({ handleChange }) => {
  const context = useContext(FormContext);

  const { getFieldDecorator, getFieldValue, setFieldsValue } = context;

  const handleAddField = (event, type) => {
    const fields = getFieldValue("fields");
    const count = fields.length;
    const lastItem = fields[count - 1];
    const lastItemId = lastItem ? fields[count - 1].id : -1;
    const newItemId = lastItemId + 1;
    const nextFields = fields.concat({ id: newItemId, type });

    // can use data-binding to set
    // important! notify form to detect changes
    setFieldsValue({
      fields: nextFields
    });
  };

  const handleRemoveItem = item => {
    // can use data-binding to get
    const fields = getFieldValue("fields");
    // We need at least one passenger
    // if (fields.length === 1) {
    //   return;
    // }

    // can use data-binding to set
    setFieldsValue({
      fields: fields.filter(({ id }) => id !== item.id)
    });
  };

  getFieldDecorator("fields", { initialValue: [] });
  const fields = getFieldValue("fields");

  return (
    <div>
      <Affix offsetTop={64}>
        <CustomFieldAddForm handleSubmit={handleAddField} />
      </Affix>

      <Collapse>
        {fields.map((field, index) => (
          <React.Fragment key={index}>
            <CustomInputBase
              id={`${field.type}[${field.id}]`}
              type={field.type}
              onChange={handleChange}
              data={field}
              deleteButton={
                <Icon
                  className="dynamic-delete-button"
                  type="minus-circle-o"
                  onClick={() => handleRemoveItem(field)}
                />
              }
            />
          </React.Fragment>
        ))}
      </Collapse>
    </div>
  );
};

export default TemplateBaseForm;
