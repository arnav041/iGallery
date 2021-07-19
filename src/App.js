import { useState } from 'react'
import ImageGrid from './component/imageGrid.jsx';
import Modal from './component/modal.jsx';
import UploadForm from './component/uploadForm.jsx';

function App() {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className="app" >
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;
