import React from "react";
import Heading from "../micro/Heading";

export default function Maps() {
  return (
    <div className="py-16">
      <Heading
        heading="Lokasi & Akses"
        subheading="Temukan lokasi Pantai Rambang dengan mudah. Ikuti petunjuk peta kami untuk sampai ke tempat wisata indah ini."
        align="center"
      />
      <div className="h-64 w-full md:h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.598912426936!2d116.5493942100463!3d-8.729581088999277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcc51cedbe44df5%3A0xe32c4ee99be8ded!2sPantai%20Rambang!5e0!3m2!1sid!2sid!4v1745634357325!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Peta pantai rambang"
          className="h-full w-full"></iframe>
      </div>
    </div>
  );
}
