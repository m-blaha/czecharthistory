var SPANS=[
    {
     "start": 1918,
     "end": 1940,
     "day_pixel_length": 3.0,
     "title": "The Inter-War Avantgarde"
    },
    {
     "start": 1938,
     "end": 1948,
     "day_pixel_length": 3.0,
     "title": "Under the fascist government"
    },
    {
     "start": 1948,
     "end": 1968,
     "day_pixel_length": 3.0,
     "title": "Art under communism"
    },
    {
     "start": 1968,
     "end": 1980,
     "day_pixel_length": 3.0,
     "title": "Occupation and normalisation"
    },
    {
     "start": 1980,
     "end": 1989,
     "day_pixel_length": 3.0,
     "title": "Last&nbsp;Decade&nbsp;of&nbsp;the&nbsp;Regime"
    },
    {
     "start": 1989,
     "end": 2018,
     "day_pixel_length": 3.0,
     "title": "Art after the Velvet revolution"
    }
];

var EVENTS=[
  {
    "start": "01/01/1947", 
    "end": "31/01/1991", 
    "description": "", 
    "name": "Cold War", 
    "opt_c": 2, 
    "image": "events/Cold_War.gif", 
    "cls": "events politics world"
  }, 
  {
    "start": "01/01/1961", 
    "end": "31/01/1989", 
    "description": "", 
    "name": "Berlin is divided", 
    "opt_c": 3, 
    "image": "events/Berlin_is_Divided2.jpg", 
    "cls": "events politics world"
  },
  {
    "start": "01/01/1968", 
    "end": "31/01/1989", 
    "description": "", 
    "name": "Plastic People of the Universe", 
    "opt_c": 0, 
    "image": "events/Plastic_People_of_the_Universe.jpg", 
    "cls": "events culture czech"
  }, 
  
  /*{
    "start": "01/01/1989", 
    "end": "31/01/1989", 
    "description": "Anton\u00edn St\u0159\u00ed\u017eek", 
    "name": "\u010c\u00edsla", 
    "opt_c": 3, 
    "image": "artworks/Strizek.jpg", 
    "cls": "artworks"
  }, */
  {
    "opt_c": 3, 
    "cls": "styles", 
    "end": "31/01/1995", 
    "name": "Imaginative art", 
    "start": "01/01/1935"
  }, 
  {
    "opt_c": 1, 
    "cls": "styles", 
    "end": "31/01/1970", 
    "name": "Surrealism", 
    "start": "01/01/1935"
  }, 
  {
    "opt_c": 4, 
    "cls": "styles", 
    "end": "31/01/1975", 
    "name": "Modernism", 
    "start": "01/01/1935"
  }, 
  {
    "opt_c": 0, 
    "cls": "styles", 
    "end": "31/01/1960", 
    "name": "Socialistic realism", 
    "start": "01/01/1945"
  }, 
  {
    "opt_c": 1, 
    "cls": "styles", 
    "end": "31/01/1980", 
    "name": "Socialistic realism", 
    "start": "01/01/1970"
  }, 
  {
    "opt_c": 5, 
    "cls": "styles", 
    "end": "31/01/1955", 
    "name": "Funkcionalism", 
    "start": "01/01/1935"
  }, 
  {
    "opt_c": 2, 
    "cls": "styles", 
    "end": "31/01/1995", 
    "name": "Neofunkcionalism", 
    "start": "01/01/1975"
  }, 
  {
    "opt_c": 0, 
    "cls": "styles", 
    "end": "31/01/1965", 
    "name": "Kinetism", 
    "start": "01/01/1935"
  }, 
  {
    "opt_c": 1, 
    "cls": "styles", 
    "end": "31/01/1955", 
    "name": "Total realism", 
    "start": "01/01/1948"
  }, 
  {
    "opt_c": 5, 
    "cls": "styles", 
    "end": "31/01/1965", 
    "name": "Explosionalism", 
    "start": "01/01/1948"
  }, 
  {
    "opt_c": 0, 
    "cls": "styles", 
    "end": "31/01/1967", 
    "name": "Structural abstraction", 
    "start": "01/01/1960"
  }, 
  {
    "opt_c": 4, 
    "cls": "styles", 
    "end": "31/01/1985", 
    "name": "Czech grotesque", 
    "start": "01/01/1965"
  }, 
  {
    "opt_c": 5, 
    "cls": "styles", 
    "end": "31/01/1985", 
    "name": "New figuration", 
    "start": "01/01/1965"
  }, 
  {
    "opt_c": 3, 
    "cls": "styles", 
    "end": "31/01/1965", 
    "name": "Modern realism", 
    "start": "01/01/1960"
  }, 
  {
    "opt_c": 0, 
    "cls": "styles", 
    "end": "31/01/1987", 
    "name": "Constructivist tendencies", 
    "start": "01/01/1964"
  }, 
  {
    "opt_c": 1, 
    "cls": "styles", 
    "end": "31/01/1995", 
    "name": "Conceptual art", 
    "start": "01/01/1964"
  }, 
  {
    "opt_c": 2, 
    "cls": "styles", 
    "end": "31/01/1993", 
    "name": "Actual art", 
    "start": "01/01/1964"
  }, 
  {
    "opt_c": 5, 
    "cls": "styles", 
    "end": "31/01/1995", 
    "name": "Postmodernism", 
    "start": "01/01/1985"
  },

/*   1918   */
{
    "start": "01/01/1917", 
    "end": "31/01/1931", 
    "description": "", 
    "name": "De Stijl", 
    "opt_c": 6, 
    "image": "events18/art_destijl_1917_1931.jpg", 
    "cls": "events art world"
},
{
    "start": "01/01/1918", 
    "end": "31/01/1935", 
    "description": "", 
    "name": "", 
    "opt_c": 0, 
    "image": "events18/illustration_president-02.svg", 
    "cls": "events politics illustration"
},
{
    "start": "01/01/1918", 
    "end": "31/01/1939", 
    "description": "", 
    "name": "First Czechoslovak republic", 
    "opt_c": 4, 
    "image": "events18/politics_firstczechoslovakiarepublic.gif", 
    "cls": "events politics czech two"
},
{
    "start": "01/01/1918", 
    "end": "31/01/1938", 
    "description": "The interwar period in Czechoslovakia is the artistically strongest period of the 20th century", 
    "name": "", 
    "opt_c": 5, 
    "image": "", 
    "cls": "events art czech paragraph"
},
/*{
    "start": "01/01/1918", 
    "end": "31/01/1924", 
    "description": "Tvrdošijní", 
    "name": "", 
    "opt_c": 5, 
    "image": "events18/", 
    "cls": "events art czech"
},*/
{
    "start": "01/01/1918", 
    "end": "31/01/1918", 
    "description": "", 
    "name": "Gerrit Rietveld", 
    "opt_c": 5, 
    "image": "events18/art_gerritRetvield_1918.jpg", 
    "cls": "events art world"
},
{
    "start": "01/01/1919", 
    "end": "31/01/1933", 
    "description": "", 
    "name": "Bauhaus art school", 
    "opt_c": 3, 
    "image": "events18/culture_bauhaus.jpg", 
    "cls": "events art world"
},
{
    "start": "01/01/1919", 
    "end": "31/01/1919", 
    "description": "", 
    "name": "Treaty of Versailles", 
    "opt_c": 5, 
    "image": "events18/politics_versailles.jpg", 
    "cls": "events politics world"
},
{
    "start": "01/01/1920", 
    "end": "31/01/1920", 
    "description": "", 
    "name": "First commercial radio", 
    "opt_c": 1, 
    "image": "events18/culture_firstcommercialradio.jpg", 
    "cls": "events culture world"
},
/*{
    "start": "01/01/1920", 
    "end": "31/01/1930", 
    "description": "Devětsil", 
    "name": "", 
    "opt_c": 2, 
    "image": "events18/", 
    "cls": "events art czech"
},*/
{
    "start": "01/01/1922", 
    "end": "31/01/1922", 
    "description": "", 
    "name": "Philio T. Farnsworth invents television", 
    "opt_c": 3, 
    "image": "events18/technology_philip_farnsworth.jpg", 
    "cls": "events sciencetechnology world"
},
{
    "start": "01/01/1922", 
    "end": "31/01/1922", 
    "description": "", 
    "name": "King Tut's tomb discovered", 
    "opt_c": 1, 
    "image": "events18/technology_tut.jpg", 
    "cls": "events politics world"
},
{
    "start": "01/01/1923", 
    "end": "31/01/1923", 
    "description": "", 
    "name": "Wasilly Kandinsky", 
    "opt_c": 1, 
    "image": "events18/art_kandinskij_1923.jpg", 
    "cls": "events art world"
},
{
    "start": "01/01/1925", 
    "end": "31/01/1925", 
    "description": "", 
    "name": "Joan Miro", 
    "opt_c": 0, 
    "image": "events18/art_miro_1925.jpg", 
    "cls": "events art world"
}, 
{
    "start": "01/01/1925", 
    "end": "31/01/1925", 
    "description": "", 
    "name": "The First Full-Length Film with Synchronized Dialogue", 
    "opt_c": 4, 
    "image": "events18/culture_firstfilm.jpg", 
    "cls": "events culture world three"
}, 
{
    "start": "01/01/1928", 
    "end": "31/01/1928", 
    "description": "", 
    "name": "Alexander Fleming discovers penicillin", 
    "opt_c": 4, 
    "image": "events18/technology_penicilin.jpg", 
    "cls": "events sciencetechnology world three"
},
{
    "start": "01/01/1928", 
    "end": "31/01/1928", 
    "description": "", 
    "name": "The very first TV broadcast starring Felix", 
    "opt_c": 2, 
    "image": "events18/culture_felix_firstbroadcast.gif", 
    "cls": "events culture world two"
},
{
    "start": "01/01/1928", 
    "end": "31/01/1928", 
    "description": "", 
    "name": "Charlie Chaplin film Cirkus", 
    "opt_c": 0, 
    "image": "events18/culture_chaplin.gif", 
    "cls": "events culture world"
},
{
    "start": "01/01/1929", 
    "end": "31/01/1929", 
    "description": "", 
    "name": "MOMA is opened in New York", 
    "opt_c": 2, 
    "image": "events18/culture_momaopens.jpg", 
    "cls": "events culture world"
},
{
    "start": "01/01/1929", 
    "end": "31/01/1939", 
    "description": "", 
    "name": "Great Depression", 
    "opt_c": 0, 
    "image": "events18/culture politics_great depression.jpg", 
    "cls": "events politics world"
},
{
    "start": "01/01/1930", 
    "end": "31/01/1930", 
    "description": "", 
    "name": "The first FIFA World Cup", 
    "opt_c": 1, 
    "image": "events18/culture_fifa.jpg", 
    "cls": "events culture world"
},
{
    "start": "01/01/1931", 
    "end": "31/01/1931", 
    "description": "", 
    "name": "Salvador Dalí", 
    "opt_c": 3, 
    "image": "events18/art_salvadordali.jpg", 
    "cls": "events art world"
},
{
    "start": "01/01/1931", 
    "end": "31/01/1931", 
    "description": "", 
    "name": "Empire State Building is completed", 
    "opt_c": 6, 
    "image": "events18/culture_empire.jpg", 
    "cls": "events culture world"
},
{
    "start": "01/01/1932", 
    "end": "31/01/1932", 
    "description": "", 
    "name": "Big strikes in city Most", 
    "opt_c": 6, 
    "image": "events18/politics_mosteckastavka.jpg", 
    "cls": "events politics czech"
},
{
    "start": "01/01/1935", 
    "end": "31/01/1935", 
    "description": "", 
    "name": "Piet Mondrian – Composition C", 
    "opt_c": 2, 
    "image": "events18/art_PietMondrian_1935.jpg", 
    "cls": "events art world"
},
{
    "start": "01/01/1937", 
    "end": "31/01/1937", 
    "description": "", 
    "name": "Pablo Picasso – Guernica", 
    "opt_c": 2, 
    "image": "events18/art_PicassoGuernica_1937.jpg", 
    "cls": "events art world"
},

/*{
    "start": "01/01/1923", 
    "end": "31/01/1923", 
    "description": "", 
    "name": "Garret Morgan invents traffic lights", 
    "opt_c": 4, 
    "image": "events18/technology_trafficlights.jpg", 
    "cls": "events sciencetechnology world"
},*/

{
    "start": "01/01/1919", 
    "end": "31/01/1919", 
    "description": "Rudolf Kremlička", 
    "name": "Myčky", 
    "opt_c": 4, 
    "image": "artworks/Kremlicka.jpg", 
    "cls": "artworks"
},
{
    "start": "01/01/1938", 
    "end": "31/01/1938", 
    "description": "Czechoslovakia experience the worst moments since its inception, declares mobilization, economy is on the the verge of collapse", 
    "name": "", 
    "opt_c": 0, 
    "image": "events/", 
    "cls": "events politics czech"
},
{
    "start": "01/01/1926", 
    "end": "31/01/1926", 
    "description": "Karel Teige", 
    "name": "Typography", 
    "opt_c": 2, 
    "image": "artworks/Teige.jpg", 
    "cls": "artworks"
},
{
    "start": "01/01/1919", 
    "end": "31/01/1919", 
    "description": "Otto Gutfreund", 
    "name": "Head of woman", 
    "opt_c": 1, 
    "image": "artworks/Gutfreund.jpg", 
    "cls": "artworks"
},
{
    "start": "01/01/1931", 
    "end": "31/01/1931", 
    "description": "Toyen", 
    "name": "Noc v Oceánii", 
    "opt_c": 2, 
    "image": "artworks/Toyen.jpg", 
    "cls": "artworks"
},
{
    "start": "01/01/1936", 
    "end": "31/01/1936", 
    "description": "Zdeněk Pěšánek", 
    "name": "Torso", 
    "opt_c": 4, 
    "image": "artworks/Pesanek.jpg", 
    "cls": "artworks"
},
{
    "start": "01/01/1932", 
    "end": "31/01/1932", 
    "description": "Emil Filla", 
    "name": "Laying woman", 
    "opt_c": 1, 
    "image": "artworks/Filla.jpg", 
    "cls": "artworks"
},
{
    "start": "01/01/1932", 
    "end": "31/01/1932", 
    "description": "Jindřich Štýrský", 
    "name": "Emílie ke mně přichází ve snu", 
    "opt_c": 6, 
    "image": "artworks/Styrsky.jpg", 
    "cls": "artworks"
},
{
    "start": "01/01/1934", 
    "end": "31/01/1934", 
    "description": "", 
    "name": "Adolf Hitler becomes Chancellor of Germany", 
    "opt_c": 5, 
    "image": "events38/politics_ww2.gif", 
    "cls": "events politics world"
},
{
    "start": "01/01/1936", 
    "end": "31/01/1936", 
    "description": "Josef Sudek", 
    "name": "Reklamní fotografie Sutnara", 
    "opt_c": 1, 
    "image": "artworks/Sudek.jpg", 
    "cls": "artworks"
},

/*   1938   */
{
    "start": "01/01/1941", 
    "end": "31/01/1941", 
    "description": "", 
    "name": "Pearl Harbor attack", 
    "opt_c": 2, 
    "image": "events38/politics_pearlharbor.jpg", 
    "cls": "events politics world"
},
{
    "start": "01/01/1939", 
    "end": "31/01/1945", 
    "description": "", 
    "name": "World War 2", 
    "opt_c": 5, 
    "image": "events38/politics_ww2.jpg", 
    "cls": "events politics world"
},
{
    "start": "01/01/1945", 
    "end": "31/01/1945", 
    "description": "", 
    "name": "United Nations formed", 
    "opt_c": 4, 
    "image": "events38/politics_unitednations.jpg", 
    "cls": "events politics world"
},
{
    "start": "01/01/1945", 
    "end": "31/01/1945", 
    "description": "", 
    "name": "Atomic bombings of Hiroshima and Nagasaki", 
    "opt_c": 2, 
    "image": "events38/politcs_nagasaki.jpg", 
    "cls": "events politics world"
},

/*   1948  */ 

{
    "start": "01/01/1948", 
    "end": "31/01/1948", 
    "description": "Liquidation of private ownership and nationalization of internal trade", 
    "name": "", 
    "opt_c": 5, 
    "image": "events18/", 
    "cls": "events art czech paragraph"
},
{
    "start": "01/01/1949", 
    "end": "31/01/1949", 
    "description": "", 
    "name": "NATO formed", 
    "opt_c": 5, 
    "image": "events48/culture_natoformed.jpg", 
    "cls": "events culture world"
},
{
    "start": "01/01/1950", 
    "end": "31/01/1950", 
    "description": "", 
    "name": "Jackson Pollock", 
    "opt_c": 5, 
    "image": "events48/art_pollock.jpg", 
    "cls": "events art world"
},
{
    "start": "01/01/1953", 
    "end": "31/01/1953", 
    "description": "", 
    "name": "Willem de Kooning", 
    "opt_c": 2, 
    "image": "events48/art_kooning.jpg", 
    "cls": "events art world two"
},
{
    "start": "01/01/1953", 
    "end": "31/01/1953", 
    "description": "", 
    "name": "Everest conquered", 
    "opt_c": 6, 
    "image": "events48/everest_conquered.jpg", 
    "cls": "events culture world"
},
{
    "start": "01/01/1953", 
    "end": "31/01/1953", 
    "description": "", 
    "name": "Stalin died", 
    "opt_c": 3, 
    "image": "events48/politics_stalindied.jpg", 
    "cls": "events politics world"
},
{
    "start": "01/01/1955", 
    "end": "31/01/1955", 
    "description": "", 
    "name": "First spartakiade", 
    "opt_c": 2, 
    "image": "events48/culture_firstspartakiade.jpg", 
    "cls": "events culture czech"
},
{
    "start": "01/01/1956", 
    "end": "31/01/1956", 
    "description": "", 
    "name": "Joseph Beyus", 
    "opt_c": 5, 
    "image": "events48/art_beyus.jpg", 
    "cls": "events art world "
},
{
    "start": "01/01/1957", 
    "end": "31/01/1957", 
    "description": "", 
    "name": "Launch of Sputnik", 
    "opt_c": 2, 
    "image": "events48/technology_sputnik.jpg", 
    "cls": "events sciencetechnology world"
},
{
    "start": "01/01/1958", 
    "end": "31/01/1958", 
    "description": "", 
    "name": "The birth of NASA", 
    "opt_c": 4, 
    "image": "events48/politics_nasa.jpg", 
    "cls": "events sciencetechnology world"
},
{
    "start": "01/01/1960", 
    "end": "31/01/1990", 
    "description": "", 
    "name": "Czechoslovak Socialist republic", 
    "opt_c": 5, 
    "image": "events/Czechoslovak_Socialist_republic.jpg", 
    "cls": "events politics czech"
  }, 
{
    "start": "01/01/1961", 
    "end": "31/01/1961", 
    "description": "", 
    "name": "Yuri Gagarin becomes first man in space", 
    "opt_c": 2, 
    "image": "events48/technology_gagarin.jpg", 
    "cls": "events sciencetechnology world "
},
{
    "start": "01/01/1962", 
    "end": "31/01/1962", 
    "description": "", 
    "name": "First transatlantic braodcast", 
    "opt_c": 5, 
    "image": "events48/technology_transatlanticbroadcast.jpg", 
    "cls": "events sciencetechnology world "
},
{
    "start": "01/01/1963", 
    "end": "31/01/1953", 
    "description": "", 
    "name": "John F. Kennedy is assassinated", 
    "opt_c": 6, 
    "image": "events48/politics_kennedyassasination.jpg", 
    "cls": "events politics world"
},
{
    "start": "01/01/1964", 
    "end": "31/01/1964", 
    "description": "", 
    "name": "Andy Warhol – Marilyn Monroe", 
    "opt_c": 2, 
    "image": "events48/art_warhol.jpg", 
    "cls": "events art world"
},



/*   1968  */ 

{
    "start": "01/01/1966", 
    "end": "31/01/1966", 
    "description": "", 
    "name": "Cultural revolution in China began", 
    "opt_c": 5, 
    "image": "events48/politics_culturalrevolution.jpg", 
    "cls": "events politics world"
},
{
    "start": "01/01/1969", 
    "end": "31/01/1969", 
    "description": "", 
    "name": "Neil Armstrong – First man on the Moon", 
    "opt_c": 2, 
    "image": "events68/technology_armstrongonmoon.jpg", 
    "cls": "events sciencetechnology world "
},
{
    "start": "01/01/1970", 
    "end": "31/01/1970", 
    "description": "", 
    "name": "Robert Smithson – Spiral Jetty", 
    "opt_c": 5, 
    "image": "events68/art_RobertSmithson.jpg", 
    "cls": "events art world"
},
{
    "start": "01/01/1971", 
    "end": "31/01/1995", 
    "description": "", 
    "name": "Christo and Jeanne-Claude – Wrapped Reichstag", 
    "opt_c": 2, 
    "image": "events68/art_Christo_Reichstag.jpg", 
    "cls": "events art world"
},
{
    "start": "01/01/1971", 
    "end": "31/01/1971", 
    "description": "", 
    "name": "invention of microchip", 
    "opt_c": 3, 
    "image": "events68/technology_microchip.jpg", 
    "cls": "events sciencetechnology world "
},
{
    "start": "01/01/1971", 
    "end": "31/01/1971", 
    "description": "", 
    "name": "Greenpeace founded", 
    "opt_c": 6, 
    "image": "events68/Greenpeace.jpg", 
    "cls": "events culture world "
},
{
    "start": "01/01/1974", 
    "end": "31/01/1974", 
    "description": "", 
    "name": "Marina Abramovic - Rhytm 0", 
    "opt_c": 4, 
    "image": "events68/art_abramovicň.jpg", 
    "cls": "events art world"
},
{
    "start": "01/01/1976", 
    "end": "31/01/1976", 
    "description": "", 
    "name": "Apple founded", 
    "opt_c": 2, 
    "image": "events68/technology_apple.jpg", 
    "cls": "events sciencetechnology world "
},
{
    "start": "01/01/1977", 
    "end": "31/01/1977", 
    "description": "", 
    "name": "Centre Pompidu in Paris opens", 
    "opt_c": 4, 
    "image": "events68/culture_centrepompidu.jpg", 
    "cls": "events culture world"
},
{
    "start": "01/01/1977", 
    "end": "31/01/1980", 
    "description": "", 
    "name": "Cindy Cherman", 
    "opt_c": 4, 
    "image": "events68/art_cherman.jpg", 
    "cls": "events art world"
},

{
    "start": "01/01/1968", 
    "end": "31/01/1968", 
    "description": "Ladislav Sutnar", 
    "name": "Venus/All the way to USA", 
    "opt_c": 1, 
    "image": "artworks/Sutnar.jpg", 
    "cls": "artworks"
},

/*   1980   */
/*{
    "start": "01/01/1980", 
    "end": "31/01/1980", 
    "description": "", 
    "name": "John Lennon assassinated", 
    "opt_c": 4, 
    "image": "events/John_Lennon_assassinated.jpg", 
    "cls": "events culture world"
  }, */
  {
    "start": "01/01/1980", 
    "end": "31/01/1988", 
    "description": "", 
    "name": "Iran\u2013Iraq War", 
    "opt_c": 1, 
    "image": "events/Iran_Iraq_War.jpg", 
    "cls": "events politics world"
  }, 
  {
    "start": "01/01/1981", 
    "end": "31/01/1981", 
    "description": "", 
    "name": "MTv launches", 
    "opt_c": 2, 
    "image": "events68/culture_mtv.jpg", 
    "cls": "events culture world"
  },
  {
    "start": "01/01/1981", 
    "end": "31/01/1981", 
    "description": "", 
    "name": "The first Space Shuttle, Columbia", 
    "opt_c": 3, 
    "image": "events/The_first_Space_Shuttle_Columbia.jpg", 
    "cls": "events sciencetechnology world three"
  }, 
  {
    "start": "01/01/1981", 
    "end": "31/01/1981", 
    "description": "", 
    "name": "Lesser Town courts exhibition", 
    "opt_c": 0, 
    "image": "events/Lesser_Town_courts_exhibition.jpg", 
    "cls": "events culture czech"
  }, 
  {
    "start": "01/01/1981", 
    "end": "31/01/1981", 
    "description": "", 
    "name": "Personal Computers introduced by IBM", 
    "opt_c": 5, 
    "image": "events/Personal_Computers_introduced_by_IBM.jpg", 
    "cls": "events sciencetechnology world"
  }, 
  /*{
    "start": "01/01/1981", 
    "end": "31/01/1981", 
    "description": "", 
    "name": "Jean-Michel Basquiat", 
    "opt_c": 2, 
    "image": "events/Jean-Michel_Basquiat.gif", 
    "cls": "events art world"
  }, */
  {
    "start": "01/01/1982", 
    "end": "31/01/1982", 
    "description": "", 
    "name": "E.T. Movie Released", 
    "opt_c": 4, 
    "image": "events/E.T._Movie_Released.jpg", 
    "cls": "events culture world three"
  }, 
  {
    "start": "01/01/1982", 
    "end": "31/01/1982", 
    "description": "", 
    "name": "Canada became independent of Britain", 
    "opt_c": 6, 
    "image": "events/politics_canadaindependent.jpg", 
    "cls": "events politics world"
  },
   {
    "start": "01/01/1982", 
    "end": "31/01/1982", 
    "description": "", 
    "name": "First CD player", 
    "opt_c": 5, 
    "image": "events/technology_firstCDplayer.jpg", 
    "cls": "events sciencetechnology world three"
  },
  {
    "start": "01/01/1982", 
    "end": "31/01/1982", 
    "description": "", 
    "name": "Keith Haring", 
    "opt_c": 3, 
    "image": "events/Keith_Haring.jpg", 
    "cls": "events art world three"
  }, 
  /*{
    "start": "01/01/1980", 
    "end": "31/01/1989", 
    "description": "", 
    "name": "80s fashion", 
    "opt_c": 3, 
    "image": "events/80s_fashion.jpg", 
    "cls": "events culture world"
  }, */
  {
    "start": "01/01/1982", 
    "end": "31/01/1982", 
    "description": "", 
    "name": "Michael Jackson Releases Thriller", 
    "opt_c": 0, 
    "image": "events/Michael_Jackson_Releases_Thriller.gif", 
    "cls": "events culture world"
  }, 
  {
    "start": "01/01/1983", 
    "end": "31/01/1983", 
    "description": "", 
    "name": "National Theater and New Scene is reopened", 
    "opt_c": 4, 
    "image": "events/National_Theater_and_New_Scene_is_reopened.jpg", 
    "cls": "events culture czech"
  }, 
  {
    "start": "01/01/1985", 
    "end": "31/01/1985", 
    "description": "", 
    "name": "Milo\u0161 Forman wins Oscar", 
    "opt_c": 3, 
    "image": "events/Milos_Forman_wins_Oscar.gif", 
    "cls": "events culture czech two"
  }, 
  {
    "start": "01/01/1985", 
    "end": "31/01/1985", 
    "description": "", 
    "name": "Last spartakiade", 
    "opt_c": 5, 
    "image": "events/Last_spartakiade.jpg", 
    "cls": "events culture czech"
  }, 
  {
    "start": "01/01/1985", 
    "end": "31/01/1985", 
    "description": "", 
    "name": "Wreck of the Titanic Found", 
    "opt_c": 0, 
    "image": "events/Wreck_of_the_Titanic_Found.jpg", 
    "cls": "events sciencetechnology world three"
  }, 
  {
    "start": "01/01/1985", 
    "end": "31/01/1991", 
    "description": "", 
    "name": "Mikhail Gorbachev is leader of the Soviet Union", 
    "opt_c": 4, 
    "image": "events/Mikhail_Gorbachev_is_leader_of_the_Soviet_Union2.jpg", 
    "cls": "events politics world three"
  }, 
  /*{
    "start": "01/01/1985", 
    "end": "31/01/1985", 
    "description": "", 
    "name": "Hole in the Ozone Layer Discovered", 
    "opt_c": 0, 
    "image": "events/Hole_in_the_Ozone_Layer_Discovered.jpg", 
    "cls": "events sciencetechnology world"
  }, */
  /*{
    "start": "01/01/1986", 
    "end": "31/01/1986", 
    "description": "", 
    "name": "Jeff Koons \u2013 Rabbit", 
    "opt_c": 3, 
    "image": "events/Jeff_Koons_Rabbit.jpg", 
    "cls": "events art world"
  }, */
   {
    "start": "01/01/1986", 
    "end": "31/01/1986", 
    "description": "", 
    "name": "Australia became independent of Britain", 
    "opt_c": 6, 
    "image": "events/politics_Australia_Day.jpg", 
    "cls": "events politics world"
  },
  {
    "start": "01/01/1986", 
    "end": "31/01/1986", 
    "description": "", 
    "name": "Chernobyl Nuclear Disaster", 
    "opt_c": 1, 
    "image": "events/Chernobyl_Nuclear_Disaster.jpg", 
    "cls": "events sciencetechnology world"
  }, 
  /*{
    "start": "01/01/1987", 
    "end": "31/01/1987", 
    "description": "", 
    "name": "Gorbachev and Reagan sign the INF Treaty", 
    "opt_c": 1, 
    "image": "events/Gorbachev_and_Reagan_sign_the_INF_Treaty.jpg", 
    "cls": "events politics world"
  }, */
  {
    "start": "01/01/1987", 
    "end": "31/01/1987", 
    "description": "", 
    "name": "\u0160koda Favorit is produced", 
    "opt_c": 3, 
    "image": "events/Skoda_Favorit_is_produced.jpg", 
    "cls": "events sciencetechnology czech"
  }, 
  {
    "start": "01/01/1988", 
    "end": "31/01/1988", 
    "description": "", 
    "name": "Jeff Koons \u2013 Michael Jackson and Bubbles X", 
    "opt_c": 3, 
    "image": "events/Jeff_Koons_Michael_Jackson_and_Bubbles.jpg", 
    "cls": "events art world"
  }, 
  {
    "start": "01/01/1989", 
    "end": "31/01/2003", 
    "description": "", 
    "name": "Havel president", 
    "opt_c": 1, 
    "image": "events/Havel_president.jpg", 
    "cls": "events politics czech"
  }, 
  {
    "start": "01/01/1989", 
    "end": "31/01/1989", 
    "description": "", 
    "name": "World Wide Web Invented", 
    "opt_c": 1, 
    "image": "events/World_Wide_Web_Invented.jpg", 
    "cls": "events sciencetechnology world"
  }, 
  {
    "start": "01/01/1989", 
    "end": "31/01/1989", 
    "description": "", 
    "name": "Berlin Wall Falls", 
    "opt_c": 5, 
    "image": "events/Berlin_Wall_Falls-08.jpg", 
    "cls": "events politics world"
  }, 
  {
    "start": "01/01/1989", 
    "end": "31/01/1989", 
    "description": "The result of Velvet Revolution was the end of 41 years of one-party rule in Czechoslovakia", 
    "name": "Velvet Revolution", 
    "opt_c": 2, 
    "image": "events/Velvet_Revolution-02.svg", 
    "cls": "events politics czech textual"
  }, 
  /*{
    "start": "01/01/1990", 
    "end": "31/01/1990", 
    "description": "", 
    "name": "Gottwaldow renamed back to Zlin", 
    "opt_c": 3, 
    "image": "events/Gottwaldow_renamed_back_to_Zlin.jpg", 
    "cls": "events politics czech"
  }, */

/*   1989  */

  {
    "start": "01/01/1990", 
    "end": "31/01/1990", 
    "description": "", 
    "name": "Hubble Space Telescope launch", 
    "opt_c": 1, 
    "image": "events89/technology_hubble.jpg", 
    "cls": "events sciencetechnology world"
  }, 
  /*{
    "start": "01/01/1990", 
    "end": "31/01/1990", 
    "description": "", 
    "name": "everybody learns english", 
    "opt_c": 1, 
    "image": "", 
    "cls": "events culture czech"
  }, */
  {
    "start": "01/01/1991", 
    "end": "31/01/1991", 
    "description": "", 
    "name": "Vysegrad fund assigned", 
    "opt_c": 0, 
    "image": "events/Vysegrad_fund_is_asigned.jpg", 
    "cls": "events politics"
  }, 
  {
    "start": "01/01/1991", 
    "end": "31/01/1991", 
    "description": "", 
    "name": "The Fall of the Soviet Union", 
    "opt_c": 5, 
    "image": "events89/politics_sovietUnion_collapse.jpg", 
    "cls": "events politics world"
  }, 
  {
    "start": "01/01/1992", 
    "end": "31/01/1992", 
    "description": "", 
    "name": "Maastricht Treaty creates the European Union", 
    "opt_c": 6, 
    "image": "events89/politics_eu.jpg", 
    "cls": "events politics world"
  }, 
  {
    "start": "01/01/1992", 
    "end": "31/01/1992", 
    "description": "", 
    "name": "1st internet connection", 
    "opt_c": 5, 
    "image": "events/1st_internet_connection.jpg", 
    "cls": "events sciencetechnology czech"
  }, 
  {
    "start": "01/01/1992", 
    "end": "31/01/1992", 
    "description": "", 
    "name": "1st McDonald restaurant", 
    "opt_c": 3, 
    "image": "events/1st_McDonald_restaurant.jpg", 
    "cls": "events culture czech"
  }, 
  /*{
    "start": "01/01/1990", 
    "end": "31/01/1993", 
    "description": "", 
    "name": "\u010cSFR", 
    "opt_c": 4, 
    "image": "", 
    "cls": "events politics czech"
  }, */
  {
    "start": "01/01/1993", 
    "end": "31/01/1993", 
    "description": "", 
    "name": "1st private TV station", 
    "opt_c": 0, 
    "image": "events/1st_private_TV_station.jpg", 
    "cls": "events culture czech"
  }, 
  /*{
    "start": "01/01/1993", 
    "end": "31/01/1993", 
    "description": "", 
    "name": "Czechs are member of Unesco", 
    "opt_c": 3, 
    "image": "", 
    "cls": "events politics czech"
  }, */
  {
    "start": "01/01/1994", 
    "end": "31/01/1994", 
    "description": "", 
    "name": "Galerie Rudolfinum opens", 
    "opt_c": 5, 
    "image": "", 
    "cls": "events culture czech"
  }, 
  {
    "start": "01/01/1994", 
    "end": "31/01/1994", 
    "description": "", 
    "name": "FAVU established", 
    "opt_c": 0, 
    "image": "", 
    "cls": "events culture czech"
  }, 
    {
    "start": "01/01/1997", 
    "end": "31/01/1997", 
    "description": "", 
    "name": "Mars Rover launched", 
    "opt_c": 6, 
    "image": "events89/technology_marsrover.jpg", 
    "cls": "events sciencetechnology world"
  }, 

  
  {
    "start": "01/01/1981", 
    "end": "31/01/1981", 
    "description": "Magdal\u00e9na Jetelov\u00e1", 
    "name": "\u017didle", 
    "opt_c": 1, 
    "image": "artworks/Jetelova.jpg", 
    "cls": "artworks"
  }, 
  {
    "start": "01/01/1983", 
    "end": "31/01/1983", 
    "description": "Judl Stanislav", 
    "name": "Lacetka", 
    "opt_c": 1, 
    "image": "artworks/Judl.jpg", 
    "cls": "artworks"
  }, 
  {
    "start": "01/01/1983", 
    "end": "31/01/1983", 
    "description": "Ivan  Kafka", 
    "name": "Zav\u011b\u0161en\u00ed", 
    "opt_c": 4, 
    "image": "artworks/Kafka_zaveseni.jpg", 
    "cls": "artworks"
  }, 
  {
    "start": "01/01/1984", 
    "end": "31/01/1984", 
    "description": "Jaroslav R\u00f3na", 
    "name": "Jaro na vsi", 
    "opt_c": 1, 
    "image": "artworks/Rona.jpg", 
    "cls": "artworks"
  }, 
  {
    "start": "01/01/1986", 
    "end": "31/01/1986", 
    "description": "Michal Gabriel", 
    "name": "Untitled", 
    "opt_c": 0, 
    "image": "artworks/Gabriel.jpg", 
    "cls": "artworks"
  }, 
  {
    "start": "01/01/1986", 
    "end": "31/01/1986", 
    "description": "Ji\u0159\u00ed Sopko", 
    "name": "Modr\u00fd jezdec", 
    "opt_c": 5, 
    "image": "artworks/Sopko.jpg", 
    "cls": "artworks"
  }, 
  {
    "start": "01/01/1987", 
    "end": "31/01/1987", 
    "description": "Petr Nikl", 
    "name": "Klub\u00e1n\u00ed", 
    "opt_c": 5, 
    "image": "artworks/Nikl.jpg", 
    "cls": "artworks"
  }, 
  {
    "start": "01/01/1987", 
    "end": "31/01/1987", 
    "description": "Michael Rittstein", 
    "name": "Zab\u00edja\u010dka", 
    "opt_c": 2, 
    "image": "artworks/Rittstein.jpg", 
    "cls": "artworks"
  }, 
  {
    "start": "01/01/1988", 
    "end": "31/01/1988", 
    "description": "Kurt Gebauer", 
    "name": "\u010cesk\u00fd rybn\u00edk", 
    "opt_c": 0, 
    "image": "artworks/Gebauer.jpg", 
    "cls": "artworks"
  }, 
  {
    "start": "01/01/1989", 
    "end": "31/01/1989", 
    "description": "Ji\u0159\u00ed Na\u010deradsk\u00fd", 
    "name": "Bora-Bora", 
    "opt_c": 0, 
    "image": "artworks/Naceradsky.jpg", 
    "cls": "artworks"
  }, 

/*   1989   */

{
    "start": "01/01/1993", 
    "end": "31/01/1993", 
    "description": "", 
    "name": "Czechoslovakia dissolution", 
    "opt_c": 4, 
    "image": "events89/politics_czechoslovakiadissolution.jpg", 
    "cls": "events politics czech"
},
{
    "start": "01/01/1994", 
    "end": "31/01/2000", 
    "description": "", 
    "name": "Jeff Koons – Baloon Dog", 
    "opt_c": 4, 
    "image": "events89/art_koons_dog.jpg", 
    "cls": "events art world"
},
{
    "start": "01/01/1995", 
    "end": "31/01/1996", 
    "description": "", 
    "name": "Name Jun Paik", 
    "opt_c": 6, 
    "image": "events89/art_namejunpaik.jpg", 
    "cls": "events art world"
},
{
    "start": "01/01/1999", 
    "end": "31/01/1999", 
    "description": "", 
    "name": "Czechia join NATO", 
    "opt_c": 6, 
    "image": "events89/politics_czechjoinedNATO.jpg", 
    "cls": "events politics czech"
},
{
    "start": "01/01/1999", 
    "end": "31/01/1999", 
    "description": "", 
    "name": "Google launch", 
    "opt_c": 4, 
    "image": "events89/culture_google.jpg", 
    "cls": "events culture world"
},
{
    "start": "01/01/2001", 
    "end": "31/01/2001", 
    "description": "", 
    "name": "World Trade Center and the Pentagon are attacked", 
    "opt_c": 4, 
    "image": "events89/politics_wtc.gif", 
    "cls": "events culture world zero"
},
{
    "start": "01/01/2002", 
    "end": "31/01/2002", 
    "description": "", 
    "name": "Euro is introduced", 
    "opt_c": 3, 
    "image": "events89/politics_euro.jpg", 
    "cls": "events politics world two"
},
{
    "start": "01/01/2003", 
    "end": "31/01/2011", 
    "description": "", 
    "name": "Iraq war", 
    "opt_c": 3, 
    "image": "events89/politics_iraqwar.jpg", 
    "cls": "events politics world"
},
{
    "start": "01/01/2004", 
    "end": "31/01/2004", 
    "description": "", 
    "name": "Czechia join EU", 
    "opt_c": 6, 
    "image": "events89/politics_czechjoinEU.jpg", 
    "cls": "events politics czech"
},
{
    "start": "01/01/2009", 
    "end": "31/01/2009", 
    "description": "", 
    "name": "Barack Obama becames president of USA", 
    "opt_c": 3, 
    "image": "events89/politics_obama.jpg", 
    "cls": "events politics world"
},
{
    "start": "01/01/2009", 
    "end": "31/01/2009", 
    "description": "", 
    "name": "Burj Khalifa is the tallest skyscraper", 
    "opt_c": 3, 
    "image": "events89/skyscraper_dubai.jpg", 
    "cls": "events art world"
},







];

