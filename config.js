var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiYW1hbjkzMDIiLCJhIjoiY2xoZWp6MnJ5MHhoaTNkcDQ4ZmNicDVwcSJ9.TcENWvp8nAzTT2qzzp_OFg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Breathing in India',
    subtitle: "Explore the Air Pollution in India's Regions on an Interactive Map",
    byline: 'By Aman Nair',
    chapters: [
        {
            id: 'Intro',
            alignment: 'left',
            hidden: false,
            title: "India's Battle Against Air Pollution",
            description: "Air pollution is a major issue in India, affecting the health and wellbeing of millions of people. From industrial emissions to vehicular traffic and crop burning, there are numerous sources of pollution that contribute to the problem. The impact of air pollution is felt most acutely in urban areas, where the concentration of pollutants can be dangerously high. This section explores the causes and consequences of air pollution in India, as well as the steps being taken to address the issue.",
            location: {
                center: [78.58653, 22.14157],
                zoom: 2.0,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Intro',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Intro',
                    opacity: 0
                }
            ]
        },
        {
            id: 'India',
            alignment: 'left',
            hidden: false,
            title: 'India',
            description: 'Air pollution in India is a growing concern, with the country consistently ranking among the top nations with the worst air quality. In fact, according to the World Health Organization, 14 out of the 15 most polluted cities in the world are in India. This problem has far-reaching consequences, affecting the health and wellbeing of millions of people across the country. Studies show that air pollution is responsible for a significant increase in respiratory diseases, heart diseases, and even premature deaths. The situation demands immediate attention and action from individuals, corporations, and the government to reduce air pollution levels and ensure a healthier future for all.',
            question: 'What is the leading source of air pollution in India?',
            location: {
                center: [78.58653, 22.14157],
                zoom: 4.0,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'India',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'India',
                    opacity: 0
                }
            ]
        },
        {
            id: 'New-Delhi',
            alignment: 'left',
            hidden: false,
            title: 'New Delhi',
            description: "New Delhi, the bustling capital of India, has been struggling with severe air pollution for many years. In fact, it is often referred to as the most polluted city in the world. The air quality in Delhi is so poor that it is equivalent to smoking almost 50 cigarettes a day. According to recent data, the levels of PM2.5 (fine particulate matter) in Delhi's air are 10 times higher than the World Health Organization's recommended safe level. This has led to an increase in respiratory diseases, lung cancer, and heart attacks among its citizens. It's time for us to take action and work towards creating a cleaner and healthier environment for ourselves and future generations.",
            question: 'What is the leading source of air pollution in India?',
            location: {
              center: [77.19464, 28.60891],
              zoom: 7.30,
              pitch: 0,
              bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'New-Delhi',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'New-Delhi',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Mumbai',
            alignment: 'left',
            hidden: false,
            title: 'Mumbai',
            description: "Mumbai is unfortunately living a nightmare when it comes to air pollution. With over 22 million people and countless industries, the air quality in Mumbai is a major concern for its residents. According to recent data, Mumbai has recorded PM2.5 levels that are 4 times higher than the national safe limit. With such alarming statistics, it's crucial that we take action to reduce pollution in this vibrant city.",
            location: {
                center: [72.88193, 19.07370],
                zoom: 9.10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Mumbai',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Mumbai',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Ahmedabad',
            alignment: 'left',
            hidden: false,
            title: 'Ahmedabad',
            description: "Ahmedabad, located in the western state of Gujarat, is no stranger to air pollution. According to the World Air Quality Report, Ahmedabad was ranked as the fifth-most polluted city in India in 2020. The main sources of air pollution in Ahmedabad include vehicle emissions, industrial pollution, and construction dust. The city's high temperatures and low wind speeds also contribute to the buildup of pollution. The air pollution problem in Ahmedabad is so severe that the Gujarat Pollution Control Board has identified over 600 air-polluting industries in the city.",
            location: {
                center: [72.59103, 22.99602],
                zoom: 8.00,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Ahmedabad',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Ahmedabad',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Kolkata',
            alignment: 'left',
            hidden: false,
            title: 'Kolkata',
            description: "Kolkata is unfortunately not immune to India's air pollution crisis. With a population of over 14 million people, Kolkata's air is heavily polluted due to a variety of sources, including industrial emissions, vehicular traffic, and construction activity. According to the Central Pollution Control Board, Kolkata's Air Quality Index (AQI) often reaches hazardous levels during the winter months, with levels of PM2.5 particulate matter being a major concern. A recent study found that Kolkata has the highest concentration of PM2.5 among all major Indian cities.",
            location: {
                center: [88.31739, 22.56129],
                zoom: 7.40,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Kolkata',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Kolkata',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Bhopal',
            alignment: 'left',
            hidden: false,
            title: 'Bhopal',
            description: "Bhopal, located in central India, has been experiencing severe air pollution in recent years. The city's industrial growth and increasing population have led to a rise in emissions from factories, vehicles, and other sources. According to a recent report, Bhopal's air quality is 12 times worse than the World Health Organization's recommended levels. This has led to an increase in respiratory illnesses among the city's residents, particularly children and the elderly.",
            location: {
                center: [77.40269, 23.25731],
                zoom: 7.50,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Bhopal',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Bhopal',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Raipur',
            alignment: 'left',
            hidden: false,
            title: 'Raipur',
            description: "Raipur has been experiencing a significant increase in air pollution levels in recent years. According to data from the Central Pollution Control Board, Raipur's air quality index (AQI) in 2020 was consistently above 150, which is considered unhealthy. The main contributors to air pollution in Raipur are transportation and industrial activities, including thermal power plants and steel factories. In addition, during the winter months, the city experiences a phenomenon known as inversion, where the cold air gets trapped near the surface, trapping pollutants and exacerbating the problem.",
            location: {
                center: [81.63242, 21.22824],
                zoom: 7.50,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Raipur',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Raipur',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Chennai',
            alignment: 'left',
            hidden: false,
            title: 'Chennai',
            description: "Chennai has been grappling with the problem of air pollution in recent years. The city's air quality has been deteriorating due to industrial emissions, vehicular traffic, and construction activities. According to recent data, Chennai's Air Quality Index (AQI) has been consistently above the safe limit, with PM2.5 and PM10 levels being the major contributors. The city has also been experiencing an increase in cases of respiratory illnesses and other health problems due to poor air quality.",
            location: {
                center: [80.26132, 13.08160],
                zoom: 7.50,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Chennai',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Chennai',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Punjab',
            alignment: 'left',
            hidden: false,
            title: 'Punjab',
            description: "Punjab is facing a significant air pollution problem due to stubble burning after the rice harvest season. The state has some of the highest levels of PM2.5 pollution in the country, with cities like Amritsar, Ludhiana, and Jalandhar experiencing hazardous air quality levels during peak seasons. The problem is compounded by industrial pollution and vehicular emissions in urban areas. According to studies, air pollution in Punjab is responsible for a significant increase in respiratory illnesses and a decline in life expectancy.",
            location: {
                center: [75.52254, 30.80143],
                zoom: 7.10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Punjab',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Punjab',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Haryana',
            alignment: 'left',
            hidden: false,
            title: 'Haryana',
            description: "Haryana is also grappling with the growing problem of air pollution. According to a report by the Central Pollution Control Board (CPCB), the state's air quality index (AQI) has been consistently crossing the 'poor' mark, especially during winter months. Industrial emissions, vehicular traffic, and stubble burning are some of the major contributors to air pollution in Haryana. The city of Faridabad in Haryana has been listed among the top 10 most polluted cities in the world by the World Health Organization (WHO).",
            location: {
                center: [76.30300, 29.40316],
                zoom: 7.10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Haryana',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Haryana',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Uttar-Pradesh',
            alignment: 'left',
            hidden: false,
            title: 'Uttar Pradesh',
            description: "Uttar Pradesh is a state in northern India with a rapidly growing population and industrial sector, contributing to its air pollution challenges. In particular, the cities of Lucknow and Kanpur have been identified as hotspots for air pollution, with high levels of particulate matter and nitrogen dioxide. Agricultural activities like stubble burning and dust from construction sites also contribute to the problem. According to recent data, air pollution in Uttar Pradesh is responsible for approximately 15% of the state's annual deaths, highlighting the urgent need for effective solutions to address this growing public health concern.",
            location: {
                center: [80.65682, 27.24573],
                zoom: 6.10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Uttar-Pradesh',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Uttar-Pradesh',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Jharkhand',
            alignment: 'left',
            hidden: false,
            title: 'Jharkhand',
            description: "Jharkhand is known for its rich natural resources, but unfortunately, air pollution is a growing problem. The state's major sources of air pollution include mining and industrial activities, as well as transportation. In 2020, Jharkhand had an average PM2.5 concentration of 54.9 micrograms per cubic meter, which is higher than the national safe limit of 40 micrograms per cubic meter.",
            location: {
                center: [85.17410, 23.44618],
                zoom: 6.80,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Jharkhand',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Jharkhand',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Conclusion',
            alignment: 'left',
            hidden: false,
            title: 'Conclusion',
            description: "After analyzing the data, it is clear that air pollution is a significant problem in India. The high levels of particulate matter, nitrogen oxide, and sulfur dioxide in many cities pose a severe risk to the health of residents and the environment. Although steps have been taken to address this issue, such as the implementation of the National Clean Air Program, more needs to be done to ensure that air pollution levels decrease and remain at safe levels. It is crucial that policymakers, industries, and individuals take responsibility and make concerted efforts to reduce air pollution for the well-being of the country and its people.",
            location: {
                center: [78.58653, 22.14157],
                zoom: 4.00,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'Conclusion',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'Conclusion',
                    opacity: 0
                }
            ]

        },
        {
            id: 'quiz-chapter',
            alignment: 'center',
            title: 'Quiz',
            description: 'Take this quiz to test your knowledge!',
            image: './images/quiz.jpg',
            location: {
                center: [78.58653, 22.14157],
                zoom: 4.0,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                {
                    layer: 'quiz-chapter',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'quiz-chapter',
                    opacity: 0
                }
            ],
            html: '<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfpmx17EwVS6cSiYul7K5ZU4UPU9VDZHg84wg0KrBj96TjXhQ/viewform?embedded=true" width="640" height="1800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>'
        }
    ]
};