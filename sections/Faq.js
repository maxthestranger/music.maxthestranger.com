import Accordation from '../components/Accordation';

export default function Faq() {
  const faqData = [
    {
      quiz: 'Are the beats still tagged when I purchase a license?',
      answer: 'No, all licenses come with untagged files.',
    },
    {
      quiz: 'Will I own the beat once I purchase it from your store?',
      answer:
        'No. All purchases made from the Beat Store are non-exclusive. This means that the producer still owns the rights and we will still be able to license it to other artists. Unless you buy the exclusive licence',
    },
    {
      quiz: 'Which payment methods do you accept?',
      answer:
        'I accept PayPal and Creditcard payments only. But, offsite I accept any, mpesa, ideal, alipay etc',
    },
    {
      quiz: 'Can I download the files directly after I make the payment?',
      answer: `Yes. After you’ve made the payment you will be redirected to a secure download area where you can instantly download the files.

      A confirmation email, which includes the download links, will be sent as well.`,
    },
    {
      quiz: `I'm looking for a beat but I can't find it in your Beat Store?`,
      answer: `There’s a search bar top left of the beat store.

      1. Click on “Search”
      
      2. Type in the name of the beat and wait till it shows up.
      
      If the beat still doesn’t show up, it might be sold exclusively. In that case it’s no longer available.`,
    },
  ];

  return (
    <section className="faq">
      <div className="faq-con">
        <div className="max-width-con">
          <h1 className="title">Frequently Asked Questions</h1>
          <div className="faq-quiz">
            {faqData.map((faq, index) => (
              <Accordation key={index} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
