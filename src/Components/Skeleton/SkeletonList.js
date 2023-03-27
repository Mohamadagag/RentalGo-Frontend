import React from "react";
import SkeletonLoader from "./SkeletonLoader";

function SkeletonList() {
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
      <SkeletonLoader />
    </div>
  );
}

export default SkeletonList;
