import styles from "./hero-background.module.css";

const HeroBackground = () => {
  return (
    <>
      <div
        className={`absolute inset-0 bg-blue-100 bottom-96 -z-10 ${styles.div}`}
      />
      <div
        className={`absolute inset-x-0 scale-x-150 bg-blue-100 rounded-b-full h-60 bottom-36 -z-10 ${styles.div}`}
      />
      <div
        className={`absolute inset-x-0 scale-x-150 blur bg-blue-100 rounded-b-full h-64 bottom-32 -z-20 ${styles.div}`}
      />
    </>
  );
};

export default HeroBackground;
