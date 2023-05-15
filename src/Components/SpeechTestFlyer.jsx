/* eslint-disable jsx-a11y/iframe-has-title */
// import React from 'react';
// // import { Document, Page, pdfjs } from 'react-pdf';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
// import flyer from '../outreach/corticom-intelligibility-test.pdf';
// import 'react-pdf/dist/esm/Page/TextLayer.css';

// // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// function SpeechTestFlyer() {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'center' }}>
//       <Document file={flyer}>
//         <Page pageNumber={1} width={1080} />
//       </Document>
//     </div>
//   );
// }

// export default SpeechTestFlyer;

import React from 'react';
import flyer from '../outreach/corticom-intelligibility-test.pdf';

function SpeechTestFlyer() {
  //   const pdfURL = '../outreach/corticom-intelligibility-test.pdf'; // Replace with your PDF path

  return (
    <div>
      <iframe src={flyer} width="100%" height="800px">
        <p>Your browser does not support iframes.</p>
      </iframe>
    </div>
  );
}

export default SpeechTestFlyer;
