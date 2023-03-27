import React from "react";
import SkeletonLoader from "./SkeletonLoader";

function EightSkeleton() {
  return (
    <div className="list">
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
      <SkeletonLoader />
    </div>
  );
}

export default EightSkeleton;
