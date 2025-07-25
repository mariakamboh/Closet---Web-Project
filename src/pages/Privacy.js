import React from 'react';
import '../styles/Privacy.css';
import homeImage from '../assets/home.jpg';

const Policy = () => {
  return (
    <div className="policy-container">
      <div className="image-section">
        <img src={homeImage} alt="Privacy Policy" />
      </div>

      <div className="content-section">
        <h1>Privacy Policy</h1>
        <p>
        Closet takes the privacy of its customers/renters very seriously and will take all measures to protect your personal information.
        </p>
        <p>
        Whether you register with us or use the site anonymously, the information we collect centers around your name, address, contact number(s), email ID, payment preferences, credit/debit card numbers, bank account details, etc. This information will only be used, at the minimum, for the following purposes: To fill, process and ship your orders Contacting you for customer service and support Informing you of promotional offers Your browsing experience of the Closet website, No information will be revealed to any third-party entities for any purposes and your information will solely be used by Closet.
        </p>
        <p>
        Please note that we use cookies to keep track of the frequency of your visits to our website, the contents of your shopping cart, purchase history and to deliver specific content designed to give you a uniquely personalized shopping experience. Most browsers generally accept cookies automatically, and you may change this setting if you wish to. You will still be able to access most of our website’s functionality, including the ability to make purchases. Registered users (who are using cookie-enabled web browsers) will be automatically signed in when they visit our website. Please note that users will be prompted to sign in again after 14 days, when the cookie expires.
        </p>
        <p>
        Data retention: We retain renter's information, including their name, contact information, and rental history, along with their rating for future orders. This information is necessary to ensure the safety and security of our rental platform and to provide accurate information to renters and owners. Additionally, a renter's security deposit may be dependent on their past rental history. We will retain this information only for as long as necessary to fulfill the purposes outlined in this policy or as required by law.
        </p>
        <p>
        Legal obligations: We will not share any renter's personal information with third parties without their consent, except in the following circumstances: (1) when required by law or court order; (2) to comply with applicable regulations, governmental or quasigovernmental requests, court orders, or subpoenas; (3) to enforce our terms of use or other agreements; or (4) to protect the safety and security of our website, our users, or the public. In such cases, we will take appropriate measures to protect the privacy of our users' personal information.
        </p>
        <p>
        Cookies and Online Tracking: We use cookies to improve the functionality of our website and to provide a personalized experience to our users. Please note that third-party companies, such as Google and Facebook, Snapchat, Tiktok etc. may use cookies and other tracking technologies to collect information about your browsing activity across different websites, including ours. This information may be used to deliver targeted advertising to you on other websites or to analyze your behavior on our website. We do not control the use of these technologies by third parties, and their use is subject to the privacy policies of these companies. If you are accessing our website through social media platforms, please note that these platforms may also use cookies and other tracking technologies to collect information about your browsing activity. This information may be used to show you targeted ads or to personalize your experience on these platforms. Please refer to the privacy policies of these social media platforms to learn more about their data collection practices.
        </p>
        <p>
        Please note that you can opt-out of the use of cookies by adjusting your browser settings. However, please note that disabling cookies may affect the functionality of our website and your ability to use certain features.
        </p>
        <p>
        By browsing our website, you agree to abide by all our policies, which may be subject to change any time.
        </p>
      </div>
    </div>
  );
};

export default Policy;
