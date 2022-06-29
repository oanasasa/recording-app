import React from "react";
import Footer from "../../components/footer-component/footer.component";

const Specs = () => {
  return (
    <div className="page-container">
      <div className="section">
        <div className="row wc1">
          <div className="c1">
            <h1>Contribution Criteria</h1>
            <h2>
              Understand what to say and make your voice recordings richer!
            </h2>
            <div className="criteria-text-container">
              <h3>Misreadings</h3>
              <p>
                When listening, check very carefully that what has been recorded
                is exactly what has been written; reject if there are even minor
                errors. Very common mistakes include:
              </p>
              <ul>
                <li>Missing 'A' or 'The' at the beginning of the recording.</li>
                <li>Missing an 's' at the end of a word.</li>
                <li>
                  Reading contractions that aren't actually there, such as
                  "We're" instead of "We are", or vice versa.
                </li>
                <li>
                  Missing the end of the last word by cutting off the recording
                  too quickly.
                </li>
                <li>Taking several attempts to read a word.</li>
              </ul>
            </div>
            <div className="criteria-text-container">
              <h3>Background Voices</h3>
              <p>
                A quiet background hubbub is OK, but we don’t want additional
                voices that may cause a machine algorithm to identify words that
                are not in the written text. If you can hear distinct words
                apart from those of the text, the clip will be rejected.
                Typically this happens where the TV has been left on, or where
                there is a conversation going on nearby.
              </p>
            </div>
            <div className="criteria-text-container">
              <h3>Just Unsure?</h3>
              <p>
                If you come across something that these guidelines don’t cover,
                please record according to your best judgement. If you really
                can’t decide, use the skip button and go on to the next text.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Specs;
