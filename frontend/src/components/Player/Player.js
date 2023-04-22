import React from 'react'
import "./player.css"
function player() {
  return (
    <div>
        	<div class="player">
		<div class="player-track">
			<div class="artist-name"></div>
			<div class="music-name"></div>
			<div class="progress-bar">
				<div class="fillBar"></div>
			</div>
			<div class="time"></div>
		</div>
		<div class="circle">
			<div class="circ"></div>
			<div id="thumbnail" class="thumbnail"></div>
		</div>
		<div class="player-control">
			<i id="prev" class="prev-btn fas fa-backward"></i>
			<i id="play" class="play-btn fas fa-play"></i>
			<i id="next" class="next-btn fas fa-forward"></i>
		</div>
	</div>
    </div>
  )
}

export default player