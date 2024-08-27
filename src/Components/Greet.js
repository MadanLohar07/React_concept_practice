const Greet = (props) => {
  //   props.name = "Madan"; props are immutable, there value cannot be changed.
  return (
    <>
      <h1>Hello, {props.name}</h1>
      {props.children}
    </>
  );
};

export default Greet;
