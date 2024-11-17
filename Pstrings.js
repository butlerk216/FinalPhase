function strings()
{
    var string1 = document.getElementById("firstStr").value;
    var string2 = document.getElementById("secondStr").value;

    var splitStr = string1.split("");
    // alert(splitStr);// no alerts in your assingnment - use document.getElementById.innerhtml=

    var reverStr = splitStr.reverse();
    // alert(reverseStr5);

    var joinStr = joinStr;("");

    // alert(joinStr);

    if(string1 == joinStr)
    {
        alert("palindrome");
    }
    else
    {
        alert("Not A Palindrome");
    }

    var i = 0
    var reversed = "";
    for (i=string1.length-1;i>=0;i--)
    {
        reversed += string1[i];  //reversed = reversed = string1[i]
    }

    if (reversed == string1)
    {
        document.getElementById("string info").innerHTML = "Palindrome";
    
    }
    else
    {
        document.getElementById("string info").innerHTML="Not A Palindrome";
    }
    //substring(a,b) a = startingposition(index) b = length
    var sub1 = string1.substring(0,3);
    
    //alert(sub1)

    var rep = string1.replace(/qwe/);
    //alert(rep);

}