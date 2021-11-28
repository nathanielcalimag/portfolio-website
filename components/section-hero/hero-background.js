import styles from "./hero-background.module.css";

const HeroBackground = () => {
  return (
    <>
      <div
        className="absolute inset-0 bottom-36 -z-20 lg:bottom-4"
        id="heroBackground"
      />
      <div
        className={`absolute inset-0 bg-blue-100 bottom-96 sm:hidden -z-10 ${styles.div}`}
      />
      <div
        className={`absolute inset-x-0 scale-x-150 bg-blue-100 rounded-b-full xl:scale-x-125 h-60 bottom-36 sm:h-auto sm:top-0 2xl:scale-x-110 lg:bottom-4 -z-10 ${styles.div}`}
      />
      <div
        className={`absolute inset-x-0 h-64 scale-x-150 bg-blue-100 rounded-b-full xl:scale-x-125 blur bottom-32 sm:h-auto sm:top-0 2xl:scale-x-110 -z-10 lg:bottom-2 ${styles.div}`}
      />
    </>
  );
};

export default HeroBackground;
