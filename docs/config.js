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
            id: 'inset-intro',
            alignment: 'left',
            hidden: false,
            // title: "",
            //image: './path/to/image/source.png',
            // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [34.72776, 32.05656],
                zoom: 5,
                pitch: 0.00,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'jafffa-orange-groves',
                    type: 'fill',
                    //filter: 
                    opacity: [
                        "match",
                        ["get", "year"],
                        ["1918"],
                        0,
                        ["1943"],
                        0,
                        ["1958"],
                        0,
                        0
                    ],
                    //duration: 5000,
                },
                {
                    layer: 'jafffa-orange-circle-fills',
                    type: 'fill',
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
                    ]
                },
                {
                    layer: 'jafffa-orange-circle-fills',
                    type: 'fill',
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
                    ]
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Late 19th Century - World War I',
            //image: './path/to/image/source.png',
            description: "In the late 1800s, Jaffa thrived as a prominent hub for orange cultivation, <span style='color: #9da47f'>led by Palestinian farmers.</span> Jaffa’s surrounding belt of citrus groves propelled its growth, rendering the city the “Gateway to Palestine.” The invention of the Jaffa variety fueled a fourfold increase in Jaffa's groves by 1880, and <span style='color: #D3A67F'>the orange became Palestine’s primary export.</span> Prior to World War I, Jaffa’s citrus groves were large and unfragmented.<br><br><span style='color: #9da47f; font-weight: bold'>Grove area in 1918: 6,191 acres</span><br><span style='color:#A0835F; font-weight: bold; opacity: 0.7'>Oranges exported in 1918: 1.5 million boxes</span>",
            button: 'Click to show/hide primary source materials',
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
                    type: 'fill',
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
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title:  'Interwar Period',
            description: "During the interwar period, <span style='color: #7E8DA3'>a surge in Jewish migration to Jaffa</span> led to a shift in orange grove ownership, with <span style='color: #7E8DA3'>Jewish-owned groves</span> surpassing <span style='color: #9da47f'>Arab-owned groves</span> by 1933. Despite increasing political tensions, Arab and Jewish farmers collaborated, fueling industry growth. This era marked the golden age for the Jaffa orange, but the industry's expansion led to fragmented groves, moving production away from Jaffa's core and signaling a shift away from Palestinian ownership.<br><br><span style='color: #9da47f; font-weight: bold'>Grove area in 1943: 6,648 acres</span><br><span style='color:#A0835F; font-weight: bold; opacity: 0.7'>Oranges exported in 1943: 15.3 million boxes</span>",
            button: 'Click to show/hide primary source materials',
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
                    type: 'fill',
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
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'After World War II and the 1948 Nakba',
            //image: './path/to/image/source.png',
            description: "Following Israel’s establishment and the Nakba of 1948, militias expelled most of Jaffa’s Arab-Palestinian residents, leaving only 4,000 to 5,000 of the original 70,000. <span style='color: #7E8DA3'>Israel assumed control of groves abandoned by fleeing Palestinians</span> and rebranded the Jaffa orange as a nationalist emblem of homeland prosperity. Tel Aviv's expansion further distanced citrus groves from Jaffa, and exports never matched the collaborative interwar period, and the once-thriving industry began to decline. <br><br><span style='color: #9da47f; font-weight: bold'>Grove area in 1958: 2,156 acres</span><br><span style='color:#A0835F; font-weight: bold; opacity: 0.7'>Oranges exported in 1958: 1.4 million boxes</span>",
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
                    type: 'fill',
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
                    type: 'fill',
                    //filter:                  
                    opacity: 0, // Start with 0 opacity
                    duration: 0, // Duration of 1 second (in milliseconds) for fade-in
                },
                {
                    layer: 'betterExportLines',
                    type: 'line',
                    //filter:                  
                    opacity: 1,
                    //duration: 5000,
                },
                {
                    layer: 'points',
                    type: 'symbol',
                    opacity:  [
                        "match",
                        ["get", "label"],
                        ["Jaffa Port"],
                        1,
                        1
                      ],
                },
                {
                    layer: 'Place-Labels',
                    type: 'symbol',
                    opacity: [
                        "match",
                        ["get", "class"],
                        ["town"],
                        1,
                        1,
                    ]
                }
            ],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Late 1970s - Today',
            //image: './path/to/image/source.png',
            description: "In 1965, Jaffa’s historic port closed permanently, and Israel reconstructed Jaffa as a 'traditional' enclave of Tel Aviv. By the 1980s, Israel's citrus industry plummeted. Rising real estate costs prompted farmers to sell their groves, while urbanization replaced agriculture. Simultaneously, the Jaffa orange faced intense competition and restrictive trade limitations. Israeli urbanization ultimately erased Jaffa’s symbolic orange groves, leaving behind only their memory.",
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
                    type: 'fill',
                    //filter:                  
                    opacity: [
                        "match",
                        ["get", "year"],
                        ["1918"],
                        0,
                        ["1943"],
                        0,
                        ["1958"],
                        0,
                        0
                    ],
                    //duration: 5000,
                },
                {
                    layer: 'jaffa_building_footprints',
                    type: 'fill',
                    //filter:                  
                    opacity: 1, // Start with 0 opacity
                    duration: 2000, // Duration of 1 second (in milliseconds) for fade-in
                    easing: 'ease-in' // Use the ease timing function for a smoother transition
                },
                {
                    layer: 'betterExportLines',
                    type: 'line',
                    //filter:                  
                    opacity: 0,
                    //duration: 5000,
                },
                {
                    layer: 'points',
                    type: 'symbol',
                    opacity:  [
                        "match",
                        ["get", "label"],
                        ["Jaffa Port"],
                        0,
                        1
                      ],
                },
                {
                    layer: 'Place-Labels',
                    type: 'symbol',
                    opacity: [
                        "match",
                        ["get", "class"],
                        ["town"],
                        0,
                        1,
                    ]
                }
                
                    //duration: 5000,
            ],
            onChapterExit: []
        }
    ]
};
