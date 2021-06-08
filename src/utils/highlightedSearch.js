

let highlightedSearch = (name,search) => {

    let searchCheck = search.toLocaleLowerCase();

    function highlightCheck(s,i,name){
        s = s.toLocaleLowerCase()
        if(searchCheck.length > 1 && searchCheck.length >i+1 && searchCheck.charAt(1) !== name.charAt(i+1) ){
        return false
        }
        if(searchCheck.charAt(0) === s){
            searchCheck = searchCheck.replace(s,'');
            return true;
        }
        return false;
    }

    return [...name].map((s,i)=>
    <span key={i} style={highlightCheck(s,i,name)?{background:"yellow"}:{}}>
        {s}
    </span>
    )
} 

export default highlightedSearch