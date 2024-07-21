import React from 'react';
import './index.css';
import './App.css';


const Modal = ({ open, setOpen, children }) => (
  <div className={`overlay animated ${open ? 'show' : ''}`}>
            <div className='modal'>
              {children}
              <button className='close' onClick={() => setOpen(false)}>Stop</button>
            </div>  
          </div>
)

function App() {

  const [open, setOpen] = React.useState(false);

  return (
    <div className="App">
        <button onClick={() => setOpen(true)} className='open-modal-btn'>Start a party!</button>
        <Modal open={open} setOpen={setOpen}>
          <img src='https://media3.giphy.com/media/dvdcBNbAiNVT9Z0iwP/200w.gif?cid=6c09b9527unk4jvl3ik7cnjvt07wjj08j4peuqsn7jws8v7j&ep=v1_gifs_search&rid=200w.gif&ct=g' alt='dancing dude' />
          <h3>Let's dance!</h3>
        </Modal>              
    </div>
  );
}

export default App;

