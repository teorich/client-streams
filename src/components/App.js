import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import { StreamCreate, StreamEdit, StreamDelete, StreamList, StreamShow } from './streams/routes'
import Header from './Header'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="container ui">
          <br/>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;