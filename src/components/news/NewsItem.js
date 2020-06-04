import React, { useContext } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useParams } from 'react-router-dom';
import SubHero from '../share/SubHero';
import Slogan from '../share/Slogan';
import MiddleLine from '../share/MiddleLine';
import { NewsContext } from '../../contexts/NewsContext';
import '../../assets/styles/NewsItem.css';

const NewsItem = () => {

  const { news, loading } = useContext(NewsContext);
  const { id } = useParams();
  const selectNews = news.filter((item) => item.sys.id === id)[0];
  const rawHtml = selectNews.fields.content;
  const formattedContent = documentToReactComponents(rawHtml);
  return (
    <>
      <SubHero title='News' />
      <Slogan text={selectNews.fields.title} />
      <MiddleLine />
      <div className="container">
        <div className="row">
          <img src={selectNews.fields.imageUrl.fields.file.url} className="img-fluid mx-auto" alt="Finnish custom policies" />
        </div>
        <div className="row">
          <pre className="blog_pre col-sm-12 col-md-10 col-lg-6 m-auto py-3 py-md-5 text-justify">
            <code>{formattedContent}</code>
          </pre>
        </div>
      </div>
    </>
  );
}

export default NewsItem;

