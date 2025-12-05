import React, { useEffect, useState } from "react";
import SalesImage from "../../assets/books/Unsplash.png";
function SaleSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // دالة حساب الوقت المتبقي
    function calculateSaleTimer() {
      const endDate = new Date("2025-12-31T23:59:59");
      const now = new Date();
      const diff = endDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }

    // تشغيل أول مرة
    calculateSaleTimer();

    // تحديث كل ثانية
    const timer = setInterval(calculateSaleTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-24">
      <div className="flex justify-between bg-section h-full p-10 rounded-lg">
        <div className="flex flex-col justify-center gap-6 mt-4 text-2xl md:w-1/2">
          <h2 className="text-secoundry-deepBlue text-4xl font-bold">
            All books are 50% off now! Don't miss such a deal!
          </h2>
          <p className="text-base text-gray-500 font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            feugiat amet, libero ipsum enim pharetra hac.
          </p>
          <div className="flex  gap-4 mt-4 text-2xl">
            <p className="text-main-orange text-4xl font-bold">{timeLeft.days}d</p>
            <p className="text-main-orange text-4xl font-bold">{timeLeft.hours}h</p>
            <p className="text-main-orange text-4xl font-bold">{timeLeft.minutes}m</p>
            <p className="text-main-orange text-4xl font-bold">{timeLeft.seconds}s</p>
          </div>
        </div>
        <div className="w-1/2 flex justify-center">
          <img src={SalesImage} alt="" className="w-full max-w-md" />
        </div>
      </div>
    </div>
  );
}

export default SaleSection;
