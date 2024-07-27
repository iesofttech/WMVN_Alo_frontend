import React from "react";
import styles from "./GameCategories.module.css";
import Loader from "../../helpers/helperComponents/Loader";
import { Typography } from "antd";

const GameCategories = ({
  activeCatId,
  setActiveCatId,
  isLoading,
  gameCategories,
}) => {
  return (
    <div className={styles.categories}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {gameCategories && !gameCategories?.length ? (
            <Typography.Text className="noDataFoundText">
              {/* {errorMsg} */}
              error
            </Typography.Text>
          ) : !isLoading ? (
            gameCategories?.map((category, index) => {
              return (
                <div
                  onClick={() => {
                    setActiveCatId(category?.id);
                  }}
                  key={category?.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "center",
                    cursor: "pointer",
                    padding: "2px 0px",
                  }}
                  className={
                    activeCatId === category?.id
                      ? styles.selectedCategoryStyle
                      : ""
                  }
                >
                  <div key={category?.id}>
                    <img
                      src={`${category.image}`}
                      // src={
                      //   activeCatId?.id === category.id
                      //     ? `${category.icon_active}`
                      //     : `${category?.icon_image}`
                      // }
                      className={`${styles.singleCategory} ${
                        styles.categoryImageStyle
                      } ${
                        activeCatId === category.id
                          ? styles.activeSingleCategory
                          : ""
                      } `}
                      alt={`img${category?.id}`}
                    />
                  </div>
                  <div className={styles.catNameContainer}>
                    <span
                      className={` ${styles.categoryName} ${
                        activeCatId === category.id
                          ? styles.activecategoryName
                          : styles.inactivecategoryName
                      } `}
                    >
                      {/* {formattedCategoryName} */}
                      {category.name}
                    </span>
                  </div>
                </div>
              );
            })
          ) : (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Loader />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GameCategories;
