import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const STONE_1_COLOR = "#4B5563";
const STONE_1_BORDER = "#374151";

const STONE_2_COLOR = "#4B5563";
const STONE_2_BORDER = "#374151";

const STONE_3_COLOR = "#4B5563";
const STONE_3_BORDER = "#374151";

const STONE_4_COLOR = "#4B5563";
const STONE_4_BORDER = "#374151";

const pebbles = [
  {
    id: 1,
    width: 160,
    height: 100,
    borderRadius: "50% 50% 45% 45% / 60% 60% 40% 40%",
    rotate: 0,
    color: STONE_1_COLOR,
    borderColor: STONE_1_BORDER,
  },
  {
    id: 2,
    width: 140,
    height: 46,
    borderRadius: "50% / 50%",
    rotate: -6,
    color: STONE_2_COLOR,
    borderColor: STONE_2_BORDER,
  },
  {
    id: 3,
    width: 74,
    height: 74,
    borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
    rotate: 0,
    color: STONE_3_COLOR,
    borderColor: STONE_3_BORDER,
  },
  {
    id: 4,
    width: 100,
    height: 40,
    borderRadius: "50% / 50%",
    rotate: -4,
    color: STONE_4_COLOR,
    borderColor: STONE_4_BORDER,
  },
];

const FALL_DISTANCE = 190;

export default function PebbleStack() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const allControls = [controls1, controls2, controls3, controls4];

  useEffect(() => {
    if (!isInView) return;

    const sequence = async () => {
      await controls1.start({
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 300, damping: 16 },
      });

      await controls2.start({
        y: 0,
        opacity: 1,
        rotate: -6,
        transition: { type: "spring", stiffness: 300, damping: 16 },
      });

      await controls3.start({
        y: 0,
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 300, damping: 16 },
      });
      await new Promise((res) => setTimeout(res, 300));

      await controls3.start({
        x: [0, -35, -95, -150, -150],
        y: [0, 15, FALL_DISTANCE * 0.85, FALL_DISTANCE, FALL_DISTANCE],
        rotate: [0, -100, -280, -470, -470],
        scaleX: [1, 1, 1.05, 1.2, 1],
        scaleY: [1, 1, 0.95, 0.8, 1],
        transition: {
          duration: 0.9,
          times: [0, 0.25, 0.6, 0.85, 1],
          ease: ["easeIn", "easeIn", "easeOut", "easeOut"],
        },
      });

      await controls3.start({
        scaleX: 1.15,
        scaleY: 0.85,
        transition: { duration: 0.08 },
      });
      await controls3.start({
        scaleX: 1,
        scaleY: 1,
        transition: { type: "spring", stiffness: 500, damping: 10 },
      });

      await new Promise((res) => setTimeout(res, 550));

      await controls3.start({
        x: 0,
        y: 0,
        rotate: 0,
        scaleX: 1,
        scaleY: 1,
        transition: { duration: 0.7, ease: [0.34, 1.4, 0.64, 1] },
      });

      await controls4.start({
        y: 0,
        opacity: 1,
        rotate: -4,
        transition: { type: "spring", stiffness: 300, damping: 16 },
      });
    };

    sequence();
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: 360,
        minHeight: 320,
        margin: "0 auto",
        paddingTop: 40,
      }}
    >
      {pebbles.map((pebble, index) => (
        <div
          key={pebble.id}
          style={{
            position: "relative",
            marginTop: index === 0 ? 0 : -14,
            zIndex: pebbles.length - index,
          }}
        >
          <motion.div
            initial={{ y: -220, opacity: 0, x: 0, rotate: pebble.rotate, scale: 1 }}
            animate={allControls[index]}
            style={{
              width: pebble.width,
              height: pebble.height,
              borderRadius: pebble.borderRadius,
              backgroundColor: pebble.color,
              border: `2px solid ${pebble.borderColor}`,
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.12)",
            }}
          />
        </div>
      ))}
    </div>
  );
}
