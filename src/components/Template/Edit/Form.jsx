import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import TemplateBaseForm from '../Base/Form';
import axe from '../../Axios';

const TemplateEditForm = ({ location }) => {
  const [data, setData] = useState(null);
  const id = location.search.split('?id=').pop();

  const handleLoadData = () => {
    console.log(!data);
    if (!data)
      axe.get(`/admin/template/${id}`).then(response => {
        const {
          id: uid,
          title,
          generators,
          diagnosis,
          minBonus,
          maxMalus,
          maxPrice
        } = response.data;

        const renameProp = (
          oldProp,
          newProp,
          { [oldProp]: old, ...others }
        ) => ({
          [newProp]: old || false,
          ...others
        });

        const addKeys = generator => ({
          ...generator,
          keys: Array.from(Array(generator.text.length).keys())
        });

        const filterNullValues = obj =>
          Object.entries(obj)
            .filter(entry => !(entry[1] === null))
            .reduce((accum, [k, v]) => {
              accum[k] = v;
              return accum;
            }, {});

        const newGens = generators.map(generator =>
          renameProp('exam', 'isExam', generator)
        );

        console.log('newGens :', newGens);

        const exams = newGens
          .filter(generator => !generator.imageGroup === null)
          .map(generator => addKeys(filterNullValues(generator)));

        const ranges = newGens
          .filter(
            generator => !generator.min === null && !generator.max === null
          )
          .map(generator => filterNullValues(generator));

        const symptoms = newGens
          .filter(
            generator =>
              generator.min === null &&
              generator.max === null &&
              generator.imageGroup === null
          )
          .map(generator => addKeys(filterNullValues(generator)));

        console.log('symptoms', symptoms);
        console.log('filterNullValues :', filterNullValues(symptoms[0]));

        const count = [
          ...exams.map((exam, index) => ({ id: index, type: 'exams' })),
          ...ranges.map((ranges, index) => ({ id: index, type: 'ranges' })),
          ...symptoms.map((symptoms, index) => ({
            id: index,
            type: 'symptoms'
          }))
        ];

        // exams: [
        //   { imageGroup: '', isExam: false, keys: [], text: [], title: '' }
        // ],
        // ranges: [{min, max, title, isExam, price, bonus, malus}],
        // symptoms: []

        const newData = {
          uid,
          title,
          diagnosis,
          minBonus,
          maxMalus,
          maxPrice,
          exams,
          ranges,
          symptoms,
          count
        };

        setData(newData);

        console.log('newData :', newData);
      });
  };

  useEffect(handleLoadData, []);

  // load data and send it to base form of add template form
  return <div>{data && <TemplateBaseForm data={data} />}</div>;
};

export default withRouter(TemplateEditForm);
