function mergesort(array,s,e){
    let mid=Math.floor((s+e)/2);
    if(s<e){
        mergesort(array,s,mid)
        mergesort(array,mid+1,e)
        merge(array,s,mid,e)
}
};
function merge(array,s,mid,e)
{
    let firsthalf=[]
    let secondhalf=[]
    let i=0
    let j=0
    let k=s
    for(i=0;i<=mid;i++,k++){
        firsthalf[i]=array[k]
    }
    for(j=0;j<=e;j++,k++){
        secondhalf[j]=array[k]
    }
    k=s;
    i=0;
    j=0;

    while(i<=firsthalf.length && j<=secondhalf.length)
    {
        if(firsthalf[i]<secondhalf[j]){
            array[k++]=firsthalf[i++]
        }
        else{
            array[k++]=secondhalf[j++]
        }
    }
    while(i<firsthalf.length){
        array[k++]=firsthalf[i++]
    }
    while(j<secondhalf.length){
        array[k++]=secondhalf[j++]
    }
};
const array=[3, 2, 1, 13, 8, 5, 0, 1];
mergesort(array,0,array.length-1)
console.log(array)