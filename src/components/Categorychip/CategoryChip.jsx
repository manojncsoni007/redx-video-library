import React from 'react';
import { useVideo } from '../../context/video-context';
import './CategoryChip.css'

 const CategoryChip = (props) => {
  const { videoDispatch,categoryFilter } = useVideo();
  return (
    <>
      <span className={`category-chip ${categoryFilter === props.category ? "active-category" : ''}`} onClick={() => videoDispatch({ type: "FILTER_VIDEO_CATEGORYWISE", payload:props.category })}>
        {props.category}
      </span>
    </>
  )
}

export {CategoryChip}
