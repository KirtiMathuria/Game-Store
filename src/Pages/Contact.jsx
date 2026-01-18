import React from "react";


const contactData = [
  {
   
  type: "Email",
  icon: "📧",
  value: "support@GameLoot.com",
  link: "https://mail.google.com/mail/?view=cm&fs=1&to=support@GameLoot.com",
  color: "text-blue-400"


  },
  {
    type: "Phone",
    icon: "📞",
    value: "+91 123 456 7890",
    link: "tel:+911234567890",
    color: "text-indigo-400"
  },
  {
    type: "Address",
    icon: "🏢",
    value: "123 ProductHub Street, Tech City, India 560001",
    link: "https://www.google.com/maps/search/?api=1&query=Tech+City+India",
    color: "text-purple-400"
  },
  {
    type: "Social",
    icon: "🌐",
    value: [
      { name: "Facebook", link: "https://www.facebook.com/natgeo" },
      { name: "Twitter", link: "https://twitter.com/natgeo" },
      { name: "Instagram", link: "https://www.instagram.com/natgeo/" },
      { name: "LinkedIn", link: "https://www.linkedin.com/company/national-geographic/" }
    ],
    color: "text-green-400"
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-20">
      <h1 className="text-5xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto text-center mb-12">
        Reach out to us using the information below. We’re happy to assist you!
      </p>

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-10 text-center md:text-left">
        {contactData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <h3 className={`text-xl font-semibold mb-2 ${item.color}`}>
              {item.icon} {item.type}
            </h3>

         
            {item.type !== "Social" ? (
              <a
                href={item.link}
                target={item.type === "Address" ? "_blank" : undefined}
                rel={item.type === "Address" ? "noopener noreferrer" : undefined}
                className="text-gray-300 hover:text-blue-400 underline transition"
              >
                {item.value}
              </a>
            ) : (
            
              <div className="flex justify-center md:justify-start gap-4 mt-2 flex-wrap">
                {item.value.map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-blue-400 underline transition"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
