import React from 'react'
import img3 from "../images/img3.jpg"
const Home = () => {
  return (
    <div>
      <section id="home">
        <img src={img3} alt="" />

        <div className="info">
          <h2>Eat Healthy Stay Fit</h2>
          <p className="desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            deserunt porro deleniti rerum illum voluptas eius magnam, at ipsa
            maiores unde id rem nobis sapiente quas dolor pariatur nihil
            officia. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dolores, omnis. Illum magni harum ducimus temporibus animi
            consequatur suscipit dolor soluta!
          </p>
          <button className="btn1">Book A Table</button>
        </div>
      </section>
    </div>
  );
}

export default Home