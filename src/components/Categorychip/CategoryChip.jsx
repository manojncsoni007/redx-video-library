import React from 'react';
import { useVideo } from '../../context/video-context';
import './CategoryChip.css'

 const CategoryChip = ({cat}) => {
  const { videoDispatch,categoryFilter } = useVideo();
  return (
    <>
      <span className={`category-chip ${categoryFilter === cat ? "active-category" : ''}`} onClick={() => videoDispatch({ type: "FILTER_VIDEO_CATEGORYWISE", payload:{cat} })}>
        {cat}
      </span>
    </>
  )
}

export {CategoryChip}
