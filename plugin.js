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


        container.innerHTML = `

        <div class="bi-test-home">

          <div class="bi-title">
            彼岸回廊
          </div>

          <div class="bi-subtitle">
            无限轮回系统
          </div>


        </div>


        <style>

        .bi-test-home {

          height:100%;

          display:flex;

          flex-direction:column;

          justify-content:center;

          align-items:center;

          background:#111;

          color:#d5b06a;

          font-family:serif;

          gap:20px;

        }


        .bi-title {

          font-size:40px;

          letter-spacing:8px;

        }


        .bi-subtitle {

          font-size:18px;

          color:#a88b55;

        }


        </style>

        `;


      },


      async unmount(container) {

        container.replaceChildren();

      }

    }

  ]

});
