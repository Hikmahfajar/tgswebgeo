var config = {
    style: 'mapbox://styles/hfassidiq/cka914eio1kp41iljqysqm3w2',
    accessToken: 'pk.eyJ1IjoiaGZhc3NpZGlxIiwiYSI6ImNrYTJveG45bzBjZTgzdHBuejN1MjN3YTYifQ.IuW5fXUEKc71VVvJ0JTXxg',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'MOBILITAS PENDUDUK DI 5 KASUS TERTINGGI COVID - 19',
    subtitle: 'Dinamika di masyarakat dalam menanggapi kebijakan untuk menghadapi COVID-19.',
    byline: 'Dibuat : Hikmah Fajar Assidiq',
    footer: 'TUGAS MATA KULIAH WEBGEOSPASIAL ',
    chapters: [
        {
            id: 'indonesiaid', 
            title: 'JUMLAH KASUS POSITIF DI INDONESIA : 16.475',
            image:'G:/Semester 3/Webgeospasial/Pak Trias/Miniproject/storytelling-master/src/vanilla-js/images/indonesia.png',
            description: 'INDONESIA Memiliki Kasus Pertama Covid - 19 Pada awal maret yang terjadi di Jakarta, Virus Dari waktu ke waktu mengalami Penyebaran secara masif dan merata di seluruh indonesia. Transportasi dan aksesbilitas mendorong masif nya penyebaran ini. berdasarkan dari data rute penerbangan menunjukkan bahwa Bandara di DKI JAKARTA terhubung secara langsung dengan kota lainnya. kota yang terhubung langsung memiliki jumlah terindikasi COVID - 19 yang tinggi',
                location: {
                center: { lon: 106.650634766, lat: -6.128601074 },
                zoom: 6,
                pitch: 59.5,
                bearing: -1.19,
              },
              onChapterEnter: [
                {
                  layer: 'natmall-path',
                  opacity: 0.9,
                },
              ],
              onChapterExit: [
                {
                  layer: 'natmall-path',
                  opacity: 0,
                },
              ],
           },
           {
            id: 'jakartaid',
            title: 'DKI JAKARTA - JUMLAH KASUS 5774 POSITIF',
            image: 'G:/Semester 3/Webgeospasial/Pak Trias/Miniproject/storytelling-master/src/vanilla-js/images/jakarta.png',
            description: 'Penurunan Mobilitas transportasi Publik disebabkan dengan adanya PSBB, PSBB Memberikan batasan untuk berpergian kelaur rumah termasuk bekerja ',
            location: {
                center: { lon: 106.650634766, lat: -6.128601074 },
                zoom: 8,
                pitch: 59.5,
                bearing: -1.19,
              },
              onChapterEnter: [
                {
                  layer: 'natmall-path',
                  opacity: 0.9,
                },
              ],
              onChapterExit: [
                {
                  layer: 'natmall-path',
                  opacity: 0,
                },
              ],
           },
        {
            id: 'jatimid',
            title: 'JAWA TIMUR - JUMLAH KASUS 1921 POSITIF',
            image: 'G:/Semester 3/Webgeospasial/Pak Trias/Miniproject/storytelling-master/src/vanilla-js/images/jatim.png',
            description: 'Penurunan Transportasi Publik menunjukkan Kesadaran Masyarakat akan covid yang semakin meningkat',
            location: {
                center: { lon: 112.800415039, lat: -7.381896973 },
                zoom: 14.68,
                pitch: 0.0,
                bearing: 0.0,
              },
              onChapterEnter: [
                {
                  layer: 'natmall-visitors-circles',
                  opacity: 1,
                },
                {
                  layer: 'natmall-visitors-labels',
                  opacity: 1,
                },
              ],
              onChapterExit: [
                {
                  layer: 'natmall-visitors-circles',
                  opacity: 0,
                },
                {
                  layer: 'natmall-visitors-labels',
                  opacity: 0,
                },
              ],  
            },  
            {
                id: 'jabarid',
                title: 'JAWA BARAT - JUMLAH KASUS 1596 POSITIF',
                image: 'G:/Semester 3/Webgeospasial/Pak Trias/Miniproject/storytelling-master/src/vanilla-js/images/jabar.png',
                description: 'Penurunan Transportasi Publik > 50%, Terkait PSBB yang diberlakukan secara menyeluruh di Jawa Barat ',
                location: {
                    center: { lon: 107.585632324, lat: -6.903869629 },
                    zoom: 16.97,
                    pitch: 45.5,
                    bearing: -36.8,
                  },
                  onChapterEnter: [
                    {
                      layer: 'natmall-buildings',
                      opacity: 0.8,
                    },
                  ],
                  onChapterExit: [
                    {
                      layer: 'natmall-buildings',
                      opacity: 0.3,
                    },
                  ],
             }, 
             {
                id: 'jatengid',
                title: 'JAWA TENGAH - JUMLAH KASUS 1109 POSITIF ',
                image: 'G:/Semester 3/Webgeospasial/Pak Trias/Miniproject/storytelling-master/src/vanilla-js/images/jabar.png',
                description: 'Penurunan pengguna Transportasi Publik di Jateng terjadi dengan bertahap, hal ini terkait kebijakan pembatasan mobilitas yang dilakukan di seluruh kab.',
                location: {
                    center: { lon: 110.38104248, lat: -6.977294922 },
                    zoom: 16.18,
                    pitch: 59.5,
                    bearing: -91.09,
                  },
                  onChapterEnter: [
                    {
                      layer: 'natmall-buildings',
                      opacity: 0.8,
                    },
                  ],
                  onChapterExit: [
                    {
                      layer: 'natmall-buildings',
                      opacity: 0.3,
                    },
                  ],
             },
             {
                id: 'sulselid',
                title: 'SULAWESI SELATAN- JUMLAH KASUS 871 POSITIF',
                image: 'G:/Semester 3/Webgeospasial/Pak Trias/Miniproject/storytelling-master/src/vanilla-js/images/sulsel.png',
                description: 'Penurunan Transportasi Publik yang tinggi menunjukkan kesadaran masyarakat akan bahaya Covid.',
                location: {
                    center: { lon: 119.546386719, lat: -5.076293945 },
                    zoom: 14.18,
                    pitch: 59.5,
                    bearing: -1.19,
                  },
                  onChapterEnter: [
                    {
                      layer: 'natmall-path',
                      opacity: 0.9,
                    },
                  ],
                  onChapterExit: [
                    {
                      layer: 'natmall-path',
                      opacity: 0,
                    },
                  ],
             },
        ],        
   };