// import { useState } from 'react'
import "./styles/globals.css"
import { Button } from './components/Button/Button'
import { Tag } from "./components/Tag/Tag"
import { Input } from "./components/Input/Input"

export const App = () => {

  return (
    // grid for the layout with 3 columns, content is always in the 2nd.
    // since this is mobile first, 1 column for the layout in mobile
    //full responsive. ALWAYS
    <div className="app-layout md:grid-cols-[1fr_minmax(300px,800px)_1fr]">

      {/*The content starts in the 2nd column(only big screens): */}
      <div className='center-column
            gap-2 
            md:col-start-2 
            border border-black'>

        <div className='gap-2 flex'>
          <Button onClick={() => console.log("test")} variant='primary'>
            Primary
          </Button>
          <Button onClick={() => console.log("test")} variant='secondary'>
            Secondary
          </Button>
        </div>
      
        <div className='gap-2 flex'>
          <Button variant='primary' disabled>
            Disabled
          </Button>
          <Button onClick={() => console.log("test")} variant='danger'>
            Danger
          </Button>
        </div>

        <div className='gap-2 flex'>
          <Button onClick={() => console.log("test")} variant='ghost' size="lg">
            Ghost
          </Button>
        </div>
        <div>
          <Button onClick={() => console.log("test")} variant='ghost' size="sm">
            Ghost
          </Button>          
        </div>

        <div >
          <Tag size="sm" variant="primary" children="#Primary"/>
          <Tag size="sm" variant="secondary"  children="#Secondary"/>
          <Tag size="sm" variant="danger"  children="#Danger"/>
          <Tag size="sm" variant="ghost"  children="#Ghost"/>
        </div>
        <div >
          <Tag size="md" variant="primary" children="#Primary"/>
          <Tag size="md" variant="secondary"  children="#Secondary"/>
          <Tag size="md" variant="danger"  children="#Danger"/>
          <Tag size="md" variant="ghost"  children="#Ghost"/>
        </div>
        <div >
          <Tag size="lg" variant="primary" children="#Primary"/>
          <Tag size="lg" variant="secondary"  children="#Secondary"/>
          <Tag size="lg" variant="danger"  children="#Danger"/>
          <Tag size="lg" variant="ghost"  children="#Ghost"/>
        </div>

        <div>
          <Input />
        </div>
      </div>

    </div>      
  )
}

export default App