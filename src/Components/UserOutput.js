import React from 'react';

import './UserOutput.css'

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <h4>username: {props.username}</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus arcu eget nisl eleifend venenatis. Vestibulum arcu dolor, ornare eu mi nec, commodo vestibulum nunc. Proin dui ipsum, molestie et lectus a, rutrum dictum libero. Nunc eget mauris nisl. Fusce vestibulum ultricies augue, sed efficitur sem suscipit quis. Mauris quam nisi, tempor in feugiat a, rhoncus sit amet est. Etiam feugiat mattis lectus, ut suscipit lorem auctor id.</p>
      <p>Vestibulum neque odio, accumsan non luctus ut, varius eget ligula. Nullam tellus lacus, ornare et bibendum at, vestibulum ultrices felis. Vivamus luctus quis eros eu facilisis. In ultrices, dolor at laoreet volutpat, lacus tortor venenatis sem, vel laoreet nisl ipsum vel massa. Nunc ex orci, euismod a auctor id, imperdiet vel magna. In hac habitasse platea dictumst. Cras magna orci, pellentesque quis quam et, dapibus maximus magna.</p>
    </div>
  )
}

export default userOutput;