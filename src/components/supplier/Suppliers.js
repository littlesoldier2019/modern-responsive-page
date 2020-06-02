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
    'Legalized manufacturer',
    'Experience in the field',
    'Sufficient capacity',
    'International standard',
    'Sustainable production'
  ],
  text: [
    'You are legally registered for producing the sold item in Vietnam planning and investing ministry. Please provide liciense number. We want our clients rest in peace and all custom procedure happen smoothly for all parties',
    'Your experience in producing the sold items. You know everything about the products to consult your clients for best choice. You can deliver the producs as its best',
    'Your monthly capacity are guaranteed for high volumn order. You are not only our suppliers but also our partners. We are success together. We are not searching for lowest price, but rather be partner with suppliers for win-win partnership',
    'Your factory followes international standard in terms of quality control and safety. You produce products with internation standard which has been certified and approved by trustworthy organizations',
    'Your business operates with awareness on impact toward environment and society. You promise to bring best products out of sustainable resources with the aim to protect the environment'
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
      <Slogan text='Let us bring your products to the world' />
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
      <Space height='5rem'/>
    </>
  );
}

export default Suppliers;

