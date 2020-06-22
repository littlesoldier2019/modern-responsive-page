import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NewsContext } from '../../contexts/NewsContext';
import Spinner from '../share/Spinner';

const News = () => {
    const { news, loading } = useContext(NewsContext);
    const Card = ({data, id}) => {
        return (
            <div className="col-sm-12 col-md-6 col-lg-4 text-justify mb-3 mb-md-5">
                <Link to={`/news/${id}`}>
                    <img src={data.fields.imageUrl.fields.file.url} className="img-fluid" alt="Finnish custom policies" />
                    <p className='text-uppercase my-2 my-md-4 font-weight-bold'>{data.fields.title}</p>
                    <p>{data.fields.summary}</p>
                </Link>
            </div>
        )
    }
    const content = news.map(item => <Card data={item} id={item.sys.id} key={item.sys.id}/>)

    return (
        <>
            { loading ? <Spinner /> : (
                <div className="container">
                    <div className="row">
                        {content}
                    </div>
                </div>
            )}
        </>
    );
}

export default News;

