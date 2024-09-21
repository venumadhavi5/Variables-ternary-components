import logo from './logo.svg';
import './App.css';
import MarkSheet from './components/MarkSheet';

function App() {
  return (
    <div className="App">
      <MarkSheet StudentName="Tulasi" telMarks="95" hinMarks='80'
      engMarks='90' mathMarks='86' scieMarks='89' socMarks='35'></MarkSheet>
      
      <MarkSheet StudentName="Kumari" telMarks="90" hinMarks='85'
      engMarks='79' mathMarks='75' scieMarks='27' socMarks='73'></MarkSheet>
      
      <MarkSheet StudentName="Fathima" telMarks="85" hinMarks='70'
      engMarks='32' mathMarks='75' scieMarks='89' socMarks='75'></MarkSheet>
      
      <MarkSheet StudentName="Priyanka" telMarks="70" hinMarks='68'
      engMarks='73' mathMarks='30' scieMarks='71' socMarks='65'></MarkSheet>
      
    </div>
  );
}

export default App;
