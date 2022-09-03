import React from "react";
import "./Home.css";
import Restaurant from "./Restaurant";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home_image"
                src="https://i.postimg.cc/RFbvxKPQ/Starting-at-Just.png" alt="" />
                <div className="home__row">
                    <Restaurant 
                    id={"111"}
                    title={"Ambika"}
                    location={"RPD Cross"}
                    image={"https://www.masala.tv/wp-content/uploads/2017/05/bombay-sev-puri-recipe-2.jpg"}
                    rating={"4"}
                    path='/Ambika' 
                    />
    
                    <Restaurant 
                    id={"112"}
                    title={"Shree Ram Bhel Puri"}
                    location={"Near HP Office Channamma Nagar"}
                    image={"https://rakskitchen.net/wp-content/uploads/2015/02/pani-puri-fb-1.jpg"}
                    rating={"3"}
                    path='/Shree_Ram' 
                    />
                    
                </div>
                
                <div className="home__row">
                    
                    <Restaurant 
                    id='111'
                    title='Bhairavnath Kulfi'
                    location="1st gate opposite Mohire"
                    image='https://www.cookwithkushi.com/wp-content/uploads/2019/06/IMG_3859_.jpg'
                    rating={4}
                    path='/Bhairav' 
                    />

                    <Restaurant 
                    id='111'
                    title='Bhaskar Canteen'
                    location="Railway Station"
                    image='https://img.onmanorama.com/content/dam/mm/en/food/foodie/images/2019/10/1/idli.jpg'
                    rating={4}
                    path='/Bhaskar' 
                    />

                    <Restaurant 
                    id='111'
                    title='Swasti American Sweet Corn'
                    location="Nehru Nagar"
                    image='https://img.freepik.com/premium-photo/steamed-organic-yellow-sweet-corn-masala-corn-chat-prepared-using-butter-chat-masala-lemon-favourite-indian-snack_466689-63452.jpg?w=996'
                    rating={4}
                    path='/Swsti' 
                    />
                </div>
                <div className="home__row">
                    <Restaurant 
                    id='111'
                    title='Sahil Fast Food'
                    location="Deshmukh Road"
                    image='https://img.freepik.com/premium-photo/veg-pizza-wooden-pizza-board-isolated-rustic-wooden-background-selective-focus_57665-8615.jpg?size=626&ext=jpg&ga=GA1.2.1232466621.1661344804'
                    rating={4}
                    path='/Sahil' 
                    />

                    <Restaurant 
                    id='111'
                    title='Govind Vada Pav'
                    location="Tilakwadi "
                    image='https://sangeeta.com/wp-content/uploads/2021/07/VadaPav.jpg'
                    rating={3}
                    path='/Govind' 
                    />
                </div>
                <div className="connect">
                    <h4>Contact Us</h4>
                    <p>Phone: 0831-212121</p>
                    <p>Email: streethub@gmail.com</p>
                    <img className="social" src="https://cdn-icons-png.flaticon.com/512/747/747393.png?w=740&t=st=1661439459~exp=1661440059~hmac=084ab64e843becba195e98496b425fdfb808ad98f9a9d63a6dc3537fddb49c9b"/>
                    <img className="social" src="https://cdn-icons-png.flaticon.com/512/1216/1216915.png?w=740&t=st=1661439540~exp=1661440140~hmac=348c5c28866e90455d4c2c33b462df16e555a3ed8b1a406e4dea9e21e082ea40"/>
                    <img className="social" src="https://cdn-icons-png.flaticon.com/512/1216/1216882.png?w=740&t=st=1661439724~exp=1661440324~hmac=df475e4dc6acbf5809bcfde52be61b02247569d0f51285a6d1c573092b807648"/>
                </div>          
            </div>
            
        </div>
    );
}

export default Home;