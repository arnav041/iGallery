import React from 'react'
import useFirestore from '../hooks/useFirestore.jsx'
import '../styles/imageGrid.css';
import { motion } from 'framer-motion'


const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images');

    return (
        <div className="image-grid">
            {docs && docs.map(doc => (
                <motion.div key={doc.id}
                    layout
                    onClick={() => setSelectedImg(doc.url)}  >
                    <motion.img className="gallery-image" src={doc.url} alt="iGallery"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 1}}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;