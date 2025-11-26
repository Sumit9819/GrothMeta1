import React, { useState, useEffect, useRef } from 'react';

const CountUp = ({ end, duration = 2000, prefix = '', suffix = '', decimals = 0 }) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime = null;
        let animationFrame;

        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Easing function (easeOutExpo)
            const easeOut = (x) => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x));

            const currentCount = easeOut(percentage) * end;
            setCount(currentCount);

            if (progress < duration) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [isVisible, end, duration]);

    return (
        <span ref={countRef}>
            {prefix}
            {count.toFixed(decimals)}
            {suffix}
        </span>
    );
};

export default CountUp;
