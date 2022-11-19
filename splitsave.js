var str='TamilNadu#Chennai~Coimbatore~Madurai//Karnataka#Banglore~Mysore~Manglore~Mandiya//UP#Amethi~Allahabad~Ahamadabad'
var str1=str.split('//')
//console.log(str1);
var state=[];
var city=[];
var final=[];

for(i=0;i<str1.length;i++)
{
    var temp=str1[i].split('#');
    console.log(temp);
    for(j=0;j<temp.length;j++)
    {
        state[i]=temp[0];
        city[i]=temp[1].split('~');
    }
}
//console.log(state);
//console.log(city);

for(i=0;i<state.length;i++)
    {
        final.push({'state':state[i],'cities':city[i]});
    }
console.log(final);
