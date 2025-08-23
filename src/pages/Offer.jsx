import { Calendar } from "lucide-react";

function Offer() {
  return (
    <>
    <div className="max-w-5xl mx-auto px-4">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-10">Offer/Discount</h1>

      {/* Cashback Section */}
      <div className="flex flex-col items-center space-y-6">
        {/* Cashback Image */}
        <img
          src="cashback.jpg"
          alt="Cashback Offer"
          className="w-48 h-48 object-contain"
        />

        {/* Offer Card */}
        <div className="w-full bg-white shadow-xl rounded-2xl p-6">
          {/* Date */}
          <div className="flex items-center text-gray-500 text-sm mb-4">
            <Calendar className="w-4 h-4 mr-2" />
            <span>2022-10-28</span>
          </div>

          {/* Offer Title */}
          <h2 className="text-xl font-semibold mb-3">
            Get 90% cashback till further orders by joining new member
          </h2>
          <h3 className="text-lg font-medium mb-3 text-gray-700">
            (न्यू मेंबर ज्वाइन करने में अगले आदेश तक 90% का कैशबैक प्राप्त
            करें।)
          </h3>

          {/* Offer Description */}
          <p className="text-gray-700 leading-relaxed">
            मैं संस्थापक डॉ पवन पायरा आज महान पर्व छठ के शुभ अवसर पर यह ऑफर आप
            सभी को दे रहा हूं कि जो भी व्यक्ति इस में नया मेंबर ज्वाइन करेगा उसे
            90% तक कैशबैक प्राप्त होगा। यदि ऑर्डर 30 प्रतिशत या उससे अधिक का है,
            तो स्पेशल कैशबैक मिलेगा।
            <br />
            <br />I (am founder Dr. Pawan Payara, today on the auspicious
            occasion of Mahaparv Chhath, I am giving this offer to all of you
            that anyone who joins as a new member will get up to 90% cashback.
            Orders above 30% will receive a special cashback benefit).
          </p>
        </div>
      </div>
    </div>
    <div className="bg-gray-800 mb-2 mt-2 text-center py-10 text-white">
        <h2 className="text-2xl font-bold">
          Assess your business potentials and find opportunities{" "}
          <span className="text-orange-400">for bigger success</span>
        </h2>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-white text-gray-800 px-6 py-2 rounded-lg shadow hover:bg-gray-200">
            Let's talk
          </button>
          <button className="bg-orange-400 text-white px-6 py-2 rounded-lg shadow hover:bg-orange-500">
            Get info
          </button>
        </div>
      </div>
      </>
  );
}

export default Offer;
