
import React, { useState, useEffect } from 'react';
import './about.css'
const Act = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ['Welcome to Tajir Ai !', 'We offer amazing services.', 'Contact us for more info.'];
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  return (

    <div class="grid-container">
      <div class="item1">


        <h6 >About our portfolio</h6>
        <br />
        <h1 style={{ color: 'red' }} >        {texts[textIndex]}
        </h1>
        <h1>Hi,I'm Tajir Ai!</h1>
        <br />
        <p> <b>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde reiciendis cum asperiores, ad optio deleniti pariatur veniam expedita sed tempora facilis exercitationem rerum magnam, temporibus, maxime eveniet a quaerat earum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro enim consequuntur repudiandae libero reprehenderit nam molestias in veritatis quia nihil, vitae dolore corrupti blanditiis reiciendis accusamus, suscipit quos.  Voluptatum, eaque!</b> <br /> </p>
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat facilis harum, excepturi debitis ipsam iusto ullam sequi animi ipsa necessitatibus, maxime et delectus possimus. Rem consectetur iusto dolorum aut voluptatem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea vitae architecto impedit eligendi quaerat ullam sequi cum, saepe beatae quo, nisi facere quisquam ipsum odit possimus inventore voluptatem? Impedit, sunt.</p>
        <br />
      </div>

      <div class="item2">
        <img src="https://tse3.mm.bing.net/th?id=OIP.vWlBtx2fatP5K5a0rjUakQHaE8&pid=Api&P=0&h=220" class="img-fluid rounded-start" alt="..." />

      </div>
      <div class="item3">
        <img src="https://tse4.mm.bing.net/th?id=OIP.l4rb5K4jy5iun7Osa_VBagHaE8&pid=Api&P=0&h=220" className="rounded-top-circle hum" alt="..." />
      </div>

      <div class="item4">
        <span class="border border-0">
          <h6>Tell me about your self </h6>
          <br />
          <h1>Connection is everthing</h1>

        </span>
        <hr />

        <span class="border border-0">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat impedit atque rerum optio, necessitatibus autem assumenda velit incidunt dignissimos odit. Aliquid sint nisi provident, similique laborum labore? Temporibus, cum unde. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore cum alias nihil temporibus quaerat, ea vero optio odit provident repudiandae eius doloremque ex, suscipit repellendus tempora maiores aspernatur eaque error! Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ab esse? Itaque iure numquam incidunt, nisi <br /> ab nulla quaerat veritatis saepe tempore soluta! Atque maiores, deserunt quasi necessitatibus vel iure.</p>
          <h6>
            Enter
            <span style={{ fontSize: '30px', verticalAlign: 'middle' }}>
              &#8594; {/* Right Arrow */}
            </span>
          </h6>
        </span>


      </div>


    </div>







  )
}

export default Act;

