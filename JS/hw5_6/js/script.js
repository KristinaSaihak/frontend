var timer;
Stopwatch= {
    splitTime:[0,0,0,0],
    time:[0,0,0,0],
    outTime:function() {
        document.querySelector(".timer").innerHTML = ((this.time[0] < 10) ? "0" : "") + this.time[0] + ":" + ((this.time[1] < 10) ? "0" : "") + this.time[1] + ":" + ((this.time[2] < 10) ? "0" : "") + this.time[2] + ":" + ((this.time[3] < 10) ? "0" : "") + ((this.time[3] < 100) ? "0" : "") + this.time[3];
    },
    outInterval: function(result,str) {
        result.innerHTML=str;
        for(var i=0;i<4;i++)
        {
            if(i==3)
                result.innerHTML+=(this.time[i] - this.splitTime[i]<100) ? "0":"";
            result.innerHTML+=(this.time[i] - this.splitTime[i]<10) ? "0":"";
            result.innerHTML+=this.time[i] - this.splitTime[i];
            result.innerHTML+=(i<3)?":":"";
        }
    },
    countTime: function () {
        for (var i = 0; i < 4; i++) {
        if (this.time[3] === 999) {
            this.time[3] = 0;
            if (++this.time[2] === 60) {
                this.time[2] = 0;
                if (++this.time[1] === 60) {
                    this.time[1] = 0;
                    this.time[0]++;
                }
            }
        }
        this.time[3]++;
    }
        this.outTime();
    },
    outputStopInterval:function() {
        var result = document.createElement('div');
        result.classList.add('result');
        var check=[false,false,false,false];
        for (var i=1; i<4; i++){
            if(this.time[i]<this.splitTime[i]){
                ++this.splitTime[i-1];
                (i==3)?this.time[i]+=1000:this.time[i]+=60;
                check[i]=true;
            }
        }
        this.outInterval(result,'Stop:&nbsp;&nbsp;');
        var results=document.querySelector('.allResults');
        results.appendChild(result);
        for(var i=0;i<4;i++){
            if(i>0 && check[i] == true)
                this.time[i] -= (i < 3)?60:1000;
            this.splitTime[i]=this.time[i];
        }
    },
    actionsStartStop: function() {
        switch (document.querySelector('.leftButtons').value) {
            case  'start':
                timer = setInterval(function () {
                    Stopwatch.countTime.call(Stopwatch)
                }, 4);
                document.querySelector('.leftButtons').value = 'stop';
                break;
            case  'stop':
                clearInterval(timer);
                document.querySelector('.leftButtons').value = 'start';
                this.outputStopInterval();
                break;
        }
    },
    clickStartStop: function () {
        var startId = document.querySelector('.leftButtons');
        if (window.attachEvent) {
            startId.attachEvent('onclick', function () {
                Stopwatch.actionsStartStop.call(Stopwatch)
            });
        } else {
            startId.addEventListener('click', function () {
                Stopwatch.actionsStartStop.call(Stopwatch)
            });
        }
    },
    outputSplit:function(){
        var result = document.createElement('div');
        result.classList.add('result');
        result.innerHTML='Split: ' ;
        for(var i=0;i<4;i++)
        {
            if(i==3)
                result.innerHTML+=this.time[i]<100 ? "0":"";
            result.innerHTML+=this.time[i] <10 ? "0":"";
            result.innerHTML+=this.time[i];
            result.innerHTML+=(i<3)?":":"";
        }
        var results=document.querySelector('.allResults');
        results.appendChild(result);
    },
    clickSplit: function () {
        var startId = document.querySelector('.centerButtons');
        if (window.attachEvent) {
            startId.attachEvent('onclick', function () {
                Stopwatch.outputSplit.call(Stopwatch)
            });
        } else {
            startId.addEventListener('click', function () {
                Stopwatch.outputSplit.call(Stopwatch)
            });
        }
    },
    actionsClear: function() {
        for(var i=0;i<4;i++) {
            this.time[i] = 0;
            this.splitTime[i]=0;
        }
        while (document.querySelector('.allResults').lastChild) {
            document.querySelector('.allResults').removeChild(document.querySelector('.allResults').lastChild);
        }
        this.outTime();
    },
    clickClear: function () {
        var startId = document.querySelector('.rightButtons');
        if (window.attachEvent) {
            startId.attachEvent('onclick', function () {
                Stopwatch.actionsClear.call(Stopwatch)
            });
        } else {
            startId.addEventListener('click', function () {
                Stopwatch.actionsClear.call(Stopwatch)
            });
        }
    }
}
Stopwatch.clickStartStop();
Stopwatch.clickSplit();
Stopwatch.clickClear();



