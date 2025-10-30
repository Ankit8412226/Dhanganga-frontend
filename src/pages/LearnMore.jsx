import React from "react";
import DiscoverCard from "../components/DiscoverCard";

const DiscoverPublicKendra = () => {
  const services = [
    {
      title: "PAN CARD",
      price: "130",
      duration: "2 days",
      durationType: "Maximum",
      requirements: ["1. Photo 2. Aadhar Card"],
    },
    {
      title: "NEW G. S. T.",
      price: "725",
      duration: "12 days",
      durationType: "Maximum",
      requirements: [
        "1. Photo 2. Aadhar Card 3. Bank Passbook 4. Proof of place of doing Business.",
      ],
    },
    {
      title: "G. S. T. FILING",
      price: "350",
      duration: "3 days",
      durationType: "Maximum",
      requirements: ["1. All related bills 2. I.D. & Password"],
    },
    {
      title: "MARRIAGE CERTIFICATE",
      titleHindi: "शादी का प्रमाण-पत्र",
      price: "2700",
      duration: "3 days",
      durationType: "Maximum",
      requirements: ["1. Age Proof 2. Address Proof 3. Joint Passport Photo"],
    },
    {
      title: "ELECTRICITY BILL",
      titleHindi: "बिजली का बिल",
      price: "1",
      duration: "1 days",
      durationType: "Maximum",
      requirements: [
        "1. Customer I.D. & The amount of Electricity Consumed (शाही की गई बिजली बिल का स्कैन)",
      ],
    },
    {
      title: "BIRTH CERTIFICATE",
      titleHindi: "जन्म प्रमाण-पत्र",
      price: "550",
      duration: "7 days",
      durationType: "Minimum",
      requirements: [
        "1. Parents (माता के माता-पिता का आधार कार्ड) 2. Proof of Birth (जन्म का प्रमाण)",
      ],
    },
    {
      title: "GOV. RENT RECEIPT",
      titleHindi: "लगान रसीद",
      price: "20",
      duration: "1 days",
      durationType: "Maximum",
      requirements: ["1. Age Proof 2. Address Proof 3. Joint Passport Photo"],
    },
    {
      title: "DRIVING LICENSE",
      titleHindi: "ड्राइविंग लाइसेंस",
      price: "3600",
      duration: "30 days",
      durationType: "Minimum",
      requirements: ["1. Age Proof 2. Address Proof 3. Passport Photo 4.Blood group Proof" ],
    },
    {
      title: "KOVID-19 CORONA VACCINE CERTIFICATE",
      titleHindi: "कोविड-19 कोरोना वैक्सीन सर्टिफिकेट",
      price: "10",
      duration: "1 days",
      durationType: "Maximum",
      requirements: [ "1. Registered mobile number only" ],
    },
    {
      title: "FOOD LICENSE",
      titleHindi: "फूड लाइसेंस",
      price: "1250",
      duration: "7 days",
      durationType: "Minimum",
      requirements: [
        "1. Self Attested Photograph 2. Aadhar or Votter or pan or Rasan card 3. Shop Detail",
      ],
    },
    {
      title: "TRADE LICENSE",
      titleHindi: "व्यापार लाइसेंस",
      price: "1600",
      duration: "7 days",
      durationType: "Minimum",
      requirements: [
        "1. Photo 2. Aadhar Card 3. Bank Passbook 4. Proof of place of doing Business.",
      ],
    },
    {
      title: "DEATH CERTIFICATE",
      titleHindi: "मृत्यु प्रमाण-पत्र",
      price: "600",
      duration: "7 days",
      durationType: "Minimum",
      requirements: [
        "1. Aadhar Card of the deceased garden & deceased (मृतक एवं मृतक के आवेदक का आधार कार्ड) 2. Proof of deth (मौत का सबूत)",
      ],
    },
    {
        title: "F.I.R. of any police station",
        titleHindi: "किसी भी थाने के एफ.आई.आर.",
        price: "50",
        duration: "1 days",
        durationType: "Maximum",
        requirements : [
            "1. Only for Detail"
        ]
    },
    {
        title: "I. T. R. Filing",
        titleHindi: "इनकम टैक्स फाइलिंग",
        price: "650",
        duration: "2 days",
        durationType: "Maximum",
        requirements: [
            "1. Pan Card 2. Aadhar Card"
        ]
    },
    {
        title: "L. P. C.",
        price: "900",
        duration: "3 days",
        durationType: "Minimum",
        requirements: [
            "1. Aadhar Card 2. Current Lagan rasid 3. Foto"
        ]
    },

    {
        title: "AADHAR CARD DOWNLOADING VIA O.T.P",
        price: "20",
        duration: "1 days",
        durationType: "Maximum",
        requirements: [
            "1.Aadhar no. 2. Mob. No."
        ]
    },
    {
        title: "VOTER LIST NAME ADDING",
        price: "30",
        duration: "7 days",
        durationType: "Minimum",
        requirements: [
            "1. Pan Card 2. Aadhar Card 3. bank passbook"
        ]
    },
    {
        title: "RATIONCARD APPLY",
        price: "50",
        duration: "1 days",
        durationType: "Maximum",
        requirements: [
            "1. Self Attested Photograph 2. Aadhar or Votter or pan 3. Bank passbook 4. Affidavit"
        ]
    },
    {
        title: "FARMER REGISTRATION",
        price: "30",
        duration: "1 days",
        durationType: "Maximum",
        requirements: [
            "1. Photo 2. Aadhar Card 3. Bank Passbook 4. Proof of place of doing Farming"
        ]
    },
    {
        title: "O.B.C CERTIFICATE",
        price: "300",
        duration: "3 days",
        durationType: "Minimum",
        requirements: [
            "1. Self Attested Photograph 2. Aadhar or Votter or pan or Rasan card"
        ]
    },
    {
        title: "EWS",
        price: "1000",
        duration: "3 days",
        durationType: "Maximum",
        requirements: [
            "1. Self Attested Photograph 2. Aadhar Card 3. Affidavit 4. Cast, Res. & Incom Certificate (1. सेल्फ अटेस्टेड फोटो 2. आधार कार्ड 3. हलफनामा 4. जाति, निवासी और आय प्रमाण-पत्र)"
        ]
    },
    {
        title: "CASTE CERTIFICATE ONLINE",
        price: "50",
        duration: "1 days",
        durationType: "Maximum",
        requirements: [
            "1. Self Attested Photograph 2. Aadhar or Votter or pan or Rasan card"
        ]
    },
    {
        title: "INCOME CERTIFICATE ONLINE",
        price: "50",
        duration: "1 days",
        durationType: "Maximum",
        requirements: [
            "1. Self Attested Photograph 2. Aadhar or Votter or pan or Rasan card"
        ]
    },
    {
        title: "RESIDENTIAL CERTIFICATE ONLINE",
        price: "50",
        duration: "1 days",
        durationType: "Maximum",
        requirements: [
            "1. Self Attested Photograph 2. Aadhar or Votter or pan or Rasan card"
        ]
    },
    {
        title: "SMALL INDUSTRIES LICENSE(M. S. M. E.लघु उद्योग लाइसेंस )",
        price: "150",
        duration: "1 days",
        durationType: "Maximumm",
        requirements: [
            "1. Aadhar Card 2. Pan Card 3. Bank Passbook 4. Business Detail"
        ]
    },
    {
        title: "VANSHWLI PARMAN PATRA",
        price: "1650",
        duration: "10 days (कम से कम 10 दिन)",
        durationType: "Mininum ",
        requirements: [
            "1. Affidavit 2. All member Aadhar Card 3.Aawedan (आवेदन)"
        ]
    },
    {
        title: "ONLINE CORRECTION OF LAND",
        price: "70",
        duration: " 01 days (कम से कम 01 दिन)",
        durationType: "Mininum",
        requirements: [
            "1. ऑफलाइन, ऑनलाइन लगान रसीद। 2. सुधार करने वाले तथ्यों का प्रमाण।"
        ]
    },
    {
        title: "ONLINE MUTATION APPLY",
        price: "100",
        duration: "01 days (कम से कम 01 दिन)",
        durationType: "Minimum",
        requirements: [
            "1. All member Aadhar Card 2. Related Document."
        ]
    },
    
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 uppercase tracking-widest text-sm font-semibold mb-3 mt-6">
            NAYE SOCH NAYA KADAM
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Dhanganga Online Public Kendra{" "}
            <span className="text-blue-600">All Services</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Fast • Reliable • Affordable — Government & Public Documentation at
            your fingertips.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <DiscoverCard
              key={index}
              title={service.title}
              titleHindi={service.titleHindi}
              price={service.price}
              duration={service.duration}
              durationType={service.durationType}
              requirements={service.requirements}
              buttonClass="w-full py-2 text-white font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-md hover:opacity-90 transition"
            />
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl shadow-2xl p-10 md:p-16 text-white relative overflow-hidden">
          {/* Floating dots bg */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-20 gap-1 h-full">
              {[...Array(400)].map((_, i) => (
                <div key={i} className="bg-white rounded-full w-1 h-1"></div>
              ))}
            </div>
          </div>

          <div className="relative grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-xl mb-8 opacity-90 font-light">
                Trusted by <span className="font-bold">700+ customers</span> for{" "}
                <span className="font-bold">3200+ services</span>
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-14 h-14 border-2 border-white rounded-2xl flex items-center justify-center mr-4 bg-white/10 backdrop-blur">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <p className="text-sm opacity-80 uppercase tracking-wider">
                      Call for advice now
                    </p>
                    <p className="text-2xl font-bold">(+91) 7764026786</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-14 h-14 border-2 border-white rounded-2xl flex items-center justify-center mr-4 bg-white/10 backdrop-blur">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <p className="text-sm opacity-80 uppercase tracking-wider">
                      Say Hello
                    </p>
                    <p className="text-xl font-semibold">
                      manturani.pp@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-gray-800">
              <h3 className="text-3xl font-extrabold mb-3 text-gray-900">
                Need a hand?
              </h3>
              <p className="text-gray-600 mb-8">
                Our team is ready to assist with all services. Fill the form and
                we’ll get back quickly.
              </p>

              <div className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Mobile <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your mobile"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Select Department
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="">Choose a department</option>
                    <option value="pan">PAN Card Services</option>
                    <option value="gst">GST Services</option>
                    <option value="certificates">Certificate Services</option>
                    <option value="licenses">License Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Please describe what you need.
                  </label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your requirements..."
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="w-full cursor-pointer bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300"
                  onClick={() => console.log("Form submitted")}
                >
                  Book Service 🚀
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverPublicKendra;
