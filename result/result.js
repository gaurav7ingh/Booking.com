let search=()=>{
    let value=document.querySelector("#search").value;
    
    console.log(value)
    getData(value)
    document.querySelector("#search").value=null;
 }


 let getData=async(value)=>{
    
    const options = {
method: 'GET',
headers: {
    'X-RapidAPI-Key': 'd7e496ffb4msh726b54e6f11e809p1a1c03jsn838ccc0f9f1f',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
}
};
let res=await fetch(`https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=en-gb&name=${value}`, options)
 let data=await res.json();
//   console.log(data)
 find(data);

 }

 let find=async(data)=>{
   
   const options = {
   method: 'GET',
   headers: {
       'X-RapidAPI-Key': 'd7e496ffb4msh726b54e6f11e809p1a1c03jsn838ccc0f9f1f',
       'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
   }
};

let res=await fetch(`https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates?order_by=popularity&adults_number=2&units=metric&room_number=1&checkout_date=2022-10-01&filter_by_currency=AED&locale=en-gb&checkin_date=2022-09-30&latitude=${data[0].latitude}&longitude=${data[0].longitude}&children_number=2&children_ages=5%2C0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&page_number=0&include_adjacency=true`, options)
   
let date=await res.json();
console.log(date)
console.log(date.result);
append(date.result)

}

let append=(data)=>{
document.querySelector("#resultData").innerHTML=null;
data.forEach((el)=>{
 
    let div1=document.createElement("div");
    let div2=document.createElement("div");
    let div3=document.createElement("div");
    let img=document.createElement("img");
    let h3=document.createElement("h3");
    let p1=document.createElement("p");
    let p2=document.createElement("p");

    div1.setAttribute("class","oneDiv")
    div2.setAttribute("class","twoDiv")
    div3.setAttribute("class","threeDiv")

    img.src=el.main_photo_url;
    h3.innerText=el.hotel_name;
    p1.innerText=el.address;
    p2.innerText=el.city;

    div2.append(img);
    div3.append(h3,p1,p2)
    div1.append(div2,div3)

    document.querySelector("#resultData").append(div1)
    document.querySelector("#h1").innerHTML=data[0].city;
})

}