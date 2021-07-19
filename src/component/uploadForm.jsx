import React, { useState } from 'react'
import ProgressBar from './progressBar.jsx'
import Logo from '../logo.png'
import '../styles/uploadForm.css'


function UploadForm() {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const types = ['image/jpeg', 'image/png']
    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (jpg or png)')
        }
    }


    return (
        <form>

            <div className="header">
                <img src={Logo} alt="iGallery logo" className="logo" />
                <label title="Add Memories" >
                    <input id="select-file" type="file" onChange={changeHandler} style={{ display: 'none' }} />
                    <span>+</span>
                </label>
            </div>


            <div className="output">
                {error && <div className='error' >{error}</div>}
                {/* {file && <div>{file.name}</div>} */}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default UploadForm;
