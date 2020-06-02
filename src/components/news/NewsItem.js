import React from 'react';
import SubHero from '../share/SubHero';
import Slogan from '../share/Slogan';
import MiddleLine from '../share/MiddleLine';
import image from '../../assets/image/cover1.jpg';

const content = {
  title: [
'Free Trade Agreement with Vietnam opens doors for growing markets'
  ],
  text: [
"The EU–Vietnam Free Trade Agreement (FTA) was signed in Hanoi on 30 June 2019. The agreement is expected to enter into force in early 2020. It is the most ambitious and comprehensive agreement ever concluded by the EU with a developing country. The FTA opens up new market access and business opportunities also for Finnish companies. It is estimated that the agreement will increase trade between the EU and Vietnam by as much as 50 per cent. At the same time, it will bolster Vietnam’s importance as a hub of trading between Southeast Asia and Europe. The FTA will remove nearly all tariffs on trade between the EU and Vietnam either immediately after the agreement's entry into force or within ten years at the latest. Many Finnish export products currently carry high tariffs of even up to 25 per cent."
],
  image: [

  ]
}

const NewsItem = () => {
  return (
    <>
      <SubHero title='News' />
      <Slogan text={content.title[0]} />
      <MiddleLine />
      <div className="container">
        <div className="row">
          <img src={image} className="img-fluid mx-auto" alt="Finnish custom policies" />
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-10 col-lg-6 m-auto py-3 py-md-5 text-justify">
            <p>{content.text[0]}</p>
            <br/><br/>
            <p>{content.text[0]}</p>
            <br/><br/>
            <p>{content.text[0]}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsItem;

