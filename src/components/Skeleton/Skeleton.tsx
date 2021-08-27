import './skeleton.css';

interface SkeletonProps {
  width?: string;
  height?: string;
}

export const Skeleton = (props: SkeletonProps): JSX.Element => {
  const { width, height } = props;
  return (
    <div style={{ width, height }} className="skeleton-text"></div>
  );
};
