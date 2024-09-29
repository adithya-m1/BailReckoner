// src/AboutSection.js
import React from 'react';

function AboutSection() {
  return (
    <section id="about" className="py-10 bg-gray-200">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">About Bail Reckoner</h2>
        <p className="text-lg mb-4">
          <strong>Bail Reckoner</strong> is a groundbreaking digital tool designed to streamline the bail application process in India. Our mission is to make the bail process more transparent, efficient, and accessible for undertrial prisoners, legal aid providers, and judicial authorities. By leveraging technology and innovation, we aim to address the complexities and delays often associated with bail applications and evaluations.
        </p>
        <h3 className="text-2xl font-semibold mb-4">What We Offer</h3>
        <ul className="list-disc list-inside text-left mx-auto max-w-2xl">
          <li><strong>Bail Eligibility Calculator:</strong> Users provide details such as the time served, the nature of the offense, and other relevant information. The calculator assesses bail eligibility based on legal provisions and the duration of imprisonment already served, providing clear guidance on the next steps.</li>
          <li><strong>Comprehensive User Accounts:</strong> Our platform supports various user roles, including Bail Applicants, Legal Aid Providers, and Judicial Authorities. Secure access through Aadhaar/Digilocker and biometric data ensures the legitimacy of applications.</li>
          <li><strong>Efficient Bail Application Filing:</strong> Users can create and submit structured bail applications, which are then reviewed by legal aid providers and forwarded to judicial authorities. Real-time status updates keep applicants informed at every stage of the process.</li>
          <li><strong>Legal Aid Provider Integration:</strong> Legal aid providers can access and evaluate applications efficiently. Our system uses advanced algorithms to generate case summaries, assisting legal aid providers in making informed decisions.</li>
          <li><strong>Judicial Authority Workflow:</strong> Judicial authorities receive streamlined applications with summarized case details, facilitating quicker decisions on bail approval. AI-generated summaries help in assessing cases based on legal and procedural parameters.</li>
        </ul>
        <h3 className="text-2xl font-semibold mt-6 mb-4">Key Features</h3>
        <ul className="list-disc list-inside text-left mx-auto max-w-2xl">
          <li><strong>Automated Notifications:</strong> Stay updated with automated alerts throughout the application process.</li>
          <li><strong>Real-time Status Tracking:</strong> Monitor the progress of bail applications through a user-friendly dashboard.</li>
          <li><strong>Data Security:</strong> We prioritize the protection of sensitive information with strong encryption and secure APIs.</li>
          <li><strong>Legal Aid Matching:</strong> Connect with nearby legal aid providers based on geolocation or address for effective case management.</li>
        </ul>
        <h3 className="text-2xl font-semibold mt-6 mb-4">Why Bail Reckoner?</h3>
        <p className="text-lg">
          Our tool is designed to simplify and expedite the bail process, ensuring that eligible undertrial prisoners receive timely assistance. By providing a clear, accessible interface for all users, we enhance the fairness and efficiency of the legal system. Bail Reckoner aims to contribute to a more just and equitable legal environment through innovative technology.
        </p>
        <p className="text-lg mt-4">
          Join us in making the bail process smoother and more transparent for everyone involved.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
