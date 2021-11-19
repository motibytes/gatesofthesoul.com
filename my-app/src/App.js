import logo from './logoforicons.jpg';
import apple2 from './apple2.svg';
import amazon5 from './amazonh5.png';
import './App.css';

import Share from './Share.js';
function App() {
  return (
    <div className="App">

      <header className="App-header">
      TheGatesoftheSoulOpen.com
      <img src={logo} className="App-logo" alt="logo" />

      Spiritual Warfare: Gates of the Soul


      </header>
      <div id="main">
                
        <p id="readthescroll">
        Read the scroll. Overcome through Yeshua. Remember His Word.
        </p>
      </div>  
      <div id="links"> 
        <a id="a_amazon" href="https://www.amazon.com/Spiritual-Warfare-Gates-Zerubbabel-Shaliach-ebook/dp/B09KN8754N">
          <img src={amazon5} id="amazon" alt="logo" 
          />
        </a>
        <br />
        <a id="a_apple" href="https://books.apple.com/us/book/spiritual-warfare/id1593748681">
          <img src={apple2} id="apple" alt="logo" />
        </a>
        <br /> 
        <a id="a_google" href='https://play.google.com/store/books/details/Zerubbabel_Shaliach_Spiritual_Warfare?id=eN5KEAAAQBAJ'><img id="icons" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>

      </div>
      <br /> 
      <Share />
      <br /> 
      <div id="about"> 
        <h1> About the Author: </h1>
        <p id="about"> A descendant of Judah, Zerubbabel Shaliach has been saved by the shed blood of the only Messiah, Yeshua HaMashiach, Jesus Christ.</p>
      </div>
      <div id="footer"> 
        <p> Published by © ZShaliach LLC 2021. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default App;
