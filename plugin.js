window.RochePlugin.register({

  id: "bi-an-hui-lang",

  name: "彼岸回廊",

  version: "1.0.3",


  apps: [

    {

      id: "bi-an-hui-lang-home",

      name: "彼岸回廊",

      icon: "extension",


      async mount(container, roche) {


        let currentPage = "home";


        function render(){


          container.innerHTML = `

          <div class="bah-app">


            <header class="bah-header">


              <button class="bah-back">
                ←
              </button>



              <div class="bah-title">

                <div>
                  彼岸回廊
                </div>

                <small>
                  无限轮回系统
                </small>

              </div>



              <button class="bah-bell">
                🔔
              </button>


            </header>





            <main class="bah-main">

              ${renderPage()}

            </main>





            <nav class="bah-nav">


              <button data-page="home">

                <span>回</span>
                <small>大厅</small>

              </button>



              <button data-page="door">

                <span>门</span>
                <small>副本</small>

              </button>



              <button data-page="bond">

                <span>缘</span>
                <small>同行</small>

              </button>



              <button data-page="record">

                <span>卷</span>
                <small>档案</small>

              </button>


            </nav>



          </div>




          <style>


          .bah-app{

            height:100%;
            width:100%;
            background:
            radial-gradient(
            circle at top,
            #292015,
            #090909 70%
            );

            color:#d8b56a;

            display:flex;
            flex-direction:column;

            font-family:
            "Noto Serif SC",
            serif;

          }





          .bah-header{

            height:70px;

            display:flex;

            align-items:center;

            justify-content:space-between;

            padding:0 18px;

            border-bottom:

            1px solid rgba(180,130,50,.5);

            background:

            rgba(20,15,10,.85);

          }





          .bah-header button{

            background:none;

            border:none;

            color:#d8b56a;

            font-size:22px;

          }




          .bah-title{

            text-align:center;

            font-size:20px;

            letter-spacing:4px;

          }



          .bah-title small{

            display:block;

            font-size:11px;

            opacity:.7;

            letter-spacing:2px;

          }





          .bah-main{

            flex:1;

            overflow:auto;

            padding:20px;

          }






          .bah-nav{

            height:72px;

            display:flex;

            justify-content:space-around;

            align-items:center;

            border-top:

            1px solid rgba(180,130,50,.5);

            background:

            linear-gradient(
            90deg,
            #24170d,
            #100b07
            );

          }




          .bah-nav button{

            background:none;

            border:none;

            color:#cba15b;

            display:flex;

            flex-direction:column;

            gap:5px;

            font-family:inherit;

          }





          .bah-nav span{

            font-size:22px;

          }





          .bah-nav small{

            font-size:12px;

          }






          .bah-paper{


            background:

            linear-gradient(
            120deg,
            #d5bd8a,
            #bda36d
            );


            color:#24160b;


            padding:25px;


            border:

            1px solid #8d692c;


            box-shadow:

            0 10px 30px #000;

          }





          .bah-door{


            margin-top:40px;

            height:180px;


            border:

            3px solid #8d692c;


            background:

            linear-gradient(
            90deg,
            #29170b,
            #100805
            );


            display:flex;

            align-items:center;

            justify-content:center;


            font-size:28px;

          }





          </style>


          `;


          bindEvents();

        }





        function renderPage(){


          if(currentPage==="home"){


            return `


            <section>


              <div class="bah-paper">


                <h2>
                轮回者档案
                </h2>


                <p>
                轮回者：温池
                </p >


                <p>
                编号：NO.0001
                </p >


                <p>
                状态：新人轮回者
                </p >


                <p>
                探索世界：0 / 无限
                </p >


              </div>




              <div class="bah-door">

                🚪

                <br>

                推开回廊之门

              </div>


            </section>


            `;


          }



          if(currentPage==="door"){


            return `

            <div class="bah-paper">

            <h2>
            副本入口
            </h2>


            <p>
            当前轮回：暂无
            </p >


            <button>
            开始新的回廊
            </button>


            </div>


            `;


          }



          if(currentPage==="bond"){


            return `


            <div class="bah-paper">


            <h2>
            同行契约
            </h2>


            <p>
            角色系统将在这里展开
            </p >


            </div>


            `;


          }




          if(currentPage==="record"){


            return `


            <div class="bah-paper">


            <h2>
            轮回档案
            </h2>


            <p>
            暂无记录
            </p >


            </div>


            `;


          }


        }





        function bindEvents(){


          container
          .querySelector(".bah-back")
          .onclick=()=>{


            roche.ui.closeApp();


          };




          container
          .querySelector(".bah-bell")
          .onclick=()=>{


            roche.ui.toast(
            "系统设置"
            );


          };



          container
          .querySelectorAll(".bah-nav button")
          .forEach(btn=>{


            btn.onclick=()=>{


              currentPage=
              btn.dataset.page;


              render();


            };


          });


        }





        render();


      },




      async unmount(container){

        container.replaceChildren();

      }


    }


  ]

});
