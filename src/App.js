
import { DndProvider } from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import Header from './common/Header'
import Schedule from './pages/Schedule';
import Data from './pages/Data'
import DND from './common/DND';
function App() {
  return (
    <DndProvider backend={HTML5Backend}>
    <div className="App">
      <DND/>
      <Header/>
      <Schedule/>
      <Data/>
    </div>
    </DndProvider>
  );
}

export default App;
