var s1,s2,s3
function setup() {
  createCanvas(400,400);
  s1=new Student("Ali",13,8)
  s2=new Student ("Jack", 12, 7)
s3=new Student ("Will", 14, 9)
}

function draw() 
{
  background(30);
  s1.display()
  s2.display()
  s3.display()
}