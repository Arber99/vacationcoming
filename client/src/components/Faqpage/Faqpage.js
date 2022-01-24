import React, {useState} from 'react';
import './Faqpage.css';
import Faqsingle from './Faqsingle/Faqsingle';

const Faq = () => {

    const [faqs, setFaqs] = useState([
        {
            question: "What can this website do?",
            answer: "This website will recommend countries you can visit based on the input parameters you've chosen",
            open: false
        },
        {
            question: "What is the GPI (Global Peace Index)?",
            answer: "The Global Peace Index provides useful information on how save a country is. A higher GPI indicates means that a country is unsafe.",
            open: false
        },
        {
            question: "What is the CLI (Cost of Living Index)",
            answer: "The Cost of Living Index provides useful information on how expensive a country is. A high CLI means that a country is expensive.",
            open: false
        },
        {
            question: "Is your data accurate?",
            answer: "It depends how you want to see it. If a country has a higher GPI than another country, then it does not mean you have to feel more unsafe in that country. This is because the GPI is applied to a whole country while the safety of a country is not equally distributed for each region. For example, travelling to a more crowded touristic city during daytime would be safer than travelling to the same country but during nighttime in less crowded areas.",
            open: false
        },
        {
            question: "Where did you get your data from?",
            answer: "The GPI data is from https://www.visionofhumanity.org/. The CLI data is from https://www.numbeo.com/cost-of-living/rankings.jsp. All other data (e.g. beaches, aurora, hiking trails, etc.) has been manually researched for every country individually.",
            open: false
        },
        {
            question: "Is your website profitable?",
            answer: "This website is a personal project and it is not intended to generate revenue from the base functionality. However, I'm still unsure whether I'll include a donation option since the website has monthly costs for me (and I'm not wealthy at all!). But it won't, probably.",
            open: false
        },
        {
            question: "Do you collect cookies?",
            answer: "Nope! The banner is there for legal reasons. Confirming it will just make the banner disappear.",
            open: false
        }
    ])

    const toggleFAQ = index => {
        setFaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open;
            } else {
                faq.open = false;
            }

            return faq;
        }))
    }

  return (
  <div className='faqs'>
      <h1 className='title-white' data-testid='faq'>FAQ</h1>
      {faqs.map((faq, i) => (
          <Faqsingle faq={faq} index={i} toggleFAQ={toggleFAQ} />
      ))}
  </div>
  );
};

export default Faq;
