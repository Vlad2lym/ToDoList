import { useState } from 'react';
import MyInput from './components/UI/myInput/myInput';
import TargetsList from './components/TargetsList';
import './styles/styles.css'

function App() {
  const [targets, setTargets] = useState ([])
  const [input, setInput] = useState ('')

  const changeInput = (val) => {
    setInput (val)
  }

  function addTarget () {
    if (input === '') return;
    setTargets ([...targets, {value: input, status: 'processing'}])
    setInput('')
  }

  const deleteTarget = (i) => {
    setTargets (targets.filter ((t,ind) => ind !== i))
  }

  const targetReady = (targ, i) => {
    targ.status === 'processing' || targ.status === 'unready' ? setTargets ( [...targets], targets[i].status = 'ready' ) : setTargets ( [...targets], targets[i].status = 'processing' )
  }

  const targetUnready = (targ, i) => {
    targ.status === 'processing' || targ.status === 'ready' ? setTargets ( [...targets], targets[i].status = 'unready' ) : setTargets ( [...targets], targets[i].status = 'processing' )
  }

  return (
    <div>
      <h1 className="header">To Do List</h1>
      <MyInput placeholder='Добавьте цели на день' setInput={changeInput} input={input} add={addTarget}/>
      {targets.length < 1
      ? <h1 className='emptyList'>Задачи на сегодняшний день пока не поставлены</h1>
      : <TargetsList targets={targets} delete={deleteTarget} isReady={targetReady} isUnready={targetUnready} />}
    </div>
  );
}

export default App;
