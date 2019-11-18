// render image property
import React from 'react';
import { Typography } from 'antd';

const { Title, Text } = Typography;


const Images = ({ property, visible }) => (
  <>
    <Title level={4}>{property.title}</Title>
    {visible && (
    <Text>
      {property.text}
    </Text>
    )}
  </>
);

// images.map((image, index) => (
//   <div
//     key={index}
//     style={{
//       width: 120,
//       height: 'auto',
//       backgroundColor: 'blue',
//       color: 'white',
//       margin: 10,
//       padding: 10,
//     }}
//   >
//       image
//     {image.filename}
//   </div>
//   //   <img key={index} src={image.fileName} alt={image.text} />
// ));

export default Images;
