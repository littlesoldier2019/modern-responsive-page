import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { NewsContext } from '../../contexts/NewsContext';
import { exportRawText } from '../../helpers/exportRawText';
import SubHero from '../share/SubHero';
import Slogan from '../share/Slogan';
import MiddleLine from '../share/MiddleLine';
import '../../assets/styles/NewsItem.css';

const NewsItem = () => {
  let errorMessage;
  let selectNews;
  let formattedContent;
  let relatedPost;
  const { news, error } = useContext(NewsContext);
  const { id } = useParams();
  if (!news || news.length === 0 || error) {
    return errorMessage = <div>"Please refresh the page"</div>
  } else {
    selectNews = news.filter((item) => item.sys.id === id)[0];
    formattedContent = exportRawText(selectNews);
    relatedPost = news.slice(0, 5).map((item, index) => (
      <Link to={`/news/${item.sys.id}`} key={index}>
        <p className='pt-2 font-weight-bold'>{item.fields.title}</p>
      </Link>)
    )
  }

  return (
    <>
      <SubHero title='News' />
      <Slogan text={selectNews.fields.title} />
      <MiddleLine />
      {(errorMessage) ? { errorMessage } : (
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
      )}
    </>
  );
}

export default NewsItem;

