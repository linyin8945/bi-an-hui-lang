window.RochePlugin.register({

  id: "bi-an-hui-lang",

  name: "彼岸回廊",

  version: "1.0.3.1",


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

<span>
回
</span>

<small>
大厅
</small>

</button>



<button data-page="door">

<span>
门
</span>

<small>
副本
</small>

</button>



<button data-page="bond">

<span>
缘
</span>

<small>
同行
</small>

</button>



<button data-page="record">

<span>
卷
</span>

<small>
档案
</small>

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
rgba(110,60,30,.18),
transparent 40%
),


#0c0908;



color:#d8c9a3;


font-family:


"Noto Serif SC",
"Songti SC",
serif;



display:flex;

flex-direction:column;


position:relative;


overflow:hidden;


}






.bah-app::before{


content:"";


position:absolute;

inset:0;


background:


radial-gradient(
circle,
rgba(255,255,255,.04) 1px,
transparent 1px
);


background-size:12px 12px;


pointer-events:none;


}





.bah-header{


height:72px;


display:flex;


align-items:center;


justify-content:space-between;


padding:0 18px;


background:


rgba(12,9,8,.92);



border-bottom:


1px solid #8c6239;


z-index:2;


}





.bah-header button{


background:none;


border:none;


color:#e3c27a;


font-size:24px;


}





.bah-title{


text-align:center;


letter-spacing:5px;


font-size:21px;


color:#e3c27a;


}




.bah-title small{


display:block;


font-size:11px;


letter-spacing:2px;


color:#bda36d;


margin-top:5px;


}






.bah-main{


flex:1;


overflow:auto;


padding:22px;


z-index:1;


}






.bah-paper{


background:


linear-gradient(
135deg,
#d4bd87,
#a98b55
);



color:#24160b;


padding:25px;


border:


1px solid #8c6239;


box-shadow:


0 12px 30px rgba(0,0,0,.6);


position:relative;


}





.bah-paper::after{


content:"";


position:absolute;


inset:8px;


border:


1px solid rgba(80,40,10,.25);


pointer-events:none;


}






.bah-door{


margin-top:45px;


height:190px;


border:


2px solid #8c6239;



background:


linear-gradient(
90deg,
#2a160c,
#100806
);



display:flex;


align-items:center;


justify-content:center;



color:#d8b56a;


font-size:24px;



box-shadow:


0 15px 40px #000;


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
                轮回者：等待读取
                </p >


                <p>
                编号：BH-0001
                </p >


                <p>
                状态：新人轮回者
                </p >


                <p>
                探索世界：0 / 无限
                </p >


                <div style="
                margin-top:20px;
                color:#8b2929;
                font-size:14px;
                ">
                【初入回廊】
                </div>


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
            当前轮回：
            </p >


            <p>
            暂无副本记录
            </p >


            <button class="old-btn">

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
            等待召唤同行者
            </p >


            <p>
            后续接入 Roche 角色系统
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
            尚未留下轮回记录
            </p >


            </div>


            `;


          }


        }






        function bindEvents(){



          const back =
          container.querySelector(".bah-back");



          if(back){

            back.onclick=()=>{

              roche.ui.closeApp();

            };

          }





          const bell =
          container.querySelector(".bah-bell");



          if(bell){

            bell.onclick=()=>{


              roche.ui.toast(
              "铜铃未响应"
              );


            };


          }






          container
          .querySelectorAll(".bah-nav button")
          .forEach(btn=>{


            btn.onclick=()=>{


              currentPage =
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
