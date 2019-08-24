import React, { memo } from 'react'
import PropTypes from 'prop-types'

import './ProgressRing.css'

const ProgressRing = memo(function ProgressRing(props) {
  const { radius, stroke, progress, color = 'lightskyblue', steps = 4 } = props;

  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - progress / 100 * circumference;

  return (
    <div className="ringContainer" style={{ height: `${radius * 2}`, width: `${radius * 2}`, }}>
      <h4 className="ringNumProgress">
        {progress}<span className="ringNumSteps">%</span>
        {/* {(progress / 100) * steps}
        <span className="ringNumSteps">/{steps}</span> */}
      </h4>
      <svg
        height={radius * 2}
        width={radius * 2}
        className="ringProgressIndicator"
      >
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          stroke-width={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg >
    </div>
  )
})

ProgressRing.propTypes = {
  color: PropTypes.string,
  progress: PropTypes.number,
  radius: PropTypes.number,
  stroke: PropTypes.number,
}

export default ProgressRing
