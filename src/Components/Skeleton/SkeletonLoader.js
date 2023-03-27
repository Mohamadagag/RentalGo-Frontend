import React from "react";
import Skeleton from "@mui/material/Skeleton";
import "./Skeleton.css";

function SkeletonLoader() {
  return (
    <div className="skeleton-container">
      <Skeleton variant="rectangular" width={250} height={120} />
      <Skeleton variant="text" width={170} sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" width={100} sx={{ fontSize: "1rem", mb: 8 }} />
      <div>
        <Skeleton
          variant="rectangular"
          width={150}
          height={40}
          sx={{ mx: "auto" }}
        />
      </div>
    </div>
  );
}

export default SkeletonLoader;
