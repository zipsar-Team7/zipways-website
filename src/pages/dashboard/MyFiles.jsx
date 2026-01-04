import { useState } from 'react';
import FileUploader from '../../components/dashboard/FileUploader';
import FileManager from '../../components/dashboard/FileManager';

const MyFiles = () => {
  // Mock files
  const [files, setFiles] = useState([
    { id: 1, name: 'passport_scan.pdf', type: 'application/pdf', size: '2.4 MB', date: '2 days ago' },
    { id: 2, name: 'transcript_final.jpg', type: 'image/jpeg', size: '1.1 MB', date: '1 week ago' }
  ]);

  const handleUpload = (newFiles) => {
    // In a real app, this would upload to server
    // Here we just add to state with mock data
    const newFileEntries = newFiles.map((file, index) => ({
      id: Date.now() + index,
      name: file.name,
      type: file.type,
      size: `${(file.size / 1024 / 1024).toFixed(2)} MB`,
      date: 'Just now'
    }));
    
    setFiles([...files, ...newFileEntries]);
    alert(`${newFiles.length} file(s) uploaded successfully!`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this file?')) {
      setFiles(files.filter(f => f.id !== id));
    }
  };

  return (
    <div className="my-files-page fade-in">
      <div className="page-header mb-6">
        <h1>My Documents</h1>
        <p className="text-gray-600">Upload and manage your application documents securely.</p>
      </div>

      <div className="grid-layout" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        <div className="upload-section">
          <h2 className="text-lg mb-4 font-semibold">Upload New</h2>
          <FileUploader onUpload={handleUpload} />
          
          <div className="upload-guidelines mt-6 bg-blue-50 p-4 rounded-lg" style={{ backgroundColor: '#EFF6FF', padding: '1rem', borderRadius: '0.5rem' }}>
            <h3 className="text-sm font-bold text-blue-800 mb-2">Document Guidelines</h3>
            <ul className="text-sm text-blue-700 space-y-1 list-disc pl-4" style={{ fontSize: '0.875rem', lineHeight: '1.5', paddingLeft: '1rem' }}>
              <li>Ensure scans are clear and readable</li>
              <li>Max file size: 5MB per file</li>
              <li>Supported formats: PDF, JPG, PNG</li>
              <li>Name files clearly (e.g., "Resume_JohnDoe")</li>
            </ul>
          </div>
        </div>

        <div className="files-section">
          <FileManager files={files} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default MyFiles;
