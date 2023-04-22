import React from 'react'

const Admin = () => {
  return (
    <div>
      <div class="body">
        <nav class="side-bar">
          <div class="user-p">
            <img src=".assets/Vector.png" />
            <h4>
              User
            </h4>
          </div>
          <ul>
            <li>
              <a href="#">
                <i class="fa fa-desktop" aria-hidden="true"></i>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                <span>Podcast</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-info-circle" aria-hidden="true"></i>
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-cog" aria-hidden="true"></i>
                <span>Setting</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-power-off" aria-hidden="true"></i>
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
      )
}

      export default Admin