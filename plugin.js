import {
  renderHome
} from "./ui/home.js";


window.RochePlugin.register({

  id: "bi-an-hui-lang",

  name: "彼岸回廊",

  version: "1.0.0",


  apps: [

    {

      id: "bi-an-hui-lang-home",

      name: "彼岸回廊",

      icon: "extension",


      async mount(container, roche) {


        async function open(page){


          if(page === "home"){

            await renderHome(
              container,
              roche,
              open
            );

          }


          if(page === "dungeon"){

            container.innerHTML = `

            <div style="
            height:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            color:#d5b06a;
            background:#111;
            font-size:30px;
            ">

            副本系统开发中

            </div>

            `;

          }


          if(page === "companion"){

            container.innerHTML = `

            <div style="
            height:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            color:#d5b06a;
            background:#111;
            font-size:30px;
            ">

            同行系统开发中

            </div>

            `;

          }


          if(page === "archive"){

            container.innerHTML = `

            <div style="
            height:100%;
            display:flex;
            align-items:center;
            justify-content:center;
            color:#d5b06a;
            background:#111;
            font-size:30px;
            ">

            档案系统开发中

            </div>

            `;

          }


        }



        await open("home");


      },


      async unmount(container){

        container.replaceChildren();

      }


    }


  ]


});
