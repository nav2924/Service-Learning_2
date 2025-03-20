import React from "react";

const Donate = () => {
  return (
    <div className="bg-blue-300 text-5xl font-bold flex flex-col items-center justify-center p-6 gap-4">
      <div>Donate Us</div>
      <div>
        <img
          src="/gpay.jpg"
          alt="QR code for donation"
          width={400}
          className="max-w-xs sm:max-w-md"
        />
      </div>
    </div>
  );
};

export default Donate;
