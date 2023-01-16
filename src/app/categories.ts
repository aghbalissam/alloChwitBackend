const listRest = [
    {
      id : 243252,
      name : 'Restaurant 1',
      slogan : 'restaurant-1',
      city : 'rabat',
      image : 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Pizza','Tacos'],
      time : '20-30 min',
      shipping : '5,00$',
      rating : '83%(500+)',
      type : 'restaurant',
      days : 'Lundi - Dimanche',
      hours : '09:00 - 18:00',
      menus : [
        {
          title : 'Petit Déjeuner',
          list : [
            {
              name : "Brunch",
              description : '',
              price : 20
            },
            {
              name : "Petit Déjeuner Gourmand",
              description : '',
              price : 22
            },
            {
              name : "Petit Déjeuner Américain",
              description : '',
              price : 14
            },
            {
              name : "Petit Déjeuner Beldi",
              description : '',
              price : 10
            },
            {
              name: "Petit Déjeuner Marocain",
              description : '',
              price : 7
            }
          ]
        },
        {
          title : 'Entrées Froides',
          list : [
            {
              name : "Formule Mezzes Froides",
              description : '',
              price : 14             
            },
            {
              name : "Feuilles De Vigne",
              description : '',
              price : 18
            },
            {
              name : "Taboulé",
              description : '',
              price : 21
            },
            {
              name : "Moutabal",
              description : '',
              price : 19
            },
            {
              name : "Baba Ghanouj",
              description : '',
              price : 7
            }
          ]
        },
        {
          title : 'Entrées Chaudes',
          list : [
            {
              name : "Formule Mezzes Chaudes",
              description : '',
              price : 12
            },
            {
              name : "Kebbé Makliye",
              description : '',
              price : 4
            },
            {
              name : "Arayes Kefta",
              description : '',
              price : 19
            },
            {
              name : "Samboussek Viande",
              description : '',
              price : 25
            },
            {
              name : "Samboussek Fromage",
              description : '',
              price : 30
            }
          ]
        }
      ]
    },
    {
      id : 56855,
      name : 'Restaurant 2',
      slogan : 'restaurant-2',
      city : 'sale',
      image : 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Pizza','Chicken'],
      time : '20-30 min',
      shipping : '5,00$',
      rating : '83%(500+)',
      type : 'cafe',
      days : 'Lundi - Dimanche',
      hours : '09:00 - 18:00',
      menus: 
      [
        {
          title : 'Pizzas',
          list : [
            {
              name: "Pizza Chicken",
              description : '',
              price : 20
            },
            {
              name: "Pizza Quatre Fromages",
              description : '',
              price : 22
            },
            {
              name: "Pizza Fruits De Mer",
              description : '',
              price : 14
            },
            {
              name: "Pizza Arizon",
              description : '',
              price : 10
            },
            {
              name: "Pizza Thon",
              description : '',
              price : 7
            }
          ]
        },
        {
          title : 'Pâtes',
          list : [
            {
              name: "Pâtes Fruits De Mer",
              description : '',
              price : 20
            },
            {
              name: "Pâtes Poulet Champignons",
              description : '',
              price : 22
            },
            {
              name: "Pâtes Bolognaise",
              description : '',
              price : 14
            },
            {
              name: "Pâtes Quatre Fromages",
              description : '',
              price : 10
            },
            {
              name: "Pâtes Carbonara",
              description : '',
              price : 7
            }
          ]
        },
        {
          title : 'Tacos Gratinés',
          list : [
            {
              name: "Tacos Gratiné Buffalo",
              description : '',
              price : 20
            },
            {
              name: "Tacos Gratiné Parisien",
              description : '',
              price : 22
            },
            {
              name: "Tacos Gratiné Forestière",
              description : '',
              price : 14
            },
            {
              name: "Tacos Gratiné Calamar",
              description : '',
              price : 10
            },
            {
              name: "Tacos Gratiné Cordon Bleu",
              description : '',
              price : 7
            }
          ]
        }
      ]
    },
    {
      id : 345347,
      name : 'Restaurant 3',
      slogan : 'restaurant-3',
      city : 'sale',
      image : 'https://images.pexels.com/photos/992822/pexels-photo-992822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Pizza','Tacos'],
      time : '20-30 min',
      shipping : '5,00$',
      rating : '83%(500+)',
      type : 'restaurant',
      days : 'Lundi - Dimanche',
      hours : '09:00 - 18:00',
      menus: [
        {
          title : 'Burgers',
          list : [
            {
              name: "TRIPLE CHEESE BURGER",
              description : '',
              price : 20
            },
            {
              name: "DOUBLE CHEESE BURGER",
              description : '',
              price : 22
            },
            {
              name: "CHICKEN BURGER",
              description : '',
              price : 14
            },
            {
              name: "SPICY CHICKEN BURGER",
              description : '',
              price : 10
            },
            {
              name: "Tacos Gratiné Cordon Bleu",
              description : '',
              price : 7
            },
            {
              image : 'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/fhxgyuc0i8rlbrh7mwst',
              name : 'Chicken Nuggets 4 pcs',
              price : 25,
              elementSup : [
                {
                  title :'item 1',
                  items :[
                    {
                      productName : 'Product xxxx',
                      productPrice : 10
                    },
                    {
                      productName : 'Product yyyy',
                      productPrice : 12
                    }
                  ]
                },
                {
                  title :'item 2',
                  items :[
                    {
                      productName : 'Product bbbbb',
                      productPrice : 10
                    },
                    {
                      productName : 'Product ddddd',
                      productPrice : 12
                    },
                    {
                      productName : 'Product jjjj',
                      productPrice : 7
                    }
                  ]
                },
                {
                  title :'item 3',
                  items :[
                    {
                      productName : 'Product aaaaa',
                      productPrice : 10
                    },
                    {
                      productName : 'Product zzzzz',
                      productPrice : 12
                    }
                  ]
                },
                {
                  title :'item 4',
                  items :[
                    {
                      productName : 'Product mmmm',
                      productPrice : 10
                    },
                    {
                      productName : 'Product ssss',
                      productPrice : 12
                    },
                    {
                      productName : 'Product rrrr',
                      productPrice : 9
                    }
                  ]
                },
                {
                  title :'item 5',
                  items :[
                    {
                      productName : 'Product ffff',
                      productPrice : 10
                    },
                    {
                      productName : 'Product xxxx',
                      productPrice : 12
                    }
                  ]
                },
                {
                  title :'item 6',
                  items :[
                    {
                      productName : 'Product oooo',
                      productPrice : 10
                    },
                    {
                      productName : 'Product pppp',
                      productPrice : 12
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title : 'Promos Shake Bun',
          list : [
            {
              name: "1 double cheese burger + 1 coca",
              description : '',
              price : 20
            },
            {
              name: "1 cheese burger + 1 coca",
              description : '',
              price : 22
            },
            {
              name: "1 chicken burger + 1 coca",
              description : '',
              price : 14
            } 
          ]
        },
      ]

    },
    {
      id : 124151,
      name : 'Restaurant 4',
      slogan : 'restaurant-4',
      city : 'rabat',
      image : 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Chicken','Italian'],
      time : '20-30 min',
      shipping : '5,00$',
      rating : '83%(500+)',
      type : 'restaurant',
      days : 'Lundi - Dimanche',
      hours : '09:00 - 18:00',
      menus: [
        {
          title : 'Pizzas',
          list : [
            {
              name: "Pizza Mixte",
              description : '',
              price : 20
            },
            {
              name: "Pizza Thon",
              description : '',
              price : 22
            },
            {
              name: "Pizza Hot Dog",
              description : '',
              price : 14
            },
            {
              name: "Pizza Charcuterie",
              description : '',
              price : 22
            },
            {
              name: "Pizza Végétarienne",
              description : '',
              price : 14
            }  
          ]
        },
        {
          title : 'Sandwichs',
          list : [
            {
              name: "Sandwich Viande Hachée",
              description : '',
              price : 20
            },
            {
              name: "Sandwich Dinde",
              description : '',
              price : 22
            },
            {
              name: "Sandwich Mixte",
              description : '',
              price : 14
            },
            {
              name: "Sandwich Thon",
              description : '',
              price : 22
            },
            {
              name: "Sandwich Omelette",
              description : '',
              price : 14
            },
            {
              name: "Sandwich Hot Dog",
              description : '',
              price : 14
            }  
          ]
        },
      ]

    },
    {
      id : 121241,
      name : 'Restaurant 5',
      slogan : 'restaurant-5',
      city : 'sale',
      image : 'https://images.pexels.com/photos/299410/pexels-photo-299410.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Pizza','Tacos'],
      time : '20-30 min',
      shipping : '5,00$',
      rating : '83%(500+)',
      type : 'restaurant',
      days : 'Lundi - Dimanche',
      hours : '09:00 - 18:00',
      menus: 
      [
        {
          title : "Toscan'a gratiné",
          list : [
            {
              image : 'https://res.cloudinary.com/glovoapp/w_600,f_auto,q_auto/Products/zyvfqsm52jshlyfysf82',
              name : "Toscan'a Crispy Mix",
              description : '',
              price : 25,
            }
          ]
        },
      ]
    },
    {
      id : 766867,
      name : 'Restaurant 6',
      slogan : 'restaurant-6',
      city : 'casablanca',
      image : 'https://images.pexels.com/photos/879201/pexels-photo-879201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Moroccan','Tacos'],
      time : '20-30 min',
      shipping : '5,00$',
      rating : '83%(500+)',
      type : 'restaurant',
      days : 'Lundi - Dimanche',
      hours : '09:00 - 18:00',
      menus: []
    },
    {
      id : 3434634,
      name : 'Restaurant 7',
      slogan : 'restaurant-7',
      city : 'rabat',
      image : 'https://images.pexels.com/photos/2741448/pexels-photo-2741448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Italian','Tacos'],
      time : '20-30 min',
      shipping : '5,00$',
      rating : '83%(500+)',
      type : 'cafe',
      days : 'lundi - Dimanche',
      hours : '09:00 - 18:00',
      menus: []
    },
    {
      id : 124124,
      name : 'Restaurant 8',
      slogan : 'restaurant-8',
      city : 'casablanca',
      image : 'https://images.pexels.com/photos/2741458/pexels-photo-2741458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Traditional','Tacos'],
      time : '20-30 min',
      shipping : '5,00$',
      rating : '83%(500+)',
      type : 'restaurant',
      days : 'Lundi - Dimanche',
      hours : '09:00 - 18:00',
      menus: []
    },
    {
      id : 987887,
      name : 'Restaurant 9',
      slogan : 'restaurant-9',
      city : 'sale',
      image : 'https://images.pexels.com/photos/2291603/pexels-photo-2291603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Crêpes','Petit-déjeuner'],
      time : '20-30 min',
      shipping : '5,00$',
      rating : '83%(500+)',
      type : 'cafe',
      days : 'Lundi - Dimanche',
      hours : '09:00 - 18:00',
      menus: 
      [
        {
          title : 'Petits Déjeuners',
          list : [
            {
              name: "Petit Déjeuner Express",
              description : '',
              price : 20
            },
            {
              name: "Petit Déjeuner Beldi",
              description : '',
              price : 22
            },
            {
              name: "Omelette Nature + Petite Salade",
              description : '',
              price : 14
            },
            {
              name: "Croissant",
              description : '',
              price : 10
            },
            {
              name: "Pain au Chocolat",
              description : '',
              price : 7
            }
          ]
        },
        {
          title : 'Brunchs',
          list : [
            {
              name: "Brunch Fin De Faim",
              description : '',
              price : 20
            },
            {
              name: "Brunch Norvégien",
              description : '',
              price : 22
            },
            {
              name: "Brunch Healthy",
              description : '',
              price : 14
            }
          ]
        },
      ]
    },
    {
      id : 2352323,
      name : 'Restaurant 10',
      slogan : 'restaurant-10',
      city : 'casablanca',
      image : 'https://images.pexels.com/photos/5807021/pexels-photo-5807021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Pizza','Lebanese'],
      time : '20-30 min',
      shipping : '5,00$',
      rating : '83%(500+)',
      type : 'restaurant',
      days : 'Lundi - Dimanche',
      hours : '09:00 - 18:00',
      menus: []
    },
    {
      id : 232352,
      name : 'Restaurant 11',
      slogan : 'restaurant-11',
      city : 'fes',
      image : 'https://images.pexels.com/photos/1707917/pexels-photo-1707917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories : ['Pizza','Tacos'],
      time : '20-30 min',
      shipping : '5,00$',
      rating : '83%(500+)',
      type : 'restaurant',
      days : 'Lundi - Dimanche',
      hours : '09:00 - 18:00',
      menus : []
    }
  ]

export default listRest;