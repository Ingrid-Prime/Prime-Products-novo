import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function Counter({ value }: { value: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  // Extract number and suffix/prefix
  const match = value.match(/^(\D*)(\d+)(\D*)$/);
  const prefix = match ? match[1] : "";
  const targetNumber = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : "";

  useEffect(() => {
    if (inView && targetNumber > 0) {
      let start = 0;
      const duration = 2000;
      const increment = targetNumber / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          setCount(targetNumber);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    } else if (inView && targetNumber === 0) {
        setCount(0);
    }
  }, [inView, targetNumber]);

  if (!match) return <span>{value}</span>;

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}
