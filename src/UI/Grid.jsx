import React from "react";
import styles from "./Grid.module.css";

const Grid = (props) => {
  const {
    gridColumns,
    gridRows,
    flow,
    rowGap,
    columnGap,
    justifyGrid,
    justifyGridItems,
    alignGridContent,
    alignGridItems,
  } = props;

  const gridTemplateColumns = `${gridColumns}`;
  const gridTemplateRows = `repeat(${gridRows}, 1fr)`;
  const gridAutoFlow = flow;
  const gridRowGap = `${rowGap}px`;
  const gridColumnGap = `${columnGap}px`;
  const alignItems = alignGridItems || "stretch";
  const justifyContent = justifyGrid || "start";
  const justifyItems = justifyGridItems || "start";
  const alignContent = alignGridContent || "start";

  const gridValues = {
    gridTemplateColumns,
    gridTemplateRows,
    gridAutoFlow,
    gridRowGap,
    gridColumnGap,
    justifyContent,
    justifyItems,
    alignContent,
    alignItems,
  };

  return (
    <div className={styles.gridSetting} style={gridValues}>
      {props.children}
    </div>
  );
};

export default Grid;
