import React, { Fragment } from "react";
import {
  LinkHorizontal,
  LinkVertical,
  LinkRadial,
  LinkHorizontalStep,
  LinkVerticalStep,
  LinkRadialStep,
  LinkHorizontalCurve,
  LinkVerticalCurve,
  LinkRadialCurve,
  LinkHorizontalLine,
  LinkVerticalLine,
  LinkRadialLine
} from "@vx/shape";

function Link({ data, linkType, layout, orientation, stepPercent, ...props }) {
  let LinkComponent;

  if (layout === "polar") {
    if (linkType === "step") {
      LinkComponent = LinkRadialStep;
    } else if (linkType === "curve") {
      LinkComponent = LinkRadialCurve;
    } else if (linkType === "line") {
      LinkComponent = LinkRadialLine;
    } else {
      LinkComponent = LinkRadial;
    }
  } else {
    if (orientation === "vertical") {
      if (linkType === "step") {
        LinkComponent = LinkVerticalStep;
      } else if (linkType === "curve") {
        LinkComponent = LinkVerticalCurve;
      } else if (linkType === "line") {
        LinkComponent = LinkVerticalLine;
      } else {
        LinkComponent = LinkVertical;
      }
    } else {
      if (linkType === "step") {
        LinkComponent = LinkHorizontalStep;
      } else if (linkType === "curve") {
        LinkComponent = LinkHorizontalCurve;
      } else if (linkType === "line") {
        LinkComponent = LinkHorizontalLine;
      } else {
        LinkComponent = LinkHorizontal;
      }
    }
  }

  return (
    <LinkComponent
      data={data}
      percent={stepPercent}
      stroke="#374469"
      strokeWidth="1"
      fill="none"
      {...props}
    />
  );
}

export default Link;
