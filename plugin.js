window.RochePlugin.register({

  id: "bi-an-hui-lang",

  name: "彼岸回廊",

  version: "1.0.3.2",

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


<style>

.bah-app {

  width:100%;
  height:100%;

  background:
  radial-gradient(
    circle at top,
    rgba(120,40,30,.18),
    transparent 45%
  ),
  #0c0908;

  color:#d8c9a3;

  font-family:
  "Noto Serif SC",
  "Songti SC",
  serif;

  display:flex;
  flex-direction:column;

  overflow:hidden;

}



.bah-header {

  height:72px;

  flex-shrink:0;

  display:flex;

  align-items:center;

  justify-content:space-between;

  padding:0 18px;


  background:
  rgba(12,9,8,.95);


  border-bottom:
  1px solid #8c6239;

}



.bah-header button {

  background:none;

  border:none;

  color:#e3c27a;

  font-size:24px;

}



.bah-title {

  text-align:center;

  letter-spacing:5px;

  color:#e3c27a;

  font-size:21px;

}



.bah-title small {

  display:block;

  margin-top:4px;

  font-size:11px;

  color:#bda36d;

  letter-spacing:2px;

}



.bah-main {

  flex:1;

  overflow:auto;

  padding:20px;

}



.bah-paper {


  background:

  linear-gradient(
  135deg,
  #d8c28d,
  #a88a55
  );


  color:#28180b;


  padding:24px;


  border:

  1px solid #8c6239;


  box-shadow:

  0 15px 35px rgba(0,0,0,.7);


}



.bah-paper h2 {

  margin-top:0;

  color:#4b2416;

}



.bah-door {


  margin-top:45px;


  height:190px;


  display:flex;


  flex-direction:column;


  align-items:center;


  justify-content:center;



  background:


  linear-gradient(
  90deg,
  #351b0e,
  #120806
  );


  border:

  2px solid #8c6239;


  color:#e3c27a;


  font-size:22px;


  box-shadow:

  0 15px 40px black;


}



.bah-nav {


  height:70px;


  flex-shrink:0;


  display:flex;


  justify-content:space-around;


  align-items:center;



  background:


  #25150c;



  border-top:


  1px solid #8c6239;


}



.bah-nav button {


  background:none;


  border:none;


  color:#d8c9a3;


  font-family:inherit;


}



.bah-nav span {


  display:block;


  font-size:22px;


  color:#e3c27a;


}



.bah-nav small {


  font-size:11px;


}



.old-btn {


  margin-top:20px;


  padding:12px 28px;


  background:#5b1717;


  border:1px solid #a98245;


  color:#e3c27a;


  font-family:inherit;


}


</style>



<header class="bah-header">


<button class="bah-back">
←
</button>


<div class="bah-title">

彼岸回廊

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



`;



          bindEvents();

        }
        function renderPage(){


          if(currentPage === "home"){


            return `


            <div class="bah-paper">


              <h2>
              轮回者档案
              </h2>


              <p>
              轮回者：读取中
              </p>


              <p>
              编号：BH-0001
              </p>


              <p>
              状态：新人轮回者
              </p>


              <p>
              探索世界：0 / 无限
              </p>


              <div style="
              margin-top:20px;
              color:#8b2929;
              ">
              【初入回廊】
              </div>


            </div>


            <div class="bah-door">


              木门


              <br>


              推开回廊之门


            </div>


            `;


          }



          if(currentPage === "door"){


            return `


            <div class="bah-paper">


              <h2>
              副本入口
              </h2>


              <p>
              当前没有开启的轮回。
              </p>


              <p>
              等待新的回廊生成。
              </p>



              <button class="old-btn">

              开启新的副本

              </button>


            </div>


            `;


          }




          if(currentPage === "bond"){


            return `


            <div class="bah-paper">


              <h2>
              同行契约
              </h2>


              <p>
              尚未选择同行者。
              </p>


              <p>
              后续将连接 Roche 角色系统。
              </p>


            </div>


            `;


          }




          if(currentPage === "record"){


            return `


            <div class="bah-paper">


              <h2>
              轮回档案
              </h2>


              <p>
              尚未留下记录。
              </p>


              <p>
              副本经历、线索、世界记录将在这里保存。
              </p>


            </div>


            `;


          }



          return "";

        }






        function bindEvents(){


          const back =
          container.querySelector(".bah-back");



          if(back){


            back.onclick = ()=>{


              roche.ui.closeApp();


            };


          }




          const bell =
          container.querySelector(".bah-bell");



          if(bell){


            bell.onclick = ()=>{


              roche.ui.toast(
              "铜铃暂未响应"
              );


            };


          }




          container
          .querySelectorAll(".bah-nav button")
          .forEach(button=>{


            button.onclick = ()=>{


              currentPage =
              button.dataset.page;



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
