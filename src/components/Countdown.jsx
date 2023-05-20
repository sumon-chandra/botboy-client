import { useEffect, useState } from "react";

const Countdown = ({ duration }) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const getDays = (milliseconds) => {
    const total_seconds = parseInt(Math.floor(milliseconds / 1000));
    const total_minutes = parseInt(Math.floor(total_seconds / 60));
    const total_hours = parseInt(Math.floor(total_minutes / 60));
    const days = parseInt(Math.floor(total_hours / 24));
    return days;
  };
  const getHours = (milliseconds) => {
    const total_seconds = parseInt(Math.floor(milliseconds / 1000));
    const total_minutes = parseInt(Math.floor(total_seconds / 60));
    const total_hours = parseInt(Math.floor(total_minutes / 60));
    const hours = parseInt(total_hours % 24);
    return hours;
  };
  const getMinutes = (milliseconds) => {
    const total_seconds = parseInt(Math.floor(milliseconds / 1000));
    const total_minutes = parseInt(Math.floor(total_seconds / 60));
    const minutes = parseInt(total_minutes % 60);
    return minutes;
  };
  const getSeconds = (milliseconds) => {
    const total_seconds = parseInt(Math.floor(milliseconds / 1000));
    const seconds = parseInt(total_seconds % 60);
    return seconds;
  };
  return (
    <div className="grid grid-flow-col gap-x-1 items-center text-center auto-cols-max bg-gradient-to-br from-mainColor to-secColor">
      <div className="flex flex-col p-2 rounded-box text-[10px] text-neutral-content">
        <span className="countdown font-sans lg:text-xl text-xs font-bold">
          <span style={{ "--value": getDays(time) }}></span>
        </span>
        days
      </div>
      <span className="lg:text-2xl text-md font-black text-white">:</span>
      <div className="flex flex-col lg:p-2 px-1  rounded-box text-[10px]  text-neutral-content">
        <span className="countdown font-sans lg:text-xl text-xs font-bold">
          <span style={{ "--value": getHours(time) }}></span>
        </span>
        hours
      </div>
      <span className="lg:text-2xl text-md font-black text-white">:</span>
      <div className="flex flex-col lg:p-2 px-1  rounded-box text-[10px]  text-neutral-content">
        <span className="countdown font-sans lg:text-xl text-xs font-bold">
          <span style={{ "--value": getMinutes(time) }}></span>
        </span>
        min
      </div>
      <span className="lg:text-2xl text-md font-black text-white">:</span>
      <div className="flex flex-col lg:p-2 px-1  rounded-box text-[10px]  text-neutral-content">
        <span className="countdown font-sans lg:text-xl text-xs font-bold">
          <span style={{ "--value": getSeconds(time) }}></span>
        </span>
        sec
      </div>
    </div>
  );
};

export default Countdown;
