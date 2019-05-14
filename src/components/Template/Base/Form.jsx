import React from "react";
import { Affix, Typography, Card } from "antd";

import SelectDiagnosis from "./Selects/Diagnosis/Select";
import RequiredFields from "./RequiredFields/RequiredFields";
import "./Form.less";
import CustomFieldAddForm from "./CustomFields/AddForm";
import CustomInputBase from "./CustomFields/CustomInputBase";

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

  // handleSubmit = event => {
  //   // event.preventDefault();
  //   // axios.post();

  //   const {
  //     ranges,
  //     exams,
  //     symptoms,
  //     diagnosis,
  //     minBonus,
  //     maxMalus,
  //     maxPrice
  //   } = this.state;

  //   const rRanges = Object.values(ranges.data);

  //   const rSymptoms = Object.values(symptoms.data).map(
  //     ({ title, textGroup }) => ({
  //       title: title,
  //       text: Object.values(textGroup || {})
  //     })
  //   );

  //   const rExams = Object.values(exams.data).map(exam => ({
  //     title: exam.title,
  //     exam: true,
  //     show: exam.show,
  //     price: exam.price,
  //     malus: exam.malus,
  //     bonus: exam.bonus,
  //     text: Object.values(exam.textGroup || {}),
  //     imageGroup: [
  //       {
  //         // error undefined
  //         title: exam.imageGroup ? exam.imageGroup.title : '',
  //         images: exam.imageGroup ? Object.values(exam.imageGroup.images) : []
  //       }
  //     ]
  //   }));

  //   const template = {
  //     diagnosis,
  //     minBonus,
  //     maxMalus,
  //     maxPrice,
  //     generators: [...rExams, ...rRanges, ...rSymptoms] // contains only self-contained objects
  //   };
  //   console.log('template', template);
  // };
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

  handleChange = event => {
    const name = event.target.name;
    const newItem = { [name]: event.target.value };
    console.log("NEWEOEM", newItem);
    if (name === "diagnosis") {
      this.setState(prevState => ({
        ...prevState,
        ...newItem
      }));
    } else
      this.setState(prevState => ({
        ...prevState,
        requiredFieldsData: { ...prevState.requiredFieldsData, ...newItem }
      }));
  };

  handleChangeCustomField = (id, newItem, type) => {
    const newGenerators = [...this.state.generators];
    newGenerators[id] = { ...newGenerators[id], ...newItem };
    this.setState(prevState => ({
      ...prevState,
      generators: newGenerators
    }));
  };

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
    const { diagnosis, generators, requiredFieldsData } = this.state;

    return (
      <>
        <Title level={2}>Přidání šablony</Title>

        <Affix offsetTop={64}>
          <CustomFieldAddForm handleSubmit={this.handleAddCustomField} />
        </Affix>

        <Card>
          <Title level={2}>Šablona</Title>

          <form onSubmit={this.handleSubmit}>
            <SelectDiagnosis
              diagnosis={diagnosis}
              handleChange={this.handleChange}
            />
            <RequiredFields
              onChange={this.handleChange}
              data={requiredFieldsData}
            />
            <CustomFields
              data={generators}
              // fields={this.state.customFields}
              handleChange={this.handleChangeCustomField}
            />
            <input type="submit" value="Přidat template" />
          </form>
        </Card>
      </>
    );
  }
}

const CustomFields = ({ handleChange, data = [] }) => {
  return data.map((field, index) => {
    let fieldType;

    if (field.type) {
      fieldType = field.type;
    } else if (field.min && field.max) {
      fieldType = "ranges";
    } else if (field.imageGroup) {
      fieldType = "exams";
    } else fieldType = "symptoms";

    return (
      <React.Fragment key={index}>
        <CustomInputBase
          id={index}
          type={fieldType}
          onChange={handleChange}
          data={field}
        />
      </React.Fragment>
    );
  });
};

export default TemplateBaseForm;

// handleAddCustomFieldDefaultData = type => {
//   const defaultData = () => {
//     switch (type) {
//       case 'exams':
//         return {
//           title: '',
//           exam: true,
//           price: '',
//           malus: '',
//           bonus: '',
//           textGroup: {},
//           imageGroup: {
//             title: '',
//             images: {}
//           }
//         };
//       case 'ranges':
//         return {
//           min: '',
//           max: '',
//           title: ''
//         };
//       case 'symptoms':
//         return {
//           title: '',
//           textGroup: {}
//         };

//       default:
//         return null;
//     }
//   };

//   this.setState(prevState => ({
//     [type]: {
//       ...prevState[type],
//       data: {
//         ...prevState[type].data,
//         [prevState.customFields[type].length - 1]: defaultData()
//       }
//     }
//   }));
// };
