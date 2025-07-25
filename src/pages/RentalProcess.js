import React from 'react';
import '../styles/RentalProcess.css';
import homeImage from '../assets/home.jpg';

const RentalProcess = () => {
  return (
    <div className="policy-container">
      <div className="image-section">
        <img src={homeImage} alt="Privacy Policy" />
      </div>

      <div className="content-section">
        <h1>HOW TO RENT A DRESS?</h1>
        <p>
          1. Open the dress you like on our website.<br />
          ہماری ویب سائٹ پر آپ کوئی پسندیدہ کپڑا کھولیں۔
          <br /><br />
          2.Choose the delivery date, which is when you will receive the dress, and the pickup date will be auto-selected.<br />
          تاریخِ تحویل منتخب کریں ، جسے آپ کو درخواست کرنے کی ضرورت ہے۔ پِک اپ کی تاریخ خودکار منتخب کی جائے گی۔
          <br /><br />
          3. The delivery date is when you will receive the dress, and the pickup date is when the dress needs to be returned to Closet.<br />
          ڈیلیوری کی تاریخ وہ ہے جب آپ کو لباس موصول ہوگا، اور پک اپ کی تاریخ وہ ہے جس کو واپس کرنا ہوگا۔
          <br /><br />
          4. Open the dress you like on our website.<br />
          مناسب فٹ ہونے کو یقینی بنانے کے لیے وہ پیمائشیں شامل کرنا یقینی بنائیں جو آپ پہنتے ہیں، نہ کہ آپ کی اپنی پیمائش۔
          <br /><br />
          5. Once you have verified all the details, click on "Rent it now" or "Add to cart" (if you want to rent more dresses).<br />
          ایک بار جب آپ تمام تفصیلات کی تصدیق کر لیتے ہیں، "ابھی کرایہ پر لیں" یا "کارٹ میں شامل کریں" پر کلک کریں (اگر آپ مزید کپڑے کرائے پر لینا چاہتے ہیں)۔
          <br /><br />
          6. On the checkout page, enter your complete information, and the rental amount and security deposit will be displayed. You have the option to to pay only the full rental amount as advance or both the rental amount and security deposit amount in advance.<br />
          چیک آؤٹ پیج پر، اپنی مکمل معلومات درج کریں، اور کرایہ کی رقم اور سیکیورٹی ڈپازٹ ظاہر ہو جائے گا۔ آپ کو یا تو کرایہ کی رقم ادا کرنے کی ضرورت ہے یا کرایہ اور سیکیورٹی ڈپازٹ کی رقم ادا کی جائے گی۔
          <br /><br />
          7. The security deposit is required before the dress is delivered.<br />
          لباس کی فراہمی سے پہلے سیکیورٹی ڈپازٹ درکار ہے۔
          <br /><br />
          8. Once the dress is returned, the security deposit will be refunded in cash (if given in person at our outlet) or transferred to the renter's account if sent via courier or closet's rider within 7 working days.<br />
          لباس کے واپس ہونے کے بعد، سیکیورٹی ڈپازٹ نقد رقم میں واپس کر دیا جائے گا (اگر ہمارے آؤٹ لیٹ پر ذاتی طور پر دیا گیا ہو) یا کورئیر یا الماری کے سوار کے ذریعے بھیجے جانے پر کرایہ دار کے اکاؤنٹ میں منتقل کر دیا جائے گا۔
          <br /><br />
          9. Currently, Closet does not deliver dresses in Karachi and Lahore. If a dress is required outside these cities, it will be sent via a third-party courier service, and delivery and pickup charges will be paid by the renter.<br/>
          فی الحال، Closet کراچی اور لاہور میں کپڑے نہیں پہنچاتی۔ اگر ان شہروں سے باہر کسی لباس کی ضرورت ہو تو اسے تھرڈ پارٹی کورئیر سروس کے ذریعے بھیجا جائے گا، اور ڈیلیوری اور پک اپ چارجز کرایہ دار ادا کرے گا۔
          <br /><br />
        </p>

      </div>
    </div>
  );
};

export default RentalProcess;
