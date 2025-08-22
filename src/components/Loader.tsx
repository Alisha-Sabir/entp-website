const Loader = ({ opacity }: any) => {
  return (
    <div className="loader-container" style={opacity && { opacity: opacity }}>
      <img src="/images/loading.gif" alt="Loading" className="loader" />
    </div>
  );
};

export default Loader;
