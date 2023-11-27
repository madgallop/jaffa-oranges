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
            title: "In the late 1800s, Jaffa emerged as a thriving hub for orange cultivation led by Palestinian farmers. As a major port and once the largest city in Palestine, Jaffa earned the title ‘Gateway to Palestine’ and became an important trade hub. The city's initial enduring prominence, surpassing that of nearby ports like Haifa and Beirut, stemmed from its strategic regional position and agricultural prosperity. Notably, Jaffa's growth relied on its belt of citrus gardens that encircled the city and reshaped the landscape. Local farmers invented the Shamouti variety of oranges, ideal for long-distance trade, leading to a quadrupling of Jaffa's orange groves between 1850 and 1880. By the end of the century, oranges had become Jaffa’s most profitable crop, establishing the Jaffa orange as Palestine's primary export. A small number of Palestinian farmers, (two-thirds of Arab and one-third Jewish), held vast expanses of Jaffa’s citrus groves, defining the landscape with large, unfragmented orchards prior to WWII.",
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
            title: 'In the era of collaboration, spanning the 1920s to the 1940s, the orange industry evolved amidst cooperation between Palestinian and Jewish farmers under the British Mandate. During this time, the orange groves extended further from the old town center as Jewish settlers arrived, enriching the agricultural landscape with diverse perspectives. However, as exports skyrocketed, the groves also became more fragmented, reflecting the changing dynamics of this unique period.',
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
            title: 'In the Israeli ownership era, from the 1950s to the 1970s, the orange industry saw a shift towards total Israeli control. The Jaffa port closed in 1969 and exports dropped.',
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
                {
                    layer: 'jafffa-orange-groves',
                    opacity: 0
                }
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Destruction',
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
                    layer: 'jaffa_building_footprints',
                    //filter:                  
                    opacity: 1,
                    //duration: 5000,
                }
            ],
            onChapterExit: [
                {
                    layer: 'jaffa_building_footprints',
                    opacity: 0
                }
            ]
        }
    ]
};
