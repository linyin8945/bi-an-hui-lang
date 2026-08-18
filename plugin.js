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

        <div class="bi-home">


        <header class="bi-header">

        <div class="bi-copper-button">
        ◀
        </div>


        <div class="bi-head-title">

        <div>
        彼岸回廊
        </div>

        <span>
        无限轮回系统
        </span>

        </div>


        <div class="bi-copper-button">
        🔔
        </div>

        </header>



        <main class="bi-main">


        <div class="bi-scroll">


        <div class="bi-seal">
        初入
        </div>


        <h2>
        轮回者档案
        </h2>


        <p>
        轮回者：温池
        </p>

        <p>
        编号：NO.0001
        </p>

        <p>
        状态：新人轮回者
        </p>

        <p>
        探索世界：0 / 无限
        </p>


        </div>



        <div class="bi-door">

        🚪

        <br>

        进入回廊

        <span>
        探索未知世界
        </span>

        </div>



        </main>




        <nav class="bi-bottom">


        <div class="bi-nav-item">
        回
        <small>
        大厅
        </small>
        </div>


        <div class="bi-nav-item">
        门
        <small>
        副本
        </small>
        </div>


        <div class="bi-nav-item">
        缘
        <small>
        同行
        </small>
        </div>


        <div class="bi-nav-item">
        卷
        <small>
        档案
        </small>
        </div>


        </nav>



        </div>


        <style>

        .bi-home{
          height:100%;
          background:#111;
          color:#d5b06a;
          display:flex;
          flex-direction:column;
          font-family:serif;
        }


        .bi-header{
          height:70px;
          display:flex;
          justify-content:space-around;
          align-items:center;
          border-bottom:1px solid #6d542b;
        }


        .bi-head-title{
          text-align:center;
          font-size:24px;
        }


        .bi-head-title span{
          font-size:12px;
          color:#99805a;
        }


        .bi-main{
          flex:1;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          gap:40px;
        }


        .bi-scroll{
          background:#d8c49a;
          color:#2b2015;
          padding:25px;
          width:260px;
          border-radius:5px;
        }


        .bi-seal{
          color:#8b1d1d;
          border:2px solid #8b1d1d;
          display:inline-block;
          padding:5px;
        }


        .bi-door{
          font-size:30px;
          text-align:center;
        }


        .bi-door span{
          display:block;
          font-size:14px;
        }


        .bi-bottom{
          height:70px;
          display:flex;
          justify-content:space-around;
          align-items:center;
          border-top:1px solid #6d542b;
        }


        .bi-nav-item{
          text-align:center;
        }


        small{
          display:block;
        }


        </style>

        `;


      },


      async unmount(container){

        container.replaceChildren();

      }


    }

  ]

});
