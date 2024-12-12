
const Loading = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="text-center">
        <div className="spinner-border text-warning" role="status">
        </div>
        <p className="mt-3 fs-1">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
