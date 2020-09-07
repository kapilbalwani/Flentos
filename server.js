function mincost(A,N)
{
    var temp1=[...A];
    temp1.sort(function(a, b){return a - b});
    var B=[];
    var cost1=0;
    for (let i=0;i<N;i++){
        let a=temp1.shift();
        let b=temp1.shift();
        cost1+=Math.max(a,b);
        B.push(a,b);
        if(temp1.length==0 || B.length==N){
            break;
        }
        var c=B.shift()
        cost1+=c;
        temp1.push(c);  
    }

    var temp2=[...A];
    temp2.sort(function(a, b){return a - b});
    var C=[];
    var cost2=0;
    for (let i=0;i<N;i++){
        let a=temp2.shift();
        let b=temp2.shift();
        cost2+=Math.max(a,b);
        C.unshift(a,b);
        if(temp2.length==0 || C.length==N){
            break;
        }
        var c=C.shift()
        cost2+=c;
        temp2.unshift(c);  
    }

    return Math.min(cost1,cost2);
}

//var A=[300,400,600,700];
//var A=[600,800,150,700];
var A=[1321,2450]

var result=mincost(A,A.length);

console.log(result);
