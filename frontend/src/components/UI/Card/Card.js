const Card = ({ children, nameClass }) => {
  return (
    <section
      className={nameClass ? `card ${nameClass}` : 'card'}
    >
      {children}
    </section>
  );
};

export default Card;
