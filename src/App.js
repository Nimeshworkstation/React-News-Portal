import Navbar from './components/Navbar'
import NewsComponent  from './components/NewsComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import React,{useState} from 'react'

export default function App() {
  const [progress, setprogress] = useState(0)
  
  
  const apikey = process.env.REACT_APP_NEWS_API
  const pagesize = 15
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <LoadingBar
        height= '3px'
        color='#f11946'
        progress={progress}
      />
      <Routes>
      <Route exact path = "/" element={<NewsComponent apikey={apikey} setProgress={setprogress} key={'general'} Pagesize={pagesize} country={'us'} category={'general'}/>}/>
      <Route exact path = "/home" element={<NewsComponent apikey={apikey} setProgress={setprogress} key={'general'} Pagesize={pagesize} country={'us'} category={'general'}/>}/>
      <Route exact path = "/business" element={<NewsComponent apikey={apikey} setProgress={setprogress} key={'business'} Pagesize={pagesize} country={'us'} category={'business'}/>}/>
      <Route exact path = "/entertainment" element={<NewsComponent apikey={apikey} setProgress={setprogress} key={'entertainment'}Pagesize={pagesize} country={'us'} category={'entertainment'}/>}/>
      <Route exact path = "/health" element={<NewsComponent apikey={apikey} setProgress={setprogress} key={'health'}Pagesize={pagesize} country={'us'} category={'health'}/>}/>
      <Route exact path = "/science" element={<NewsComponent apikey={apikey} setProgress={setprogress} key={'science'} Pagesize={pagesize} country={'us'} category={'science'}/>}/>
      <Route exact path = "/sports" element={<NewsComponent apikey={apikey} setProgress={setprogress} key={'sports'}Pagesize={pagesize} country={'us'} category={'sports'}/>}/>
      <Route exact path = "/technology" element={<NewsComponent apikey={apikey} setProgress={setprogress} key={'technology'} Pagesize={pagesize} country={'us'} category={'technology'}/>}/>  

      </Routes>
      </BrowserRouter>
      </>
  )
}

