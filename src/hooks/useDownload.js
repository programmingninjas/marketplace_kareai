import { useEffect } from 'react';

const useDownload = (filename) => {
  useEffect(() => {
    const downloadFile = async () => {
      try {
        const response = await fetch(`http://98.70.9.194:8000/api/download_report/${filename}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          },
        });

        if (!response.ok) {
          throw new Error('File download failed');
        }

        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;

        // Optional: Parse the filename from the Content-Disposition header if available
        const contentDisposition = response.headers.get('Content-Disposition');
        let downloadFilename = filename;
        if (contentDisposition) {
          const match = contentDisposition.match(/filename="(.+)"/);
          if (match) {
            downloadFilename = match[1];
          }
        }

        a.download = downloadFilename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Error downloading the file:', error);
      }
    };

    if (filename) {
      downloadFile();
    }
  }, [filename]);
};

export default useDownload;
