import React, { useState, useEffect } from 'react';
import './App.css';

const About = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Welcome to our website!', 'We offer amazing services.', 'Contact us for more info.'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      <section className="info-section">
        <h1>About Us</h1>
        <p>
          This is some information about our website.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quas adipisci perferendis, optio facilis consectetur possimus laudantium, unde eveniet amet a maiores. Tempora maxime accusamus earum, animi architecto vel dolorem.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iste quo culpa tempore eaque nisi cum labore dolor, modi nostrum alias. Provident obcaecati est optio exercitationem ea quibusdam saepe. Voluptatem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas magni ipsum. Adipisci neque praesentium magni rem eligendi. Odit dicta facilis consectetur quisquam dolor accusantium natus repellat quia dignissimos voluptatem. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem odio unde sint magnam! Est qui quam id, eius veniam, ducimus fugiat corporis unde animi beatae quasi quisquam, cum placeat laudantium. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni similique molestiae maxime doloribus ut beatae asperiores, odit nihil. Natus libero voluptatibus, veritatis ipsa a vitae perferendis! Veniam dolor voluptas reiciendis? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque repudiandae eum quia eius eveniet aperiam rerum dolorem expedita mollitia maiores doloribus odit ea dolore, laudantium similique natus repellat consectetur neque! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt necessitatibus magni temporibus unde sed nobis est laudantium assumenda sint, quo fuga ex enim deserunt ducimus, dolorem, nulla tempora quis ad.
        </p>
      </section>
      <center><h4 style={{ color: 'red' }}>          {texts[textIndex]}
      </h4>
      </center>
      <div div className="carousel">
        <div className="carousel-text">
        </div>
        <div className="content-container">
          <img src="https://tse2.mm.bing.net/th?id=OIP.zSwsz6hB6loZTz81jr508gHaE8&pid=Api&P=0&h=220" alt="Sample" className="carousel-image" />

          <div className="left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint soluta quibusdam sit dolore iusto, ex voluptatibus repellendus odit at dicta voluptate error, doloremque est aperiam a asperiores! Illo, corrupti nihil! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus labore voluptatum necessitatibus laudantium voluptatem tempora! Asperiores iusto cum maxime reiciendis optio neque ex. Nostrum numquam ea impedit! Repellendus, non quisquam!
          </div>
          <div className="separator"></div>
          <div className="right">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, fugit culpa, dicta facilis aspernatur nisi iure natus vitae alias reiciendis cum repudiandae ipsum eos? Nam veritatis itaque eum obcaecati voluptatibus! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, voluptates optio magnam reprehenderit provident fuga necessitatibus assumenda! Eaque laborum, ipsam minima magni ea hic dolores consequuntur, nam ab perferendis adipisci.</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default About;

