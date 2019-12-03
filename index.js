import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './bootstrap.css';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#">Beer</a>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a href="#video" class="nav-link">Video</a>
            </li>
          </ul>
          
        </div>
      </nav>
    </div>
    <div>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://source.unsplash.com/1600x900/?Beer&sig=1" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://source.unsplash.com/1600x900/?Beer&sig=2" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://source.unsplash.com/1600x900/?Beer&sig=3" class="d-block w-100" alt="..."/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div class="album py-5 bg-light" id="receitas">
      <h3 id="divisor">
        Beer is one of the oldest and most widely consumed alcoholic drinks in the world
      </h3>
      <div class="card-deck">
        <div class="card" >
          <img src="https://source.unsplash.com/500x500/?Beer&sig=4" class="card-img-top" alt="..."/>
          <div class="card-body">
            <p class="card-text">It is also the third most popular drink overall after water and tea</p>
          </div>
        </div>
            
            
            <div class="card" >
              <img src="https://source.unsplash.com/500x500/?Beer&sig=5" class="card-img-top" alt="..."/>
              <div class="card-body">
                <p class="card-text">Beer is brewed from cereal grains—most commonly from malted barley, though wheat, maize (corn), and rice are also used</p>
              </div>
            </div>
            
            <div class="card">
              <img src="https://source.unsplash.com/500x500/?Beer&sig=6" class="card-img-top" alt="..."/>
              <div class="card-body">
                <p class="card-text">During the brewing process, fermentation of the starch sugars in the wort produces ethanol and carbonation in the resulting beer</p>
              </div>
            </div>
          </div>
        </div>
        <h1 id="titulo">
          History
        </h1>
        
        <div class="embed-responsive embed-responsive-16by9" id="video">
          <iframe class="embed-responsive-item" src="http://www.youtube.com/embed/2B_Wc3ktFJs" frameborder="0" width="640"></iframe>
        </div>
        
        <p id="textao">
          Beer is one of the world&#39;s oldest prepared drinks. The earliest archaeological evidence of fermentation consists of 13,000 year old residues of a beer with the consistency of gruel, used by the semi-nomadic Natufians for ritual feasting, at the Raqefet Cave in the Carmel Mountains near Haifa in Israel. There is evidence that beer was produced at Göbekli Tepe during the Pre-Pottery Neolithic (around 8500 BC to 5500 BC). The earliest clear chemical evidence of beer produced from barley dates to about 3500–3100 BC, from the site of Godin Tepe in the Zagros Mountains of western Iran. It is possible, but not proven, that it dates back even further — to about 10,000 BC, when cereal was first farmed. Beer is recorded in the written history of ancient Iraq and ancient Egypt, and archaeologists speculate that beer was instrumental in the formation of civilizations. Approximately 5000 years ago, workers in the city of Uruk (modern day Iraq) were paid by their employers in beer. During the building of the Great Pyramids in Giza, Egypt, each worker got a daily ration of four to five litres of beer, which served as both nutrition and refreshment that was crucial to the pyramids&#39; construction.Some of the earliest Sumerian writings contain references to beer; examples include a prayer to the goddess Ninkasi, known as &quot;The Hymn to Ninkasi&quot;, which served as both a prayer as well as a method of remembering the recipe for beer in a culture with few literate people, and the ancient advice (&quot;Fill your belly. Day and night make merry&quot;) to Gilgamesh, recorded in the Epic of Gilgamesh, by the ale-wife Siduri may, at least in part, have referred to the consumption of beer. The Ebla tablets, discovered in 1974 in Ebla, Syria, show that beer was produced in the city in 2500 BC. A fermented drink using rice and fruit was made in China around 7000 BC. Unlike sake, mold was not used to saccharify the rice (amylolytic fermentation); the rice was probably prepared for fermentation by chewing or malting.Almost any substance containing sugar can naturally undergo alcoholic fermentation. It is likely that many cultures, on observing that a sweet liquid could be obtained from a source of starch, independently invented beer. Bread and beer increased prosperity to a level that allowed time for development of other technologies and contributed to the building of civilizations.Xenophon noted that during his travels, beer was being produced in Armenia.

Beer was spread through Europe by Germanic and Celtic tribes as far back as 3000 BC, and it was mainly brewed on a domestic scale. The product that the early Europeans drank might not be recognised as beer by most people today. Alongside the basic starch source, the early European beers might contain fruits, honey, numerous types of plants, spices and other substances such as narcotic herbs. What they did not contain was hops, as that was a later addition, first mentioned in Europe around 822 by a Carolingian Abbot and again in 1067 by abbess Hildegard of Bingen.In 1516, William IV, Duke of Bavaria, adopted the Reinheitsgebot (purity law), perhaps the oldest food-quality regulation still in use in the 21st century, according to which the only allowed ingredients of beer are water, hops and barley-malt. Beer produced before the Industrial Revolution continued to be made and sold on a domestic scale, although by the 7th century AD, beer was also being produced and sold by European monasteries. During the Industrial Revolution, the production of beer moved from artisanal manufacture to industrial manufacture, and domestic manufacture ceased to be significant by the end of the 19th century. The development of hydrometers and thermometers changed brewing by allowing the brewer more control of the process and greater knowledge of the results.
In 1912, the use of brown bottles began to be used by Joseph Schlitz Brewing Company of Milwaukee, Wisconsin in the United States. This innovation has since been accepted worldwide and prevents harmful rays from destroying the quality and stability of beer.As of 2007, the brewing industry is a global business, consisting of several dominant multinational companies and many thousands of smaller producers ranging from brewpubs to regional breweries. As of 2006, more than 133 billion litres (35 billion gallons), the equivalent of a cube 510 metres on a side, of beer are sold per year, producing total global revenues of $294.5 billion (£147.7 billion). In 2010, China&#39;s beer consumption hit 450 million hectolitres (45 billion litres), or nearly twice that of the United States, but only 5 per cent sold were premium draught beers, compared with 50 per cent in France and Germany.A recent and widely publicized study suggests that sudden decreases in barley production due to extreme drought and heat could in the future cause substantial volatility in the availability and price of beer.
        </p>
    </div>
    
    <div>
            <h5>Hello world!</h5>
            <p>Email: <b>dario.alves@fatec.sp.gov.br</b></p>
    </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
