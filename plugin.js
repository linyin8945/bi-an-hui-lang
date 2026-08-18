window.RochePlugin.register({

  id: "bi-an-hui-lang",

  name: "彼岸回廊",

  version: "1.0.1",

  apps: [

    {

      id: "bi-an-hui-lang-home",

      name: "彼岸回廊",

      icon: "extension",

      async mount(container, roche) {

        container.innerHTML = `

        <div style="
        height:100%;
        background:#111;
        color:#d5b06a;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        font-family:serif;
        ">

        <h1>
        彼岸回廊
        </h1>

        <p>
        无限轮回系统
        </p>

        </div>

        `;

      },


      async unmount(container){

        container.replaceChildren();

      }

    }

  ]

});
