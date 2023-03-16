import React, { useState } from 'react'
import Logo from './images/logo_blueprint_cropped-removebg-preview.png';
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [showDropdown, setShowDropdown] = useState("hide")

  const openDropdown = () => {
    setShowDropdown((toggleDropdown) => {
      if (toggleDropdown === "hide")
        return toggleDropdown = "dropdown"
      else return toggleDropdown = "hide"
    })
  }

  return (
    <>
    <header>
      <div className='container'>
        <div className='logoAndTitle'>
          <Link to='/'><img src={Logo} alt='logo_img'></img></Link>
          <Link to='/' style={{ textDecoration: 'none' }}><h1 className='title'>{`<CodeConvert />`}</h1></Link>
        </div>
        <div className='menu'>
          <Link to='/converter'><h3>Convert</h3></Link>
          <Link to='/explain'><h3>Explain</h3></Link>
          <Link to='/comment'><h3>Comment</h3></Link>
        </div>
        <svg onClick={openDropdown} width="50px" height="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M450 132.23H62c-10.42 0-20.216-4.058-27.584-11.426C27.052 113.427 23 103.636 23 93.23v-4c0-10.413 4.052-20.207 11.41-27.578C41.793 54.282 51.587 50.23 62 50.23h388c10.406 0 20.197 4.052 27.568 11.411C484.942 69.015 489 78.811 489 89.23v4c0 10.413-4.058 20.206-11.426 27.574S460.414 132.23 450 132.23zM62 68.23c-5.611 0-10.889 2.184-14.862 6.15C43.184 78.341 41 83.619 41 89.23v4c0 5.604 2.184 10.879 6.149 14.852 3.963 3.963 9.239 6.148 14.851 6.148h388c5.605 0 10.878-2.186 14.846-6.154 3.969-3.969 6.154-9.241 6.154-14.846v-4c0-5.611-2.186-10.887-6.154-14.856-3.967-3.96-9.241-6.144-14.846-6.144H62zM450 297H62c-10.42 0-20.216-4.058-27.584-11.426C27.052 278.197 23 268.406 23 258v-4c0-10.413 4.052-20.207 11.41-27.578C41.793 219.052 51.587 215 62 215h388c10.406 0 20.197 4.052 27.568 11.411C484.942 233.785 489 243.581 489 254v4c0 10.413-4.058 20.206-11.426 27.574S460.414 297 450 297zM62 233c-5.611 0-10.889 2.184-14.862 6.15C43.184 243.111 41 248.389 41 254v4c0 5.604 2.184 10.879 6.149 14.852C51.112 276.814 56.388 279 62 279h388c5.605 0 10.878-2.186 14.846-6.154C468.814 268.877 471 263.605 471 258v-4c0-5.611-2.186-10.887-6.154-14.856C460.879 235.184 455.604 233 450 233H62zM450 461.77H62c-10.406 0-20.201-4.056-27.579-11.42C27.052 442.967 23 433.176 23 422.77v-4c0-10.413 4.052-20.207 11.41-27.578 7.383-7.37 17.177-11.422 27.59-11.422h388c10.406 0 20.197 4.052 27.568 11.411 7.374 7.374 11.432 17.17 11.432 27.589v4c0 10.413-4.058 20.206-11.426 27.574C470.191 457.714 460.4 461.77 450 461.77zM62 397.77c-5.611 0-10.889 2.184-14.862 6.15C43.184 407.881 41 413.159 41 418.77v4c0 5.604 2.184 10.879 6.149 14.852 3.968 3.961 9.246 6.148 14.851 6.148h388c5.517 0 10.931-2.245 14.852-6.16 3.963-3.963 6.148-9.235 6.148-14.84v-4c0-5.611-2.186-10.887-6.154-14.856-3.967-3.96-9.241-6.144-14.846-6.144H62z"/></svg>
        <div className={showDropdown}>
          <Link to='/converter' style={{ textDecoration: 'none' }}><h3 className='dropLink'>Convert</h3></Link>
          <Link to='/explain' style={{ textDecoration: 'none' }} ><h3 className='dropLink'>Explain</h3></Link>
          <Link to='/comment' style={{ textDecoration: 'none' }}><h3 className='dropLink'>Comment</h3></Link>
        </div>
      </div>
      
    </header>
    
    </>
  )
}


// <nav>
    //   <ul className="nav-items">
    //     <li className='logoAndTitle'><img src={Logo} alt='logo_img'></img><h1 className='title'>CodeConvert</h1></li>
    //     <li>
    //       <div className='links'>
    //         <div>Convert</div>
    //         <div>Explain</div>
    //         <div>Comment</div>
    //       </div>
    //     </li>
    //     {/* <li>
    //       <div className='nav-button'>Convert Now</div>
    //     </li> */}
    //   </ul>
    // </nav>