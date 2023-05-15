import React from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import flyer from "../outreach/corticom-intelligibility-test.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const SpeechTestFlyer = () => {
  return (
    <div>
      <Document file={flyer}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default SpeechTestFlyer;
