window.RochePlugin.register({

  id: "bi-an-hui-lang",

  name: "彼岸回廊",

  version: "1.0.3.3",

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
◁
</button>



<div class="bah-title">

彼岸回廊

<span>
无限轮回系统
</span>

</div>



<button class="bah-bell">
◯
</button>


</header>





<main class="bah-main">

${renderPage()}

</main>





<nav class="bah-nav">


<button data-page="home">

<i>灯</i>

<span>回</span>

</button>



<button data-page="door">

<i>门</i>

<span>门</span>

</button>



<button data-page="bond">

<i>契</i>

<span>缘</span>

</button>



<button data-page="record">

<i>卷</i>

<span>卷</span>

</button>


</nav>





<style>


.bah-app{


width:100%;

height:100%;


display:flex;

flex-direction:column;


overflow:hidden;


color:#d7c39a;


font-family:
"Noto Serif SC",
serif;



background:


radial-gradient(
circle at 50% 15%,
rgba(120,35,25,.25),
transparent 35%
),


linear-gradient(
180deg,
#17100c,
#080605
);



position:relative;


}




.bah-app::before{


content:"";


position:absolute;


inset:0;


background:

repeating-linear-gradient(
90deg,
rgba(255,255,255,.018) 0,
transparent 3px,
transparent 8px
);



pointer-events:none;


}




.bah-header{


height:78px;


display:flex;


align-items:center;


justify-content:space-between;


padding:0 18px;



background:


linear-gradient(
180deg,
#352116,
#17100c
);



border-bottom:

2px solid #7b512d;



box-shadow:

0 8px 20px rgba(0,0,0,.7);


z-index:2;


}





.bah-header button{


background:none;


border:0;


color:#d6b36a;


font-size:26px;


}




.bah-title{


text-align:center;


font-size:22px;


letter-spacing:6px;


color:#e1c37b;


}



.bah-title span{


display:block;


font-size:11px;


letter-spacing:3px;


margin-top:5px;


color:#a88b55;


}







.bah-main{


flex:1;


overflow:auto;


padding:24px;


z-index:1;


}







.bah-paper{


position:relative;


padding:28px;


background:


linear-gradient(
135deg,
#d8c58e,
#b99a5d
);



color:#302015;



border:

1px solid #76502d;



box-shadow:

0 15px 35px rgba(0,0,0,.8);


}



.bah-paper::before{


content:"";


position:absolute;


inset:10px;


border:

1px solid rgba(90,40,20,.35);


pointer-events:none;


}




.bah-paper h2{


margin-top:0;


font-size:22px;


color:#54251b;


}





.bah-seal{


display:inline-block;


margin-top:20px;


padding:8px 14px;


border:

2px solid #8c2620;



color:#8c2620;


transform:rotate(-8deg);


}




.bah-door{


margin-top:45px;


height:210px;



display:flex;


align-items:center;


justify-content:center;


flex-direction:column;



background:


linear-gradient(
90deg,
#241209,
#090605
);



border:

3px solid #80552c;



box-shadow:

0 20px 40px black;


color:#d8b56b;


font-size:24px;


}




.bah-nav{


height:76px;


display:flex;


justify-content:space-around;


align-items:center;



background:


linear-gradient(
180deg,
#2a180c,
#130b07
);



border-top:

2px solid #76502d;


}



.bah-nav button{


background:none;


border:0;


color:#d8c39a;


font-family:inherit;


display:flex;


flex-direction:column;


align-items:center;


}




.bah-nav i{


font-style:normal;


font-size:12px;


color:#9c7745;


}



.bah-nav span{


font-size:22px;


color:#e0c17a;


}


</style>


</div>

`;



          bindEvents();

        }
        function renderPage(){


          if(currentPage==="home"){


            return `


            <div class="bah-paper">


              <h2>
              轮回者档案
              </h2>


              <p>
              轮回者：未登记
              </p>


              <p>
              编号：等待生成
              </p>


              <p>
              状态：新人轮回者
              </p>


              <p>
              探索世界：0 / 无限
              </p>



              <div class="bah-seal">
              初入回廊
              </div>



            </div>



            <div class="bah-door">


            旧木门


            <br>


            推开回廊之门



            </div>


            `;


          }





          if(currentPage==="door"){


            return `


            <div class="bah-paper">


            <h2>
            副本入口
            </h2>


            <p>
            当前没有开启的轮回。
            </p>


            <p>
            等待轮回系统生成新的世界。
            </p>



            <button class="old-btn">

            开启新的回廊

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
            暂无同行者。
            </p>


            <p>
            后续连接角色系统。
            </p>


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
            副本记录：
            暂无
            </p>


            <p>
            世界书：
            未开启
            </p>


            <p>
            记忆：
            空白
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


            back.onclick=()=>{


              roche.ui.closeApp();


            };


          }





          const bell =
          container.querySelector(".bah-bell");



          if(bell){


            bell.onclick=()=>{


              roche.ui.toast(
              "铜铃暂无回应"
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
