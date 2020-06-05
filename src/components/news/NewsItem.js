import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useParams } from 'react-router-dom';
import { NewsContext } from '../../contexts/NewsContext';
import SubHero from '../share/SubHero';
import Slogan from '../share/Slogan';
import MiddleLine from '../share/MiddleLine';
import Spinner from '../share/Spinner';
import '../../assets/styles/NewsItem.css';

const NewsItem = () => {

  const { news, loading } = useContext(NewsContext);
  const { id } = useParams();
  const selectNews = news.filter((item) => item.sys.id === id)[0];
  const rawHtml = selectNews.fields.content;
  const formattedContent = documentToReactComponents(rawHtml);

  const relatedPost = news.slice(0, 5).map((item) => (
    <Link to={`/news/${item.sys.id}`}>
      <p className='pt-2 font-weight-bold'>{item.fields.title}</p>
    </Link>)
  )
  return (
    <>
      {loading ? <Spinner /> : (
        <>
          <SubHero title='News' />
          <Slogan text={selectNews.fields.title} />
          <MiddleLine />
          <div className="container">
            <div className="row">
              <img src={selectNews.fields.imageUrl.fields.file.url} className="img-fluid mx-auto" alt="Finnish custom policies" />
            </div>
            <div className="row">
              <div className=' col-sm-12 col-md-10 col-lg-6 m-auto py-3 py-md-5 text-justify'>
                <pre className="blog_pre pb-2">
                  <code>{formattedContent}</code>
                </pre>
              </div>
            </div>
            <div className="row">
              <div className='col-sm-12 col-md-10 col-lg-6 m-auto py-1 py-md-3 text-left"'>
                <h2>Related posts</h2>
                {relatedPost}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default NewsItem;

