import React from "react";
import img2 from "../images/img2.jpg";

const About = () => {
  return (
    <>
      <section id="about">
        <h2>About Us</h2>

        <div className="about">
          <aside className="aboutimg">
            <img src={img2} alt="" width="400px" height="400px" />
          </aside>

          <aside className="aboutdesc">
            <h1 style={{ color: "#2BAE66FF" }}>Some Details</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A et
              inventore in, quibusdam fugiat tenetur porro voluptatem odio iure
              nemo? Corporis fugit obcaecati blanditiis nostrum corrupti ipsam
              reprehenderit, vitae rem. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Totam consequuntur dicta voluptatum temporibus a
              soluta sequi ratione, iure, omnis eligendi tempora sunt nihil!
              Fuga molestias sapiente alias, harum labore nisi? Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Corporis autem
              laudantium possimus esse quo. Eos sint sit sequi ex. Accusamus
              similique quis labore nobis possimus. Maiores quis illum nemo
              dolor. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Illo quidem quaerat natus quia fugit consequatur. Ab aliquam, amet
              illum ad quis eos quae, quas voluptas, dolorem possimus
              necessitatibus! Error, nihil!
            </p>
          </aside>
        </div>
      </section>
    </>
  );
};

export default About;
