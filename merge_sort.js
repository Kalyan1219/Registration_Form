function merge(inp_arr,s,m,e){
  let out_arr=[];
  let i=s;
  let j=m+1;
  while(i<=m && j<=e){
    if(inp_arr[i]<=inp_arr[j]){
      out_arr.push(inp_arr[i]);
      i++;
    }
    else{
      out_arr.push(inp_arr[j]);
      j++;
    }
  }
  while(i<=m){
    out_arr.push(inp_arr[i]);
    i++
  }
  while(j<=e){
    out_arr.push(inp_arr[j]);
    j++
  }

  console.log(out_arr)
}
function merge_sort(inp_arr,s,e){
  if(s>=e){
    return
  }
  m=Math.floor((s+e)/2)
  merge_sort(inp_arr,s,m);
  merge_sort(inp_arr,m,e);
  merge(inp_arr,s,m,e);
}
let inp_arr=[3,1,5,8,0,6,2]
merge_sort(inp_arr,0,inp_arr.length);