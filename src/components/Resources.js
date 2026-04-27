import React, { useState } from 'react';
import './Resources.css';

const Resources = () => {
  const [resourceCategory, setResourceCategory] = useState(null);

  const categories = [
    {
      name: "Mental Health",
      links: [
        { title: "NHS - Mental Health information and support", url: "https://www.nhs.uk/mental-health/" },
        { title: "Man Down - Supporting Men's Mental Health in the UK", url: "https://mandown.org/" },
        { title: "PTSD UK - Blog - Can PTSD be mistaken for ADHD", url: "https://www.ptsduk.org/can-ptsd-be-mistaken-for-adhd/"},
        { title: "NHS - PTSD (post-traumatic stress disorder)", url: "https://www.nhs.uk/mental-health/conditions/ptsd-post-traumatic-stress-disorder/"},
      ]
    },
    {
      name: "Cancer Awareness",
      links: [
        { title: "NHS Screening", url: "https://www.nhs.uk/tests-and-treatments/nhs-screening/" },
        { title: "gov.uk screening for trans and non-binary people", url: "https://www.gov.uk/government/publications/nhs-population-screening-information-for-transgender-people/nhs-population-screening-information-for-trans-people" },
        { title: "Prostate Cancer UK - Prostate Cancer Screening", url: "https://prostatecanceruk.org/prostate-information-and-support/prostate-tests/prostate-cancer-screening"},
        { title: "NHS - PSA test", url: "https://www.nhs.uk/tests-and-treatments/psa-test/"},
        { title: "NHS - Lung Cancer", url: "https://www.nhs.uk/conditions/lung-cancer/"},
        { title: "NHS - Lung cancer screening", url: "https://www.nhs.uk/tests-and-treatments/lung-cancer-screening/"},
        { title: "NHS - Melanoma skin cancer", url: "https://www.nhs.uk/conditions/melanoma-skin-cancer/symptoms/"},
        { title: "NHS - How to check your testicles", url: "https://www.nhs.uk/tests-and-treatments/how-to-check-your-testicles/"},
        { title: "NHS - Bowel cancer screening", url: "https://www.nhs.uk/tests-and-treatments/bowel-cancer-screening/"},
        { title: "NHS - Who breast screening is for", url: "https://www.nhs.uk/tests-and-treatments/breast-screening-mammogram/who-breast-screening-is-for/"},
        { title: "NHS - When you'll be invited for cervical screening", url: "https://www.nhs.uk/tests-and-treatments/cervical-screening/when-youll-be-invited/"},
        { title: "", url: ""},
      ]
    },
    {
      name: "Cardiovascular Health",
      links: [
        { title: "NHS - Heart attach", url: "https://www.nhs.uk/conditions/heart-attack/" },
        { title: "NHS - Symptoms of a stroke", url: "https://www.nhs.uk/conditions/stroke/symptoms/" },
        { title: "", url: ""},
        { title: "", url: ""},
        { title: "", url: ""},
      ]
    },
    {
      name: "Lifestyle & Sexual Health",
      links: [
        { title: "NHS - Quit Smoking", url: "https://www.nhs.uk/better-health/quit-smoking/" },
        { title: "NHS - Chlamydia", url: "https://www.nhs.uk/conditions/chlamydia/" },
        { title: "", url: ""},
        { title: "", url: ""},
        { title: "", url: ""},
      ]
    },
    {
      name: "General Maintenance",
      links: [
        { title: "NHS - Earwax build-up", url: "https://www.nhs.uk/conditions/earwax-build-up/" },
        { title: "NHS Health Check", url: "https://www.nhs.uk/tests-and-treatments/nhs-health-check/" },
        { title: "NHS - How to check your testicles", url: "https://www.nhs.uk/tests-and-treatments/how-to-check-your-testicles/"},
        { title: "", url: ""},
        { title: "", url: ""},
      ]
    }
  ];

/* using ternary if no cat selected show cat buttons, else show buttons for selected cat */
 return (
  <div className="resources-container">

    {resourceCategory === null ? (
      <div>
        {categories.map((cat, index) => (
          <div key={index} className="resources-boxes">
            <button
              className="resources-boxes"
              onClick={() => setResourceCategory(cat)}>
              {cat.name}
            </button>
          </div>
        ))}
      </div>
    ) : (
      <div className="resources-boxes">
        <h2>{resourceCategory.name}</h2>

        {resourceCategory.links.map((link, index) => (
          <button
            key={index}
            onClick={() => window.open(link.url, "_blank")}
            className="resource-boxes">
            {link.title}
          </button>
        ))}
         <br></br>
        <button onClick={() => setResourceCategory(null)}>
          Back
        </button>
      </div>
    )}

  </div>
);

};

export default Resources