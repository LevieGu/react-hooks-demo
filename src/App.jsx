import React, { useState } from 'react'
import { HashRouter, Link, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import route from './routes'

const LinkWarp = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap'
})

const LinkBox = styled.div({
  width: '33.3%'
})

const Button = styled.button({
  width: 120,
  height: 40,
  backgroundColor: '#40a9ff',
  border: 0,
  borderRadius: 3,
  cursor: 'pointer'
})

function App() {

  const [clicked, setClicked] = useState(false)

  const clickChange = () => {
    setClicked(!clicked)
  }

  return (
    <HashRouter>
      {clicked ? (
        <>
          <Button onClick={clickChange} style={{ marginBottom: 36 }}>返回</Button>
          <div>
            <Switch>
              {route.map((v, k) => <Route key={k} component={v.page} path={v.path} />)}
            </Switch>
          </div>
        </>
      ) : (
        <LinkWarp>
          {route.map((v, k) => <LinkBox key={k} onClick={clickChange}><Link to={v.path}>{v.name}</Link></LinkBox>)}
        </LinkWarp>
      )}
    </HashRouter>
  )
}

export default App
