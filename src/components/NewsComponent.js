import React, {useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItemComponent from './NewsItemComponent';
import Spinner from './Spinner';

export default function NewsComponent(props) {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)

  let capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  let updatenews = async ()=> {
    props.setProgress(20)
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.Pagesize}`;
      setloading(true)
      let response = await axios.get(url);
      props.setProgress(70)
        setarticles(response.data.articles)
        settotalResults(response.data.totalResults)
        setloading(false)
      props.setProgress(100)
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  let loadFunc = async () => {
    // Increment the page before making the API request
    
    setpage(page+1)
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.Pagesize}`;
      let response = await axios.get(url);
      
      setarticles(articles.concat(response.data.articles))
      settotalResults(response.data.totalResults)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    updatenews()
    document.title = `${capitalizeFirstLetter(props.category)}- NewsMonkey`;
  }, [])
  
  return (
    <>
      <div className='mt-5'>
        <h1 className='text-center mt-5'>{`NewsMonkey - Top ${capitalizeFirstLetter(props.category)} Headlines`}</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={loadFunc}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }>
          <div className='container'>
            <div className='row'>
              {articles.map((element, id) => {
                return (
                  <div className='col-sm-4 my-3' key={id}>
                    <NewsItemComponent
                      title={element.title ? element.title.substring(0, 45) : ''}
                      description={element.description ? element.description.substring(0, 88) : ''}
                      imageUrl={element.urlToImage ? element.urlToImage : 'https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1106%2Fr1086886_1296x729_16%2D9.jpg'}
                      newsUrl={element.url}
                      author={element.author}
                      pubdate={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
        </div>
      </>
  )
}
