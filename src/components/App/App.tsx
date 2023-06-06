import { Actions } from '../Actions/Actions'
import { Info } from '../Info/Info'
import { Keyboard } from '../Keyboard/Keyboard'
import '../../main.css'

export function App() {

  return (
    <>
    <div className="container">
      <Info></Info>
      <main className="phone">
        <Keyboard></Keyboard>
        <Actions></Actions>
      </main>
    </div>  
    </>
  )
}

export default App
