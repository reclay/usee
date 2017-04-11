var gulp=require('gulp');
var concat=require("gulp-concat");

var componentDir="component/";
var contentDir="component/content/";
var bodyDir="component/body/";
var component=["head","body","header","content","footer","script"];
var content=["about","consulting","contact","customers","index","job","news-report","products"];

gulp.task("build",function () {
  for(var i=0;i<content.length;i++){
    var tmp=component.map(function (item,index) {
      if(index===1||index===3){
        return item;
      }
      return componentDir+item+".html";
    });
    tmp[1]=bodyDir+content[i]+".html";
    tmp[3]=contentDir+content[i]+".html";
    gulp.src(tmp)
        .pipe(concat(content[i]+".html"))
        .pipe(gulp.dest("./"))
  }
});

gulp.task('default',function () {
  gulp.run('build');
});
