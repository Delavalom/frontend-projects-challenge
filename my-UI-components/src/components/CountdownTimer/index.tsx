import { ChangeEvent, useState, type FC, useEffect, useRef } from "react";
import { Input } from "./Input";

export const times = ["hours", "minutes", "seconds"] as const;
export const initalState = { hours: 0, minutes: 0, seconds: 0 };

type Props = {};

export const CountdownTimer: FC<Props> = ({}) => {
  const timerId = useRef<number | null>(null);
  const [timer, setTimer] = useState(initalState);
  const [hasStart, setHasStart] = useState(false);

  function updateTime(time: typeof timer) {
    const { hours, minutes, seconds } = time;
    if (minutes === 0 && hours !== 0) {
      return {
        hours: hours - 1,
        minutes: 59,
        seconds: seconds,
      };
    } else if (seconds === 0 && minutes !== 0) {
      return {
        hours: hours,
        minutes: minutes - 1,
        seconds: 59,
      };
    } else if (seconds === 0 && minutes === 0 && hours === 0) {
      timerFinish();
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    return {
      hours: hours,
      minutes: minutes,
      seconds: seconds - 1,
    };
  }

  function timerFinish() {
    clearInterval(timerId.current as number);
    alert("time finished");
  }

  function handleReset() {
    clearInterval(timerId.current as number);
    setTimer(initalState);
    setHasStart(false);
  }
  function handleStart() {
    if (timer.hours === 0 && timer.minutes === 0 && timer.seconds === 0) {
      alert("input some numbers");
      return;
    }
    setHasStart(true);
  }
  function handlePause() {
    setHasStart(false);
  }
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (isNaN(e.target.valueAsNumber)) {
      return;
    }
    setTimer({
      ...timer,
      [e.target.name]: e.target.valueAsNumber,
    });
  }

  useEffect(() => {
    if (!hasStart) return;

    timerId.current = setInterval(() => {
      setTimer((prev) => updateTime(prev));
    }, 1000);

    return () => clearInterval(timerId.current as number);
  }, [hasStart]);

  return (
    <section className="flex flex-col gap-2">
      <h2>Countdown Timer</h2>
      <div className="flex gap-4">
        <div id="counter" className="flex gap-2 items-center">
          {times.map((time, idx) => (
            <Input
              key={idx}
              disabled={hasStart}
              value={timer[time]}
              onChange={handleChange}
              name={time}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={handleStart}>start</button>
          <button onClick={handlePause}>pause</button>
          <button onClick={handleReset}>reset</button>
        </div>
      </div>
    </section>
  );
};
