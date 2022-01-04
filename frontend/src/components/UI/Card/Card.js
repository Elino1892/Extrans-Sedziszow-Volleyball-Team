const Card = ({ children, nameClass, style }) => {
  return (
    <section
      className={nameClass ? `card ${nameClass}` : 'card'}
      style={style}
    >
      {children}
    </section>
  );
};

export default Card;
