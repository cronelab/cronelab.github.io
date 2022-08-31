import React from 'react';
import {
  Container,

  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.css';

function JobOpenings() {
  return (
    <Container>
      <ListGroup>
        <p><b>May, 2022 </b></p>
        <p><b>Post-doc</b></p>
        <ListGroupItem>
          The Crone Lab has an open position for post-doctoral research fellow
          in human functional brain mapping using intracranial EEG. The post-doc
          will be hired in the Department of Neurology in The Johns Hopkins
          University School of Medicine and will be supervised by Dr. Nathan
          Crone. The post-doctoral fellow will join an ongoing NIH-funded
          project studying the validity and safety of different methods of
          functional brain mapping in epilepsy surgery patients, using
          electrocorticography (ECoG), electrocortical stimulation mapping
          (ESM), cortico-cortical evoked potentials (CCEPs), and functional
          neuroimaging. The candidate will be responsible for testing human
          subjects in close collaboration with their clinical caregiving team,
          including physicians, nurses, neuropsychologists, and collaborating
          researchers. Testing will include electrophysiological recording and
          stimulation during behavioral testing in both adult and pediatric
          patients undergoing long-term video-EEG monitoring with intracranial
          electrodes and, on occasion, in adults undergoing neurosurgical
          procedures. The candidate will help supervise graduate students,
          undergraduates, and research assistants in this research. The ideal
          applicant must have a Ph.D. in neuroscience, biomedical engineering,
          or a related field, and should have training and experience in
          programming, human electrophysiology, statistics, machine learning,
          and scientific writing, including a track-record of peer-reviewed
          publication. Proficiency in oral and written English is mandatory.
          Interested individuals should send an email to
          {' '}
          <a href="mailto: ncrone@jhmi.edu">ncrone@jhmi.edu</a>
          ,
          including a cover letter describing research experience and
          qualifications, academic CV, and contact information for references.
        </ListGroupItem>
      </ListGroup>
      <ListGroup>
        <p><b>September, 2022 </b></p>
        <p><b>Software Engineer</b></p>
        <ListGroupItem>

          The CRONELAB is looking for a Software Engineer with a passion for neuroscience related fields to work in a fast-paced scientific environment to develop, maintain and improve software infrastructure that supports real-time neural signal acquisition and processing for human brain mapping, cognitive neuroscience, and brain-computer interface experiments. You will leverage your software engineering skills to solve real-world problems that have a direct impact on scientific advances, and help shape various architecture components, their requirements and the general design of our lab infrastructure.
          Interested individuals should send an email to
          {' '}
          <a href="mailto: ncrone@jhmi.edu">ncrone@jhmi.edu</a>
          ,
          including a cover letter describing research experience and
          qualifications, academic CV, and contact information for references.
          Additionally, please see the official job posting
          {' '}
          <a href="https://jobs.jhu.edu/job/Baltimore-Software-Engineer-MD-21287/923537100/">here</a>
          .
        </ListGroupItem>
      </ListGroup>

    </Container>
  );
}

export default JobOpenings;
