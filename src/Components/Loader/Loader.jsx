import Loader from "react-loader-spinner";

const Spinner = () => {
  return (
    <Loader
      type="Puff"
      color="#fffb00"
      height={120}
      width={120}
      timeout={23000} //3 secs
    />
  );
};

export default Spinner;
