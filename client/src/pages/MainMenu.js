import React from 'react'
import axios from 'axios'

const MainMenu = () => {
  const makeTestRequest = () => {
    axios.get('http://localhost:8000/test')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div>
      <div>Main Menu</div>
      <button onClick={makeTestRequest}>Test Request</button>
    </div>
  )
};

export default MainMenu;
