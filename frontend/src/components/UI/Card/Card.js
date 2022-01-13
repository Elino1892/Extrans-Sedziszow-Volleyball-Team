const Card = ({ children, nameClass, style, onClick }) => {
  return (
    <section
      onClick={onClick}
      className={nameClass ? `card ${nameClass}` : 'card'}
      style={style}
    >
      {children}
    </section>
  );
};

export default Card;
