window.onload=function()
{	
	
	var bLi=document.getElementById('nav').getElementsByTagName('li');
						for(var j=0;j<bLi.length;j++)
							{
								bLi[j].onmouseover=function(){
									this.className="current"
									
								};
								bLi[j].onmouseout=function(){
									this.className=""
									
								};
									
							}
							
							
							
    var aSta=document.getElementById('star');  
    var aLi=document.getElementById('star').getElementsByTagName('li');  
    var aP =document.getElementById('star').getElementsByTagName('p')[0];  
    var aSp=document.getElementById('star').getElementsByTagName('span')[1];  
    var oUl=document.getElementById('star').getElementsByTagName('ul')[0];  
    var i=iStar=iScore=0;  
	var aData=["很low|你这是设计的什么东西呀，非常不满",  
                "可以忍受|毕竟过得去，看你是新手吧，不满意",  
                "一般|一般般吧，没有什么新意",  
                "满意|还不错，可以设计自己的博客了，还是挺满意的",  
                "非常满意|有技术含量，希望您能够有越来越多的作品，非常满意"]  
    for(i=0;i<aLi.length;i++)  
    {  
        aLi[i].index=i+1;  
        aLi[i].onmouseover=function()  
        {   
			fnPoint(this.index);		
            aP.style.display='block';  
            aP.innerHTML="<em><b>"+(this.index)+"</b>分 "+aData[this.index-1].match(/(.+)\|/)[1]+"</em>" + aData[this.index-1].match(/\|(.+)/)[1]; 
            aP.style.left = oUl.offsetLeft + this.index * this.offsetWidth - 104 + "px";   
              
        }  
        aLi[i].onmouseout=function()  
        {  
			fnPoint(); 
            aP.style.display='none';  
              
              
        }  
        aLi[i].onclick=function()  
        {  
			iStar = this.index;
			aP.style.display = "none";
            aSp.innerHTML="<strong>"+(this.index)+" 分</strong> ("+aData[this.index-1].match(/\|(.+)/)[1] + ")";  
  
              
        } 
		function fnPoint(iArg)
		{
			//分数赋值
			iScore = iArg || iStar;
			for (i = 0; i < aLi.length; i++) aLi[i].className = i < iScore? "li_hover" : "";	
		}

    } 

	
}
