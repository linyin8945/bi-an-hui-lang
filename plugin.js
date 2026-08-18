window.RochePlugin.register({

  id: "bi-an-hui-lang",

  name: "彼岸回廊",

  version: "1.0.2",


  apps: [

    {

      id: "bi-an-hui-lang-home",

      name: "彼岸回廊",

      icon: "extension",


      async mount(container, roche) {


        let selectedCharacter = null;


        async function loadCharacters(){


          try {

            const chars = await roche.character.list();

            return Array.isArray(chars) ? chars : [];


          } catch(e){

            console.error(e);

            return [];

          }

        }



        async function saveCharacter(char){


          selectedCharacter = char;


          await roche.storage.set(
            "selected-companion",
            {
              id: char.id,
              name: char.name || char.handle || ""
            }
          );


          render();

        }




        async function render(){


          const characters = await loadCharacters();



          container.innerHTML = `


          <div class="bi-app">


            <header class="bi-header">

              <div>
              ◀
              </div>


              <div class="bi-title">

                <strong>
                彼岸回廊
                </strong>

                <span>
                无限轮回系统
                </span>

              </div>


              <div>
              🔔
              </div>


            </header>




            <main>


              <section class="bi-paper">


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



              </section>





              <section class="bi-companion">


              <h3>
              选择同行角色
              </h3>



              ${
                characters.length

                ?

                characters.map(char=>{


                  const name =
                  char.handle ||
                  char.name ||
                  "未知角色";


                  const bio =
                  char.bio ||
                  char.description ||
                  "";


                  return `


                  <div class="bi-character"
                  data-id="${char.id}">


                    <div class="avatar">

                    ${
                    char.avatar
                    ?
                    `< img src="${char.avatar}">`
                    :
                    "?"
                    }

                    </div>


                    <div>

                    <b>${name}</b>

                    <p>${bio}</p >

                    </div>


                  </div>


                  `;


                }).join("")


                :

                "<p>暂无角色</p >"

              }



              </section>





              <button id="enter">

              🚪 进入回廊

              </button>




            </main>




          </div>






          <style>


          .bi-app{

            height:100%;
            background:#111;
            color:#d5b06a;
            font-family:serif;
            overflow:auto;

          }



          .bi-header{

            height:70px;
            display:flex;
            justify-content:space-around;
            align-items:center;
            border-bottom:1px solid #6d542b;

          }



          .bi-title{

            text-align:center;

          }


          .bi-title span{

            display:block;
            font-size:12px;

          }




          main{

            padding:20px;

          }



          .bi-paper{

            background:#d8c49a;
            color:#24180d;
            padding:20px;
            margin-bottom:20px;

          }





          .bi-character{

            display:flex;
            gap:15px;
            padding:15px;
            margin:10px 0;
            background:#1d1d1d;
            border:1px solid #6d542b;
            cursor:pointer;

          }



          .avatar img{

            width:50px;
            height:50px;
            border-radius:50%;

          }



          button{

            width:100%;
            padding:15px;
            background:#5b1717;
            color:#f0d58b;
            border:1px solid #c49a4a;

          }



          </style>


          `;




          container
          .querySelectorAll(".bi-character")
          .forEach(el=>{


            el.onclick=()=>{


              const id=el.dataset.id;


              const char=
              characters.find(c=>c.id===id);


              saveCharacter(char);


            };


          });



          container
          .querySelector("#enter")
          .onclick=async()=>{


            const current =
            await roche.storage.get(
              "selected-companion"
            );


            roche.ui.toast(
              current
              ?
              "同行者："+current.name
              :
              "请先选择同行角色"
            );


          };




        }



        render();



      },



      async unmount(container){

        container.replaceChildren();

      }


    }


  ]

});
