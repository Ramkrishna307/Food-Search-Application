let result =document.querySelector(".result-store");

let button=document.getElementById('button');
let input=document.getElementById('search-input');

let value=input.value;
button.addEventListener('click',searchitem);


function searchitem(){
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${value}`)
    .then((response)=>{
        let data=response.json();
        return data;
    }).then((data)=>{
       
        data.meals.forEach((item) => {
            let search_result=document.createElement('div');
            search_result.classList.add('search-result')
            let meal_img=document.createElement('div');
            meal_img.classList.add('meal-img');

            let pics=item.strMealThumb;
            let img=document.createElement('img');
            img.src=pics;
            img.id = "name";
            meal_img.appendChild(img);
            

            let meal_name=document.createElement('div');
            meal_name.classList.add('meal-name');

            let name=document.createElement('h2');
            name.innerHTML=item.strMeal;

            let link=document.createElement('a');
            link.href=item.idMeal;
            link.innerHTML="Link"

            meal_name.appendChild(name);
            meal_name.appendChild(link);

          
           
            search_result.appendChild(meal_img);
            search_result.appendChild(meal_name);

            result.appendChild(search_result);
            
        });
    })
}