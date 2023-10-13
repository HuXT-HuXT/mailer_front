import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from '../../utils/Api';
import Card from '../Card/Card';
import BackBar from '../BackBar/BackBar';
import Loading from '../Loading/Loading';
import './LayoutPage.css';

const LayoutPage = ({ updateLetter }) => {
  const { letterUuid } = useParams();
  const [ letter, setLetter ] = React.useState({});
  const [ loading, setLoading ] = useState(true);

  const navigate = useNavigate();

  React.useEffect(() => {
    setLetter({});
    api.getStatus(letterUuid)
      .then((data) => {
        setLetter(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        navigate('/notfound');
        console.log(err);
      })

    return () => {

    }
  }, []);


  return (
    <section className='layout'>
      {loading ? <Loading /> :
        (letter &&
          <>
            <div className='layout__card'>
              <Card letter={letter} disablePreview={true} updateLetter={updateLetter} />
            </div>
            <BackBar />
            <div className='layout__letter-container'>
              <div dangerouslySetInnerHTML={{__html: `${letter.body}`}} className='layout__letter'></div>
            </div>
          </>
        )
      }
    </section>
  )
}

export default LayoutPage;