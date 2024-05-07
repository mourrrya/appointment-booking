export const SlotsSkeletonLoading = () => {
  return (
    <div>
      <div className="slot-skeleton-loading__label" />
      <div className="slot-skeleton-loading__slot-wrapper">
        {Array.from(Array(4).keys()).map((key) => (
          <div key={key} className="slot-skeleton-loading__slot" />
        ))}
      </div>
    </div>
  );
};
