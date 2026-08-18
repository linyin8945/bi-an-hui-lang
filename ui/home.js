export async function renderHome(container, roche, open) {


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




<div 
class="bi-door"
id="enter-dungeon">


🚪

<br>

进入回廊


<span>
探索未知世界
</span>


</div>



</main>






<nav class="bi-bottom">


<div class="bi-nav-item" data-page="home">

回

<small>
大厅
</small>

</div>


<div class="bi-nav-item" data-page="dungeon">

门

<small>
副本
</small>

</div>



<div class="bi-nav-item" data-page="companion">

缘

<small>
同行
</small>

</div>



<div class="bi-nav-item" data-page="archive">

卷

<small>
档案
</small>

</div>



</nav>


</div>


`;



container
.querySelector("#enter-dungeon")
.onclick = ()=>{

open("dungeon");

};



container
.querySelectorAll(".bi-nav-item")
.forEach(btn=>{

btn.onclick=()=>{

open(btn.dataset.page);

};

});


}
