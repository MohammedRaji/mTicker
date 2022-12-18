//const { c } = require("tar");

class news {
    constructor(target, options) {
        if (!this || !(this instanceof news)) {
            return new news(target, options);
        }

       this.previous=0;
        this.active = 0;
        this.timername = 'bb';

        this.count = document.querySelector(target).querySelectorAll('ul li').length;
        //this.count=target.querySelectorAll('ul li').length;
        //console.log(target);
        //this.news(target);

        //setInterval(,1000);
       setInterval(() => this.autoPlay(target), 4000);
					

    }
    /*animate(node, prop, end, duration, fn, arg, context) {
        var stepTime = 20;
        var startTime = new Date().getTime();
        var start = parseInt(getComputedStyle(node).getPropertyValue(prop), 10);
        if (typeof end === "string") {
            end = parseInt(end, 10);
        }
    
        function step() {
            // calc how much time has elapsed
            var nextValue, done, portionComplete;
            var timeRunning = new Date().getTime() - startTime;
            if (timeRunning >= duration) {
                nextValue = end;
                done = true;
            } else {
                portionComplete = timeRunning / duration;
                nextValue = ((end - start) * portionComplete) + start;
                done = false;
            }
            // set the next value
            node.style[prop] = nextValue + "px";
            if (!done) {
                setTimeout(step, stepTime);
            } else {
                if (fn) {
                    context = context || window;
                    fn.call(context, node, arg);
                }
            }
        }
        // start the animation
        step();
    }
    
*/
move(elem){
    var top = 0;
   const updateProgressBar = () => {
        elem.style.top = top + 'px'
        top += 1
        if (top< 60){
          requestAnimationFrame(updateProgressBar) 
        }
      }
      
      requestAnimationFrame(updateProgressBar)
}
    css(target, cssTex){
        for( var i = 0; i<target.length ; i++){
            target[i].style.cssText = cssTex;
        }
          // css(target,"color:red;font-size:24px")
    }

/*css (selector){
            selector.style.display = "block";
            selector.style.color = "red";

        
    }
    */

    autoPlay(target){
		this.active++;
        //console.log(this.active)

		if (this.active==this.count)
		this.active=0;
					
		this.changeNews(target);

				
    }

    fadeIn(target) {
            target.classList.add("mystyle");

      }
      
    changeNews(target) {
        
        //var changestate=true;
        var list = document.querySelector(target).querySelectorAll('ul li');
        console.log('active'+this.active);
        console.log('count'+this.count);
        console.log('previous'+this.previous);




        if(this.previous<=this.active){
            list[this.active].classList.add("active");
            list[this.previous].classList.remove("active");
            this.previous=this.active;

           
        }else{
            list[this.active].classList.add("active");
            list[this.previous].classList.remove("active");
            this.previous=this.active;
            //if (this.previous==this.count)
            //this.previous=0;

        }
        

       


       
        
    }
    news(target) {
        //setInterval(function() {this.autoPlay(target).bind(this)}, 10);
        //this.interval = setInterval(this.autoPlay(), 1000);
        setInterval(this.autoPlay(),1);

      


       // this.autoPlay(target);
    }
}

