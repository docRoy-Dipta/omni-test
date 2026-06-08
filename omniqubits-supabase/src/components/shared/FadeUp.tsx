"use client";

/**
 * FadeUp — Reusable scroll-triggered animation wrapper.
 *
 * Why this exists:
 * - Static pages (services, about, pricing, clients) don't need
 *   "use client" just to have animations.
 * - By isolating the motion logic here, those pages stay as Server
 *   Components (faster initial load, SEO-friendly HTML) while still
 *   getting smooth entrance animations.
 *
 * Usage:
 *   import { FadeUp } from "@/components/shared/FadeUp";
 *
 *   <FadeUp>
 *     <h2>My heading</h2>
 *   </FadeUp>
 *
 *   <FadeUp delay={0.2} className="col-span-2">
 *     <ServiceCard ... />
 *   </FadeUp>
 */

import { motion } from "framer-motion";

interface FadeUpProps {
  children: React.ReactNode;
  /** Delay in seconds before animation starts. Default: 0 */
  delay?: number;
  /** Extra Tailwind classes applied to the wrapper div */
  className?: string;
  /** Animation duration in seconds. Default: 0.6 */
  duration?: number;
}

export function FadeUp({
  children,
  delay    = 0,
  className = "",
  duration = 0.6,
}: FadeUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // custom ease-out-expo
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * FadeUpGroup — Stagger-animates direct children.
 *
 * Usage:
 *   <FadeUpGroup stagger={0.08}>
 *     <Card />
 *     <Card />
 *     <Card />
 *   </FadeUpGroup>
 */
interface FadeUpGroupProps {
  children: React.ReactNode;
  /** Seconds between each child's animation start. Default: 0.08 */
  stagger?: number;
  className?: string;
}

export function FadeUpGroup({
  children,
  stagger   = 0.08,
  className = "",
}: FadeUpGroupProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden:  {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * FadeUpItem — Used inside FadeUpGroup as individual animated child.
 *
 * Usage:
 *   <FadeUpGroup>
 *     <FadeUpItem><Card /></FadeUpItem>
 *     <FadeUpItem><Card /></FadeUpItem>
 *   </FadeUpGroup>
 */
export function FadeUpItem({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden:  { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
