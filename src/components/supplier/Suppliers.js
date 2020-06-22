import React from 'react';
import image1 from '../../assets/image/1.jpg';
import image2 from '../../assets/image/2.jpg';
import image3 from '../../assets/image/3.jpg';
import image4 from '../../assets/image/4.jpg';
import image5 from '../../assets/image/5.jpg';
import SubHero from '../share/SubHero';
import Slogan from '../share/Slogan';
import MiddleLine from '../share/MiddleLine';
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';
import SupplierForm from './SupplierForm';
import Space from '../share/Space';

const suppliers = {
  title: [
    'AUTHORIZED MANUFACTURER',
    'EXPERIENCE IN THE FIELD',
    'SUFFICIENT CAPACITY',
    'INTERNATIONAL STANDARD',
    'SUSTAINABLE PRODUCTION'
  ],
  text: [
    'You need to be authorized by the Vietnamese Ministry of Planning and Investment to manufacture the products to be supplied. Please provide your license number. We want our clients to rest assured of all legal matters and custom procedures to go smoothly for all parties involved.',
    'You need to be experienced in producing the items to be supplied. You need to be well-informed about the products to assist your clients in making the best choices. You need to be able to deliver the products in their best quality possible.',
    'Your monthly capacity needs to be sufficient for high-volume orders. You are not only our suppliers but also our partners. We will succeed together. We are not searching for the lowest prices, but rather win-win partnerships.',
    'Your factory needs no comply with international standards in terms of quality control and safety. You need to be able to produce products that meet international standards that are certified and approved by trusted organizations.',
    'Your business needs to operate with awareness of its impact on the environment and the society. You promise to create the best products from sustainable resources with the aim to protect the environment.'
  ],
  image: [
    image1,
    image2,
    image3,
    image4,
    image5,
  ]
}

const Suppliers = () => {
  return (
    <>
      <SubHero title='Become our suppliers' />
      <Slogan text='Let us bring your products to the global market.' />
      <MiddleLine />
      <ContentLeft
        title={suppliers.title[0]}
        text={suppliers.text[0]}
        image={image1}
      />
      <ContentRight
        title={suppliers.title[1]}
        text={suppliers.text[1]}
        image={image2}
      />
      <ContentLeft
        title={suppliers.title[2]}
        text={suppliers.text[2]}
        image={image3}
      />
      <ContentRight
        title={suppliers.title[3]}
        text={suppliers.text[3]}
        image={image4}
      />
      <ContentLeft
        title={suppliers.title[4]}
        text={suppliers.text[4]}
        image={image5}
      />
      <Space height='3rem'/>
      <SupplierForm />
    </>
  );
}

export default Suppliers;

