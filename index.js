/*
1.create an image tag and add a default url or file path
2. use  setInterval function () to recall the image source with different values after 5 Seconds
3 create an input box which takes input as time interval after which nextimage is to be shown
4. create 2 bottons with sign < and > to back or forward the image as button is clicked



*/
var slider = {
  sourcePath: ['a.jpg','b.jpg','c.jpg','d.jpg','e.jpg','f.jpg','g.jpg','h.jpg','i.jpg','j.jpg','k.jpg','l.jpg','m.jpg'],
  defaultsSourcePath: 'a.jpg',
  pathPointer: 0,
  pauseTime: 5000,

  init: function (sliderContainer){
      let imageDisplayNode = document.createElement('div');
      sliderContainer.appendChild(imageDisplayNode);

      let imageNode = document.createElement('img');
      imageNode.id = "IMAGE";
      let sP = this.sourcePath[this.pathPointer];
      imageNode.src = sP;
      imageNode.width = '800';
      imageNode.heigth = '500';
      imageDisplayNode.appendChild(imageNode);
      this.imageNode = imageNode;

      let buttonAndInputText = document.createElement('div');
      sliderContainer.appendChild(buttonAndInputText);

      let backward = document.createElement('button');
      backward.innerText = "<";
      let backwardOnclick = () => {
        this.backward();
      };
      backward.onclick = backwardOnclick;
      buttonAndInputText.appendChild(backward);

      let intervalInputBox = document.createElement('input');
      intervalInputBox.type = 'text';
      intervalInputBox.id = 'intervalInput';
      intervalInputBox.value = "5000";
      buttonAndInputText.appendChild(intervalInputBox);
      this.intervalInputBox = intervalInputBox ;

      let okButton = document.createElement("button");
      okButton.innerText = "o.k";
      okButton.onclick = () => {
        this.pauseTime = this.intervalInputBox.value;
        this.setTimer()
      };
      buttonAndInputText.appendChild(okButton);

      let forward = document.createElement('button');
      forward.innerText = ">";
      let forwardOnClick = () => {
        this.forward();
      };
      forward.onclick = forwardOnClick;
      buttonAndInputText.appendChild(forward);

      this.setTimer();
  },

  setTimer: function() {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {this.showImage();}, this.pauseTime);
  },


  showImage: function() {
      if (this.pathPointer ===( (this.sourcePath.length)-1))  this.pathPointer = 0 ;
      if(this.pathPointer >= 0 || this.pathPointer < this.sourcePath.lenght-1)  this.pathPointer++;
       this.imageNode.src = this.sourcePath[this.pathPointer];
  } ,

  forward: function() {
    this.showImage();
  },

  backward: function() {
    if( this.pathPointer > 0 || this.pathPointer <= (this.sourcePath.lenght)-1 ) this.pathPointer--;
    else if (this.pathPointer === 0) this.pathPointer = (this.sourcePath.length)-1;
    this.imageNode.src = this.sourcePath[this.pathPointer];
  }

}
