const express = require('express');
const router = express.Router();
const { 
  uploadDocument, 
  getDocuments, 
  getDocument, 
  updateDocument, 
  moveToTrash,
  getTrashDocuments,
  restoreDocument,
  permanentlyDeleteDocument,
  downloadDocument
} = require('../controllers/documentController');
const { protect } = require('../middlewares/authMiddleware');
const { upload } = require('../middlewares/uploadMiddleware');

// All routes are protected
router.use(protect);

// Document routes
router.post('/upload', upload.single('file'), uploadDocument);
router.get('/', getDocuments);
router.get('/trash', getTrashDocuments);
router.get('/download/:id', downloadDocument);
router.get('/:id', getDocument);
router.put('/:id', updateDocument);
router.put('/restore/:id', restoreDocument);
router.delete('/:id', moveToTrash);
router.delete('/permanent/:id', permanentlyDeleteDocument);

module.exports = router; 