import { useState} from 'react'
import './App.css'
import logo from './img/logo.png'
import poisk from './img/poisk.png'
import img from './img/image.png'
import arrow from "./img/arrow.png"
import fast from "./img/fast9.png"
import start from "./img/start.png"
import likeAP from "./img/likeap.png"
import likeDW from "./img/likedw.png"
import mylan from "./img/mylan.png"


function App () {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <main>
      <header>
        <div className="container_navigation">
          <div className= 'header_logotip'>
          <img src={logo} alt="Logo" />
            <h1>Кино</h1> <h2>Арея</h2>
            <div className='navigation_a'>
            <div className="navigation_a_text"><a href="#">Афиша</a></div>
            <div className="navigation_a_text"><a href="#">Медиа</a></div>
            <div className="navigation_a_text"><a href="#">Фильмы</a></div>
            <div className="navigation_a_text"><a href="#">Актеры</a></div>
            <div className="navigation_a_text"><a href="#">Новости</a></div>
            <div className="navigation_a_text"><a href="#">Подборки</a></div>
            <div className="navigation_a_text"><a href="#">Категории</a></div>
              <div className='navigation_but'>
                <div className='navigation_poisk'>
              <a href='#'><img src={poisk} alt="Poisk" /></a>
            </div>
            <div className='navigation_button'>
              <button href='#'>Войти</button>
            </div>
              </div>  
            </div>
          </div>
        </div>

        <div className='choice'>
        <h1>Сейчас в кино</h1>
        <div className='choice_kino_line'></div>
        <div className='choice_kino'>
          <div className="choice_kino_text"><a href="#">Все </a></div>
          <div className="choice_kino_text"><a href="#">Боевики </a></div>
          <div className="choice_kino_text"><a href="#">Приключения </a></div>
          <div className="choice_kino_text"><a href="#">Комедии </a></div>
          <div className="choice_kino_text"><a href="#">Фантастика </a></div>
          <div className="choice_kino_text"><a href="#">Триллеры </a></div>
          <div className="choice_kino_text"><a href="#">Драма</a></div>
        </div>
        </div>

        <div className='work'>
        <div className='covers'>
          <div className='covers_option'>
            <div className='covers_img'>
            <img src={img} alt="Img" />
            </div>
            <div className="covers_rating">
                <h1>6.70</h1>
              </div>
              <div className="covers_name">
                <h1>Побег из Претории</h1>
              </div>
              <div className="covers_description">
                <p>Триллер</p>
              </div>
          </div>
        </div>
        <div className='covers'>
          <div className='covers_option'>
            <div className='covers_img'>
            <img src={img} alt="Img" />
            </div>
            <div className="covers_rating">
                <h1>6.70</h1>
              </div>
              <div className="covers_name">
                <h1>Побег из Претории</h1>
              </div>
              <div className="covers_description">
                <p>Триллер</p>
              </div>
          </div>
        </div>
        <div className='covers'>
          <div className='covers_option'>
            <div className='covers_img'>
            <img src={img} alt="Img" />
            </div>
            <div className="covers_rating">
                <h1>6.70</h1>
              </div>
              <div className="covers_name">
                <h1>Побег из Претории</h1>
              </div>
              <div className="covers_description">
                <p>Триллер</p>
              </div>
          </div>
        </div>
        <div className='covers'>
          <div className='covers_option'>
            <div className='covers_img'>
            <img src={img} alt="Img" />
            </div>
            <div className="covers_rating">
                <h1>6.70</h1>
              </div>
              <div className="covers_name">
                <h1>Побег из Претории</h1>
              </div>
              <div className="covers_description">
                <p>Триллер</p>
              </div>
          </div>
        </div>
        </div>
        
        <div className='work'>
        <div className='covers'>
          <div className='covers_option'>
            <div className='covers_img'>
            <img src={img} alt="Img" />
            </div>
            <div className="covers_rating">
                <h1>6.70</h1>
              </div>
              <div className="covers_name">
                <h1>Побег из Претории</h1>
              </div>
              <div className="covers_description">
                <p>Триллер</p>
              </div>
          </div>
        </div>
        <div className='covers'>
          <div className='covers_option'>
            <div className='covers_img'>
            <img src={img} alt="Img" />
            </div>
            <div className="covers_rating">
                <h1>6.70</h1>
              </div>
              <div className="covers_name">
                <h1>Побег из Претории</h1>
              </div>
              <div className="covers_description">
                <p>Триллер</p>
              </div>
          </div>
        </div>
        <div className='covers'>
          <div className='covers_option'>
            <div className='covers_img'>
            <img src={img} alt="Img" />
            </div>
            <div className="covers_rating">
                <h1>6.70</h1>
              </div>
              <div className="covers_name">
                <h1>Побег из Претории</h1>
              </div>
              <div className="covers_description">
                <p>Триллер</p>
              </div>
          </div>
        </div>
        <div className='covers'>
          <div className='covers_option'>
            <div className='covers_img'>
            <img src={img} alt="Img" />
            </div>
            <div className="covers_rating">
                <h1>6.70</h1>
              </div>
              <div className="covers_name">
                <h1>Побег из Претории</h1>
              </div>
              <div className="covers_description">
                <p>Триллер</p>
              </div>
          </div>
        </div>
        </div>
        <div className="grid_btn">
            <button><a href="#">Все новинки</a></button>
          </div>


      <div className='video_trailer'>
        <div className='video_trailer_cursor'>
          <h1> Новые Трейлеры</h1> 
          <h2>Все трейлеры <img src={arrow} alt='Arrow' /><a href='#'> </a> </h2>
        </div>
      </div>
      <div className='video_trailer_container'>
        <img src={fast} alt="" />
        <div className="video_start">
          <img src={start} alt="" />
        </div>
        <div className="video_opisanie_fast9">
          <h1>Форсаж 9</h1>
          <div className="video_like">
            <div className="video_like_container">
              <img src={likeAP} alt="" />
              <img src={likeDW} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="scroll_video_trailer">
        <div className="scroll_video_trailer_cointainer">
          <img src={mylan} alt=""></img>
          <h1>Мулан </h1></div>
        <div className="scroll_video_trailer_cointainer">
          <img src={mylan} alt=""></img>
          <h1>Мулан </h1></div>
        <div className="scroll_video_trailer_cointainer">
          <img src={mylan} alt=""></img>
          <h1>Мулан </h1></div>
        <div className="scroll_video_trailer_cointainer">
          <img src={mylan} alt=""></img>
          <h1>Мулан </h1></div>
        <div className="scroll_video_trailer_cointainer">
          <img src={mylan} alt=""></img>
          <h1>Мулан </h1></div>
        <div className="scroll_video_trailer_cointainer">
          <img src={mylan} alt=""></img>
          <h1>Мулан </h1></div>
        <div className="scroll_video_trailer_cointainer">
          <img src={mylan} alt=""></img>
          <h1>Мулан </h1></div>
      </div>

      <div className='popular_film'>
        <h1>Популярные фильмы</h1>
        <div className="popular_film_line"></div>
        <div className="popular_film_data">
          <div className='popular_film_text'><a href ="">Все время</a></div>
          <div className='popular_film_text'><a href ="">2018</a></div>
          <div className='popular_film_text'><a href ="">2019</a></div>
          <div className='popular_film_text'><a href ="">2020</a></div>
          <div className='popular_film_text'><a href ="">2021</a></div>
          <div className='popular_film_text'><a href ="">2022</a></div>
          <div className='popular_film_text'><a href ="">2023</a></div>
        </div>
      </div>

      <div className='work_film'>
        <div className='covers_film'>
          <div className='covers_action_film'>
            <div className='covers_img_film'>
              <img src={img} alt='Img' />              
            </div>
            <div className='covers_rating_film'>
              <h1>8.70</h1>
            </div>
            <div className='covers_name_film'>
              <h1>Побег из претории</h1>
            </div>
            <div className='covers_description_film'>
              <p>Триллер</p>
            </div>
          </div>
        </div>
        <div className='covers_film'>
          <div className='covers_action_film'>
            <div className='covers_img_film'>
              <img src={img} alt='Img' />              
            </div>
            <div className='covers_rating_film'>
              <h1>8.70</h1>
            </div>
            <div className='covers_name_film'>
              <h1>Побег из претории</h1>
            </div>
            <div className='covers_description_film'>
              <p>Триллер</p>
            </div>
          </div>
        </div>
        <div className='covers_film'>
          <div className='covers_action_film'>
            <div className='covers_img_film'>
              <img src={img} alt='Img' />              
            </div>
            <div className='covers_rating_film'>
              <h1>8.70</h1>
            </div>
            <div className='covers_name_film'>
              <h1>Побег из претории</h1>
            </div>
            <div className='covers_description_film'>
              <p>Триллер</p>
            </div>
          </div>
        </div>
        <div className='covers_film'>
          <div className='covers_action_film'>
            <div className='covers_img_film'>
              <img src={img} alt='Img' />              
            </div>
            <div className='covers_rating_film'>
              <h1>8.70</h1>
            </div>
            <div className='covers_name_film'>
              <h1>Побег из претории</h1>
            </div>
            <div className='covers_description_film'>
              <p>Триллер</p>
            </div>
          </div>
        </div>
      </div>
            <div className='work_film'>
        <div className='covers_film'>
          <div className='covers_action_film'>
            <div className='covers_img_film'>
              <img src={img} alt='Img' />              
            </div>
            <div className='covers_rating_film'>
              <h1>8.70</h1>
            </div>
            <div className='covers_name_film'>
              <h1>Побег из претории</h1>
            </div>
            <div className='covers_description_film'>
              <p>Триллер</p>
            </div>
          </div>
        </div>
        <div className='covers_film'>
          <div className='covers_action_film'>
            <div className='covers_img_film'>
              <img src={img} alt='Img' />              
            </div>
            <div className='covers_rating_film'>
              <h1>8.70</h1>
            </div>
            <div className='covers_name_film'>
              <h1>Побег из претории</h1>
            </div>
            <div className='covers_description_film'>
              <p>Триллер</p>
            </div>
          </div>
        </div>
        <div className='covers_film'>
          <div className='covers_action_film'>
            <div className='covers_img_film'>
              <img src={img} alt='Img' />              
            </div>
            <div className='covers_rating_film'>
              <h1>8.70</h1>
            </div>
            <div className='covers_name_film'>
              <h1>Побег из претории</h1>
            </div>
            <div className='covers_description_film'>
              <p>Триллер</p>
            </div>
          </div>
        </div>
        <div className='covers_film'>
          <div className='covers_action_film'>
            <div className='covers_img_film'>
              <img src={img} alt='Img' />              
            </div>
            <div className='covers_rating_film'>
              <h1>8.70</h1>
            </div>
            <div className='covers_name_film'>
              <h1>Побег из претории</h1>
            </div>
            <div className='covers_description_film'>
              <p>Триллер</p>
            </div>
          </div>
        </div>
      </div>







      </header>      
    </main>
    </>
  )
}
export default App
