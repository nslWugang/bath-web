  $(function () {
    
    var count = 0;
    
    $(".arrow-right").click(function () {
      count++;
      
      
      if(count == $(".banner li").length){
        count = 0;
      }
      console.log(count);
      //让count渐渐的显示，其他兄弟渐渐的隐藏
      $(".banner li").eq(count).fadeIn().siblings("li").fadeOut();
    });
    
    $(".arrow-left").click(function () {
      count--;
  
      if(count == -1){
        count = $(".banner li").length - 1;
      }
      console.log(count);
      //让count渐渐的显示，其他兄弟渐渐的隐藏
      $(".banner li").eq(count).fadeIn().siblings("li").fadeOut();
    })
    
  });
