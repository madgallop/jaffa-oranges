var config = {
    style: 'mapbox://styles/madgallop/clnz2tn5q009o01qpginjcvyx',
    accessToken: 'pk.eyJ1IjoibWFkZ2FsbG9wIiwiYSI6ImNsbmhzYzVnajE4eWsybm51bG43bjhuZWUifQ.PAvoy0phwrKGWDEBf75VSA',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'THE PERFECT BITE',
    subtitle: "Growth and demise of the orange groves of Jaffa",
    byline: 'Madeleine Gallop',
    // footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: "In the late 1800s, Jaffa emerged as a thriving hub for orange cultivation led by Palestinian farmers. As a major port and once the largest city in Palestine, Jaffa earned the title ‘Gateway to Palestine’ and became an important trade hub. The city's initial enduring prominence, surpassing that of nearby ports like Haifa and Beirut, stemmed from its strategic regional position and agricultural prosperity. \n\nNotably, Jaffa's growth relied on its belt of citrus gardens that encircled the city and reshaped the landscape. Local farmers invented the Shamouti variety of oranges, ideal for long-distance trade, leading to a quadrupling of Jaffa's orange groves between 1850 and 1880. By the end of the century, oranges had become Jaffa’s most profitable crop, establishing the Jaffa orange as Palestine's primary export. \nA small number of Palestinian farmers, (two-thirds of Arab and one-third Jewish), held vast expanses of Jaffa’s citrus groves, defining the landscape with large, unfragmented orchards prior to WWII.",
            //image: './path/to/image/source.png',
            // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [34.72776, 32.05656],
                zoom: 12.3,
                pitch: 0.00,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'jafffa-orange-groves',
                    //filter: 
                    opacity: [
                        "match",
                        ["get", "year"],
                        ["1918"],
                        1,
                        ["1943"],
                        0,
                        ["1958"],
                        0,
                        0
                    ],
                    //duration: 5000,
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'jafffa-orange-groves',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: "The number of Jewish settlers increased in the interwar period and by 1933, Jewish-owned orange production surpassed Arab-owned production, marking a shift in ownership. Despite mounting political tensions, Arab and Jewish farmers coexisted and collaborated, facilitating the expansion of the industry. \n\nThe interwar period thus became the golden era of the Jaffa orange. The industry experienced unprecedented growth and orange exports skyrocketed from 2 million to 15 million boxes. As the number of farmers increased, the once-unified orange groves became more fragmented. Production expanded into groves farther from Jaffa's center, with fewer groves in the town's proximity. The collaborative, interwar period marked the peak of industry productivity, yet the gradual shift of citrus groves away from Palestinian ownership hinted at the looming losses to come.",
            //image: './path/to/image/source.png',
            //description: 'Copy these sections to add to your story.',
            location: {
                center: [34.72776, 32.05656],
                zoom: 12.3,
                pitch: 0.00,
                bearing: 0.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'jafffa-orange-groves',
                    //filter:                  
                    opacity: [
                        "match",
                        ["get", "year"],
                        ["1918"],
                        0,
                        ["1943"],
                        1,
                        ["1958"],
                        0,
                        0
                    ],
                    //duration: 5000,
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'jafffa-orange-groves',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: "After Israel’s establishment, Zionist militias forcibly expelled the majority of Jaffa’s Arab residents during the Nakba (Catastrophe) of 1948, leaving only a fraction of the original population—4,000 to 5,000 out of 70,000. The State of Israel took control of abandoned orange groves left by fleeing Palestinians, considering them 'abandoned assets,' as well as groves belonging to Palestinians who remained in Jaffa. Israel aimed to revive the industry and by the early 1970s, exported approximately 1 million tons annually. But despite rebranding the Jaffa orange as a symbol of idyllic kibbutz life, celebrated in various advertisements and art forms, exports remained a mere fraction of the collaborative interwar period.\n\nAs Tel Aviv expanded, citrus groves moved farther from Jaffa, marking a significant departure from the once-thriving, cooperative industry. The symbolism of the Jaffa orange shifted—from initially representing Palestinian land to signifying Jewish-Arab collaboration to ultimately becoming a symbol of displacement and dispossession for Palestinians.",
            //image: './path/to/image/source.png',
            //description: 'Copy these sections to add to your story.',
            location: {
                center: [34.72776, 32.05656],
                zoom: 12.3,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'jafffa-orange-groves',
                    //filter:                  
                    opacity: [
                        "match",
                        ["get", "year"],
                        ["1918"],
                        0,
                        ["1943"],
                        0,
                        ["1958"],
                        1,
                        0
                    ],
                    //duration: 5000,
                },
                {
                    layer: 'jaffa_building_footprints',
                    opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'jafffa-orange-groves',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: "In 1965, Jaffa’s historic port closed permanently, and Israel reconstructed the devastated area, shaping it as a 'traditional' and 'historic' corner of Tel Aviv. By the 1980s, Israel's citrus industry entered its final decline. Escalating real estate values drove farmers to sell their groves, while a shift away from agriculture toward urbanization curtailed productivity. Concurrently, the iconic Jaffa orange grappled with intense competition and restrictive trade agreements. But ultimately, Israeli urbanization wiped out the last of Jaffa’s symbolic orange groves, marking the final blow to an industry once deeply rooted in the region's identity.",
            //image: './path/to/image/source.png',
            //description: 'Copy these sections to add to your story.',
            location: {
                center: [34.72776, 32.05656],
                zoom: 12.3,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'jafffa-orange-groves',
                    opacity: 0
                },
                {
                    layer: 'jaffa_building_footprints',
                    //filter:                  
                    opacity: 1, // Start with 0 opacity
                    duration: 5000, // Duration of 1 second (in milliseconds) for fade-in
                    easing: 'ease-in' // Use the ease timing function for a smoother transition
                }
                    //duration: 5000,
            ],
            onChapterExit: [
                {
                    layer: 'jaffa_building_footprints',
                    visibility: 'none', // Remove the layer immediately
                    opacity: 0
                }
            ]
        }
    ]
};
