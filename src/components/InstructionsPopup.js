import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closePopup } from '../store/actions/dietActions';
import styles from './Popup.module.css';

const Popup = () => {
  const dispatch = useDispatch();
  const dailyDietPlan = useSelector(state => state.dailyDiet.dailyDietInfo);
  const popupVisible = useSelector(state => state.dailyDiet.popupVisible);

  console.log("dailyDietPlan", dailyDietPlan)

  if (!popupVisible || !dailyDietPlan) return null;

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <button className={styles.closeButton} onClick={() => dispatch(closePopup())}>X</button>
        <h2>{`Day ${dailyDietPlan.day}`}</h2>
        <div className={styles.videoSection}>
          <h3>Exercise Videos</h3>
          {/* {dailyDietPlan.exerciseVideos.map((video, index) => ( */}
            <div  className={styles.videoItem}>
              <iframe
                src={"https://www.youtube.com/embed/Ew-3-8itpjc"}
                title={"How To Make Healthy Pasta"}
                frameBorder="0"
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              {/* <p>{dailyDietPlan}</p> */}
            </div>
          {/* ))} */}
        </div>
        <div className={styles.instructionsSection}>
          <h3>Cooking Instructions</h3>
          {/* {dailyDietPlan.cookingInstructions.map((instruction, index) => ( */}
            <p>{dailyDietPlan}</p>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default Popup;
