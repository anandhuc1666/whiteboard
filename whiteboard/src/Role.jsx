import React from 'react'
import Page from './staff/home/page'
import App from './App'

function Role() {
  const showNavRoutes = [
    "/",
    "/about",
    "/studentscourse",
    "/course",
    "/account",
    "/chats"
  ];
  const currentPath = location.pathname.toLowerCase();
  const showNav = showNavRoutes.includes(currentPath);
  return (
    <div>
      {showNav ?<App/>:<Page/>}
        
        
    </div>
  )
}

export default Role